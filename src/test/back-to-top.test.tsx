import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";

// jsdom has no IntersectionObserver, and the button watches the footer with one so it
// never sits on top of the footer.
vi.stubGlobal("IntersectionObserver", class {
  observe() {}
  unobserve() {}
  disconnect() {}
});

const { BackToTop } = await import("@/components/site/BackToTop");

const scrollTo = vi.fn();
Object.defineProperty(window, "scrollTo", { configurable: true, writable: true, value: scrollTo });

function scrolledTo(px: number) {
  Object.defineProperty(window, "scrollY", { configurable: true, writable: true, value: px });
  act(() => window.dispatchEvent(new Event("scroll")));
}

afterEach(() => {
  cleanup();
  scrollTo.mockClear();
  Object.defineProperty(window, "scrollY", { configurable: true, writable: true, value: 0 });
});

describe("Back to top button", () => {
  it("stays out of the way until the visitor has scrolled down", () => {
    render(<BackToTop />);

    expect(screen.queryByRole("button", { name: /back to top/i })).not.toBeInTheDocument();

    scrolledTo(1200);

    expect(screen.getByRole("button", { name: /back to top/i })).toBeInTheDocument();
  });

  it("returns the visitor to the top of the page", () => {
    render(<BackToTop />);
    scrolledTo(1200);

    fireEvent.click(screen.getByRole("button", { name: /back to top/i }));

    expect(scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it("is mounted for the whole site and clears the always-visible call bar", () => {
    const rootSource = readFileSync("src/routes/__root.tsx", "utf8");
    const source = readFileSync("src/components/site/BackToTop.tsx", "utf8");

    expect(rootSource).toMatch(/<BackToTop \/>/);
    // Sits above the phone call bar (which is z-40) instead of trading places with it.
    expect(source).toMatch(/bottom-\[calc\(5rem\+env\(safe-area-inset-bottom\)\)\]/);
    expect(source).toMatch(/z-30/);
    expect(source).toMatch(/xl:bottom-6/);
    // No forced scroll behaviour: the stylesheet decides, so reduced motion is honoured.
    expect(source).not.toMatch(/behavior:/);
  });
});
