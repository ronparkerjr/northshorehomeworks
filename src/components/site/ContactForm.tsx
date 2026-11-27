import { useId, useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { business, services } from "@/content/site";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Please enter a 10-digit phone number")
    .refine((v) => v.length <= 25, "Phone number is too long"),
  service: z.string().max(80),
  zip: z.string().trim().max(60).optional(),
  message: z.string().trim().max(2000, "Please keep the description under 2,000 characters").optional(),
  contactMethod: z.string().max(20).optional(),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const COOLDOWN_MS = 60_000;

export function ContactForm({
  defaultService,
  source = "form",
  compact = false,
  title,
}: { defaultService?: string; source?: string; compact?: boolean; title?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [failMsg, setFailMsg] = useState("Your request could not be delivered.");
  const lastSent = useRef(0);
  const inFlight = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const messageId = useId();
  const span = compact ? "" : "sm:col-span-2";
  const cardClass = compact ? "form-card-compact" : "form-card";

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current) return;
    const fd = new FormData(e.currentTarget);
    if (fd.get("_honey")) return; // bot
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Errors = {};
      for (const i of parsed.error.issues) errs[i.path[0] as keyof Errors] ??= i.message;
      setErrors(errs);
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setErrors({});
    // Storage can be unavailable in private or privacy-restricted browsers.
    let stored = 0;
    try {
      const value = Number(localStorage.getItem("nshw_last_submit") || 0);
      if (Number.isFinite(value)) stored = value;
    } catch { /* The in-memory cooldown still applies. */ }
    if (Date.now() - Math.max(lastSent.current, stored) < COOLDOWN_MS) {
      setFailMsg("Please wait a minute before sending again.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    inFlight.current = true;
    try {
      const d = parsed.data;
      const res = await fetch("/api/public/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: d.name,
          email: d.email,
          phone: d.phone,
          service: d.service,
          zip: d.zip || "",
          message: d.message || "",
          contactMethod: d.contactMethod || "",
          source,
          page: window.location.pathname,
          _honey: "",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; error?: string };
      if (!res.ok || String(json.success) !== "true") {
        throw new Error(json.error || "Your request could not be delivered.");
      }
      lastSent.current = Date.now();
      try {
        localStorage.setItem("nshw_last_submit", String(lastSent.current));
      } catch { /* A storage failure must not misreport a delivered request. */ }
      track("estimate_submit", { service: d.service, source });
      formRef.current?.reset();
      setStatus("sent");
    } catch (err) {
      setFailMsg(err instanceof Error && err.message ? err.message : "Your request could not be delivered.");
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  };

  if (status === "sent") {
    return (
      <div className={cardClass} role="status" aria-live="polite">
        <div className={compact ? "py-8 text-center" : "py-14 text-center"}>
          <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
          <h3 className="mt-4 font-display text-3xl">Thank you — your request was sent.</h3>
          <p className="mt-3 text-muted-foreground">
            We'll reach out soon to schedule your free estimate. Need us sooner? Call{" "}
            <a href={business.phoneHref} className="font-semibold text-foreground underline">{business.phone}</a>.
          </p>
          <Button variant="outline" className="btn btn-outline mt-6" onClick={() => setStatus("idle")}>Send another request</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cardClass}>
      {title && (
        <div className="mb-5">
          <h2 className="font-display text-2xl">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Free, no-obligation estimate. We only use your details to respond to your request.
          </p>
        </div>
      )}
      <form ref={formRef} onSubmit={onSubmit} noValidate className={compact ? "grid gap-3" : "grid gap-5 sm:grid-cols-2"}>
        {!compact && <p className={`text-xs text-muted-foreground ${span}`}><span className="text-primary">*</span> Required</p>}
        <Field label="Full name" name="name" autoComplete="name" required error={errors.name} />
        <Field label="Phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required error={errors.phone} />
        <Field label="Email" name="email" type="email" inputMode="email" autoComplete="email" required error={errors.email} />
        {!compact && <Field label="Project location / ZIP" name="zip" autoComplete="postal-code" error={errors.zip} />}
        <label className={span}>
          <span className="field-label">Service needed</span>
          <select name="service" className="field" defaultValue={defaultService ?? ""}>
            <option value="">Select one</option>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
            <option>Other / Not sure yet</option>
          </select>
        </label>
        <label className={span}>
          <span className="field-label">Brief project description</span>
          <textarea name="message" rows={compact ? 2 : 4} className="field resize-y" maxLength={2000} aria-invalid={!!errors.message} aria-describedby={errors.message ? messageId : undefined} />
          {errors.message && <span id={messageId} className="mt-1 block text-sm text-destructive" role="alert">{errors.message}</span>}
        </label>
        {!compact && (
          <fieldset className={span}>
            <legend className="field-label">Preferred contact method (optional)</legend>
            <div className="flex flex-wrap gap-5 text-sm">
              {["Phone", "Email", "Text"].map((m) => (
                <label key={m} className="flex min-h-11 items-center gap-2">
                  <input type="radio" name="contactMethod" value={m} className="accent-[var(--primary)]" /> {m}
                </label>
              ))}
            </div>
          </fieldset>
        )}
        {/* Honeypot: hidden from people, bots fill it */}
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
        {/* scroll-mb keeps the button clear of the always-visible mobile call bar. */}
        <Button type="submit" className={`btn btn-primary btn-lg h-auto scroll-mb-24 ${span}`} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Get My Free Estimate"}
        </Button>
        {status === "error" && (
          <p className={`text-sm text-destructive ${span}`} role="alert">
            {failMsg} Or call{" "}
            <a href={business.phoneHref} className="font-semibold underline">{business.phone}</a>.
          </p>
        )}
        {!compact && (
          <p className="text-xs text-muted-foreground sm:col-span-2">Free, no-obligation estimate. We only use your details to respond to your request.</p>
        )}
      </form>
    </div>
  );
}

function Field({
  label, error, required, ...props
}: { label: string; error?: string | undefined } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <label htmlFor={id}>
      <span className="field-label">{label}{required && <span className="text-primary"> *</span>}</span>
      <input id={id} {...props} required={required} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} className="field" />
      {error && <span id={`${id}-err`} className="mt-1 block text-sm text-destructive" role="alert">{error}</span>}
    </label>
  );
}
