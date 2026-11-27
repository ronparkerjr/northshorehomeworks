import { afterEach, describe, expect, it, vi } from "vitest";
import { Route } from "@/routes/api/public/estimate";

// The owner's delivery address is a test-only placeholder; the real one lives in the
// FORMSUBMIT_TO secret and must never reach the browser or the logs.
const ADDRESS = "owner-inbox@example.test";
const HANDLERS = (Route as unknown as {
  options: { server: { handlers: { POST: (a: { request: Request }) => Promise<Response> } } };
}).options.server.handlers;

async function submit(ip: string) {
  return HANDLERS.POST({
    request: new Request("http://localhost/api/public/estimate", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
      body: JSON.stringify({ name: "Ron Parker", email: "ron@example.com", phone: "8474095507", service: "Decks & Fencing" }),
    }),
  });
}


afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  delete process.env["FORMSUBMIT_TO"];
});

describe("Estimate delivery route", () => {
  it("reports a refused delivery without a server error that blanks the page", async () => {
    process.env["FORMSUBMIT_TO"] = ADDRESS;
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: false,
      status: 503,
      json: async () => ({ success: "false", message: `Activate your form first: ${ADDRESS}` }),
    }));

    const res = await submit("203.0.113.10");
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body).toMatchObject({ success: false, delivered: false, error: "Your request could not be delivered." });
    expect(JSON.stringify(body)).not.toContain(ADDRESS);
    expect(log).toHaveBeenCalledOnce();
    expect(String(log.mock.calls[0]?.[0] ?? "")).not.toContain(ADDRESS);
  });

  it("reports a delivered request as delivered", async () => {
    process.env["FORMSUBMIT_TO"] = ADDRESS;
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, status: 200, json: async () => ({ success: "true" }) }));

    const res = await submit("203.0.113.11");

    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ success: true, delivered: true });
  });
});
