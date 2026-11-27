import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

// Appears once the visitor has scrolled well down the page and steps aside while the
// footer is in view, so it never sits on top of content. On phone and tablet widths it
// rides above the always-visible call bar; the bar itself is never moved or hidden.
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let footerInView = false;
    const update = () => setShow(window.scrollY > 400 && !footerInView);
    window.addEventListener("scroll", update, { passive: true });

    const footer = document.querySelector("footer");
    const watch = new IntersectionObserver((entries) => {
      footerInView = entries.some((e) => e.isIntersecting);
      update();
    });
    if (footer) watch.observe(footer);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      watch.disconnect();
    };
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        // No behavior option here: the stylesheet picks smooth, or instant when the
        // visitor has asked for less motion.
        window.scrollTo(0, 0);
        document.getElementById("main-content")?.focus({ preventScroll: true });
      }}
      className="fixed right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-30 flex h-11 w-11 items-center justify-center border border-border bg-background text-foreground shadow-soft transition-opacity hover:text-primary xl:right-6 xl:bottom-6"
    >
      <ArrowUp aria-hidden className="h-5 w-5" />
    </button>
  );
}
