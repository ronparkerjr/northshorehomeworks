import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "@/components/site/ContactForm";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  localStorage.clear();
});

function fillForm() {
  fireEvent.change(screen.getByLabelText(/Full name/), { target: { value: "Website QA" } });
  fireEvent.change(screen.getByRole("textbox", { name: /^Phone/ }), { target: { value: "2025550100" } });
  fireEvent.change(screen.getByRole("textbox", { name: /^Email/ }), { target: { value: "qa@example.com" } });
  const form = screen.getByRole("button", { name: "Get My Free Estimate" }).closest("form");
  if (!form) throw new Error("Estimate form is missing");
  return form;
}

describe("Estimate submission reliability", () => {
  it("opens the service dropdown on the placeholder rather than a preselected service", () => {
    render(<ContactForm compact />);
    const select = screen.getByRole("combobox", { name: /Service needed/ });
    expect((select as HTMLSelectElement).value).toBe("");
    expect(select.querySelector("option")?.textContent).toBe("Select one");
  });


  it("requires valid name, email and phone before attempting delivery", () => {
    const send = vi.fn();
    vi.stubGlobal("fetch", send);
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: "Get My Free Estimate" }));
    expect(send).not.toHaveBeenCalled();
    expect(screen.getByLabelText(/Full name/)).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("textbox", { name: /^Email/ })).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("textbox", { name: /^Phone/ })).toHaveAttribute("aria-invalid", "true");
  });

  it("retains successful delivery when browser storage reads and writes are blocked", async () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("Storage blocked"); });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Storage blocked"); });
    const send = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", send);
    render(<ContactForm />);
    fireEvent.submit(fillForm());
    await waitFor(() => expect(screen.getByRole("status")).toBeInTheDocument());
    expect(send).toHaveBeenCalledTimes(1);
  });

  it("prevents duplicate submissions while a delivery is pending", async () => {
    const send = vi.fn().mockReturnValue(new Promise(() => {}));
    vi.stubGlobal("fetch", send);
    render(<ContactForm />);
    const form = fillForm();
    fireEvent.submit(form);
    fireEvent.submit(form);
    expect(send).toHaveBeenCalledTimes(1);
  });

  it("does not report delivery success on a failed service response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, json: async () => ({ success: false, error: "Delivery unavailable" }) }));
    render(<ContactForm />);
    fireEvent.submit(fillForm());
    await waitFor(() => expect(screen.getByRole("alert")).toBeInTheDocument());
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Full name/)).toHaveValue("Website QA");
  });

  it("prevents a second successful request within 60 seconds", async () => {
    const send = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", send);
    render(<ContactForm />);
    fireEvent.submit(fillForm());
    await waitFor(() => expect(screen.getByRole("status")).toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Send another request" }));
    fireEvent.submit(fillForm());
    expect(send).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("shows the refusal and the phone number when delivery is refused without a server error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: false, delivered: false, error: "Your request could not be delivered." }),
    }));
    render(<ContactForm />);
    fireEvent.submit(fillForm());
    await waitFor(() => expect(screen.getByRole("alert")).toBeInTheDocument());
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByRole("alert").textContent).toContain("847-409-5507");
  });
});