import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/content/site";

const reviews = testimonials.filter((t) => t.source === "google");

export function GoogleReviewsCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = reviews.length;

  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => window.clearInterval(id);
  }, [paused, n]);

  if (!n) return null;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Google reviews"
      className="mt-6 max-w-2xl rounded-lg border border-border bg-card p-4 shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          What customers say on Google
        </p>
        <div className="flex gap-1">
          <button type="button" onClick={() => go(-1)} aria-label="Previous review"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground hover:bg-muted">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next review"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground hover:bg-muted">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${i * 100}%)` }} aria-live={paused ? "polite" : "off"}>
          {reviews.map((r, k) => (
            <figure key={r.name} className="w-full shrink-0 pt-3" aria-hidden={k !== i}
              aria-roledescription="slide" aria-label={`${k + 1} of ${n}`}>
              <blockquote className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground">“{r.quote}”</blockquote>
              <figcaption className="mt-2 text-xs text-muted-foreground">
                — {r.name} · Posted on Google
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-1 flex justify-center">
        {reviews.map((r, k) => (
          <button key={r.name} type="button" onClick={() => setI(k)} aria-label={`Show review ${k + 1}`}
            aria-current={k === i} className="grid h-6 min-w-5 place-items-center sm:min-w-6 sm:px-0.5">
            <span aria-hidden className={`block h-2 rounded-full transition-all ${k === i ? "w-5 bg-primary" : "w-2 bg-border"}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
