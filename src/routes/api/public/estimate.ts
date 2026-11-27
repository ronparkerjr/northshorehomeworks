import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SITE_URL } from "@/lib/seo";

/**
 * Estimate requests are delivered by email to the address in the FORMSUBMIT_TO secret
 * (server-only — the address is never sent to the browser), forwarded through
 * https://formsubmit.co. The browser posts plain field names here; this handler builds
 * the delivery payload.
 */
const submission = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Please enter a 10-digit phone number")
    .refine((v) => v.length <= 25, "Phone number is too long"),
  service: z.string().trim().max(80).optional().default(""),
  zip: z.string().trim().max(60).optional(),
  message: z.string().trim().max(2000).optional(),
  contactMethod: z.string().trim().max(20).optional(),
  source: z.string().trim().max(40).optional(),
  page: z.string().trim().max(120).optional(),
  _honey: z.string().max(200).optional(),
});

const COOLDOWN_MS = 60_000;
const PRUNE_AFTER_MS = 10 * 60_000;
const recent = new Map<string, number>();

export const Route = createFileRoute("/api/public/estimate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const to = process.env["FORMSUBMIT_TO"];
        if (!to) {
          return Response.json({ success: false, error: "Delivery address is not configured." }, { status: 500 });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ success: false, error: "Invalid request." }, { status: 400 });
        }

        const parsed = submission.safeParse(body);
        if (!parsed.success) {
          return Response.json({ success: false, error: "Please check the highlighted fields." }, { status: 400 });
        }
        const d = parsed.data;

        // Honeypot filled: a bot. Report success so it does not learn why it failed.
        if (d._honey) return Response.json({ success: true });

        const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
        const now = Date.now();
        if (now - (recent.get(ip) ?? 0) < COOLDOWN_MS) {
          return Response.json({ success: false, error: "Please wait a minute before sending again." }, { status: 429 });
        }
        recent.set(ip, now);
        for (const [key, seen] of recent) if (now - seen > PRUNE_AFTER_MS) recent.delete(key);

        try {
          // FormSubmit rejects requests that look like a local file, and it must see the
          // same origin whether the request came from the preview or the live domain.
          const origin = SITE_URL;
          const referer = `${origin}${d.page?.startsWith("/") ? d.page : "/contact"}`;
          const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Origin: origin,
              Referer: referer,
            },
            body: JSON.stringify({
              Name: d.name,
              Email: d.email,
              Phone: d.phone,
              "Service needed": d.service || "Not specified",
              "Project location / ZIP": d.zip || "—",
              "Project description": d.message || "—",
              "Preferred contact": d.contactMethod || "No preference",
              "Submitted from": `${d.page ?? "/"} (${d.source ?? "form"})`,
              _subject: `New estimate request — ${d.service || "General inquiry"} — ${d.name}`,
              _replyto: d.email,
              _template: "table",
              _captcha: "false",
              _honey: "",
            }),
          });
          const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
          if (!res.ok || String(json.success) !== "true") {
            recent.delete(ip);
            // Server-side only: customers see a plain message, and the delivery address is
            // redacted so nothing sensitive reaches the logs.
            const detail = (json.message || `HTTP ${res.status}`).split(to).join("[address]");
            console.error(`[estimate] delivery failed: ${detail}`);
            // Upstream refused (e.g. the delivery address is not activated yet). Report the
            // refusal in the body rather than as a server error: a 5xx from this app's own
            // route blanks the preview, and the visitor still has to be told the truth.
            return Response.json({ success: false, delivered: false, error: "Your request could not be delivered." });
          }
          return Response.json({ success: true, delivered: true });
        } catch {
          recent.delete(ip);
          return Response.json({ success: false, delivered: false, error: "Your request could not be delivered." });
        }
      },
    },
  },
});
