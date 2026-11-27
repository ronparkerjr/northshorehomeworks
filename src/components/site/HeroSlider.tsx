import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteImage } from "@/components/site/SiteImage";
import { images } from "@/content/site";

// The four wide photos from the current website's homepage slider.
const slides = [
  { src: images.kitchen, alt: "Open-concept kitchen and dining room" },
  { src: images.roof, alt: "Gabled roof replacement on a North Shore home" },
  { src: images.deckWide, alt: "Multi-level entertaining deck" },
  { src: images.fence, alt: "Cedar privacy fence" },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setIndex((n + slides.length) % slides.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(t);
  }, [paused]);

  return (
    <div
      className="absolute inset-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project photos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}`}
        >
          <SiteImage src={s.src} alt={s.alt} className="h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "auto"} />
        </div>
      ))}
      <div className="absolute right-3 top-3 flex gap-2 md:right-5 md:top-5">
        <button type="button" onClick={() => go(index - 1)} aria-label="Previous photo" className="flex h-11 w-11 items-center justify-center bg-background/90 text-foreground shadow transition hover:bg-background">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => go(index + 1)} aria-label="Next photo" className="flex h-11 w-11 items-center justify-center bg-background/90 text-foreground shadow transition hover:bg-background">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-1 md:bottom-6 md:right-6">
        {slides.map((s, i) => (
          <button key={s.src} type="button" onClick={() => go(i)} aria-label={`Show photo ${i + 1}`} aria-current={i === index} className="flex h-6 w-6 items-center justify-center">
            <span className={`block h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-background/80"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
