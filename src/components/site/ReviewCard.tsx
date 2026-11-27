import { Star } from "lucide-react";
import type { Testimonial } from "@/content/site";

export function Stars({ rating }: { rating: number }) {
  return (
    <div role="img" className="flex gap-1 text-primary" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, k) => (
        <Star key={k} aria-hidden className={k < rating ? "h-4 w-4 fill-current" : "h-4 w-4 text-border"} />
      ))}
    </div>
  );
}

export function ReviewCard({ t, className = "" }: { t: Testimonial; className?: string }) {
  return (
    <figure className={`quote-card flex flex-col ${className}`}>
      {<span className="font-display text-5xl leading-none text-primary">“</span>}
      <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed">“{t.quote}”</blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-semibold">{t.name}</span>
        {t.location && <span className="text-muted-foreground"> · {t.location}</span>}
        <span className="mt-1 block text-xs text-muted-foreground">
          {t.source === "google" ? "Posted on Google" : "Letter to North Shore Home Works"}
          {t.service ? ` · ${t.service}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}
