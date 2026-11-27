import { SiteImage } from "@/components/site/SiteImage";
import { SITE_URL } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Expand } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { gallery, galleryCategories } from "@/content/gallery";
import { getService } from "@/content/services";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work — Project Gallery | North Shore Home Works" },
      {
        name: "description",
        content:
          "Browse kitchens, bathrooms, basements, roofing, gutters, painting, decks and fences from North Shore Home Works across Chicago's North Shore.",
      },
      { property: "og:title", content: "Our Work | North Shore Home Works" },
      { property: "og:description", content: "A photo gallery of remodeling and exterior projects on Chicago's North Shore." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/our-work` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/our-work` }],
  }),
  component: OurWork,
});

function OurWork() {
  const [cat, setCat] = useState<(typeof galleryCategories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = useMemo(() => (cat === "All" ? gallery : gallery.filter((g) => g.category === cat)), [cat]);
  const counts = (c: string) => (c === "All" ? gallery.length : gallery.filter((g) => g.category === c).length);

  return (
    <div>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <section className="container-site pb-12 pt-16 lg:pt-24">
          <Reveal className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Our Work</Eyebrow>
              <h1 className="display-xl mt-6 md:text-[2.6rem]">Craftsmanship, room by room.</h1>
            </div>
            <p className="lead lg:col-span-5 lg:self-end">
              Kitchens, baths, basements, roofs, paint and fences from homes across Chicago's North Shore. Tap any photo to view it full size.
            </p>
          </Reveal>
        </section>

        <div className="sticky top-20 z-30 border-y border-border bg-background/95 backdrop-blur">
          <div className="container-site flex gap-2 overflow-x-auto py-4" role="group" aria-label="Filter projects">
            {galleryCategories.map((c) => (
              <Button variant="ghost"
                key={c}
                aria-pressed={cat === c}
                onClick={() => { setOpen(null); setCat(c); track("gallery_filter", { category: String(c) }); }}
                className={cn("chip h-auto min-h-11 shrink-0", cat === c && "chip-active")}
              >
                {c} <span className="ml-1 opacity-60">{counts(c)}</span>
              </Button>
            ))}
          </div>
        </div>

        <section className="container-site py-12">
          <div key={cat} className="masonry">
            {items.map((g, i) => (
              <figure key={g.src} className="masonry-item">
                <Button variant="ghost" className="gallery-tile group h-auto rounded-none p-0" onClick={() => { setOpen(i); track("gallery_open", { photo: g.caption }); }} aria-label={`View photo: ${g.caption}`}>
                  <SiteImage
                    src={g.src}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    alt={g.alt}
                    loading={i < 4 ? "eager" : "lazy"}
                    className={cn(g.shape === "tall" ? "aspect-[3/4]" : g.shape === "wide" ? "aspect-[3/2]" : "aspect-square")}
                  />
                  <span className="gallery-expand" aria-hidden><Expand className="h-4 w-4" /></span>
                </Button>
                <figcaption className="mt-3 flex flex-col-reverse gap-1 text-sm">
                  <span>{g.caption}</span>
                  <Link to="/services/$slug" params={{ slug: g.service }} className="inline-flex min-h-6 items-center text-xs font-semibold uppercase text-primary hover:underline">
                    {getService(g.service)?.navLabel}
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <Eyebrow>Your Home Next</Eyebrow>
              <h2 className="display-lg mt-5 max-w-xl lg:text-[2.6rem]">Let's add your project to the gallery.</h2>
            </Reveal>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Your Free Estimate <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      {open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
    </div>
  );
}
