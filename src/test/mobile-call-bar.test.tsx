import { cleanup, render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it } from "vitest";

const { MobileActionBar } = await import("@/components/site/MobileActionBar");
const { business } = await import("@/content/site");

afterEach(cleanup);

const barSource = readFileSync("src/components/site/MobileActionBar.tsx", "utf8");
const rootSource = readFileSync("src/routes/__root.tsx", "utf8");
const css = readFileSync("src/styles.css", "utf8");

describe("Mobile call button", () => {
  it("offers a call link that dials the owner's number", () => {
    render(<MobileActionBar />);

    const call = screen.getByRole("link", { name: new RegExp(business.phone, "i") });

    expect(call).toHaveAttribute("href", business.phoneHref);
    expect(call).toHaveTextContent(/call now/i);
  });

  it("is the bar's only button and stretches across the full width", () => {
    render(<MobileActionBar />);

    // The estimate shortcut used to sit beside the call button, splitting the bar
    // in half; the owner asked for one full-width Call Now button instead.
    expect(screen.getAllByRole("link")).toHaveLength(1);
    expect(screen.queryByRole("link", { name: /free estimate/i })).not.toBeInTheDocument();
    expect(barSource).not.toMatch(/grid-cols-2/);
    expect(barSource).toMatch(/w-full/);
  });

  it("never hides the bar, so the call button is always on screen", () => {
    // The bar used to disappear whenever a form or alert was in view, which made the
    // call button unreachable on the pages where callers are most likely to need it.
    expect(barSource).not.toMatch(/return null/);
    expect(barSource).not.toMatch(/useState|useEffect/);
  });

  it("is mounted for the whole site and the page reserves space beneath it", () => {
    expect(rootSource).toMatch(/<MobileActionBar \/>/);
    expect(rootSource).toMatch(/className="mobile-page-space"/);
    expect(css).toMatch(/@utility mobile-page-space \{ padding-bottom: calc\(5rem \+ env\(safe-area-inset-bottom\)\)/);
  });
});
