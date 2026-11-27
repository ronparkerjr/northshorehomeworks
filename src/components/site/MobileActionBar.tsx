import { Phone } from "lucide-react";
import { business } from "@/content/site";

// Always visible on phone and tablet widths (hidden from 1280px up). It never
// hides itself: the page reserves space for it via the `mobile-page-space`
// padding, so nothing it overlaps is unreachable by scrolling. The bar is one
// full-width Call Now button — the estimate form stays in the page itself, so
// the bar never splits the tap target in half.
export function MobileActionBar() {
  return (
    <div
      data-mobile-actions
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-soft backdrop-blur xl:hidden"
    >
      <a
        href={business.phoneHref}
        data-cta="mobile-bar"
        aria-label={`Call ${business.name} at ${business.phone}`}
        className="btn btn-primary w-full justify-center px-2"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
    </div>
  );
}
