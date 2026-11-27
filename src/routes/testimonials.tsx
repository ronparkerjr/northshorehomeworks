import { SiteImage } from "@/components/site/SiteImage";
import { SITE_URL } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { ReviewCard } from "@/components/site/ReviewCard";
import { testimonials } from "@/content/site";
import { images } from "@/content/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customer Testimonials & Reviews | North Shore Home Works" },
      {
        name: "description",
        content:
          "Read Google reviews and letters from North Shore homeowners about remodeling, repairs, painting, gutters and fences by North Shore Home Works.",
      },
      { property: "og:title", content: "Testimonials | North Shore Home Works" },
      { property: "og:description", content: "What North Shore homeowners say about working with Ron and his team." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/testimonials` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/testimonials` }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const google = testimonials.filter((t) => t.source === "google");
  const letters = testimonials.filter((t) => t.source === "letter");
  const featured = letters.find((l) => l.name === "S. Hershinow");

  return (
    <div>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <section className="container-site pb-16 pt-16 lg:pt-24">
          <Reveal className="grid gap-8">
            <div>
              <Eyebrow>Testimonials</Eyebrow>
              <h1 className="display-fit mt-6 md:text-[2.6rem]">Our customers tell it best.</h1>
            </div>
            <p className="lead max-w-2xl">
              Remodeling can be a challenging process. Here's what homeowners across the North Shore say about working with us — in their own words.
            </p>
          </Reveal>
        </section>

        {featured?.full && (
          <section className="section bg-surface">
            <div className="container-site grid items-center gap-16 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <div className="img-zoom aspect-[4/5]"><SiteImage src={images.kitchen} alt="Finished kitchen and dining room" /></div>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-7">
                <Eyebrow>A letter from {featured.location}</Eyebrow>
                <div className="mt-8 space-y-4 font-display text-xl leading-relaxed">
                  {featured.full.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <p className="mt-8 text-sm"><span className="font-semibold">{featured.name}</span> <span className="text-muted-foreground">· Letter to North Shore Home Works</span></p>
              </Reveal>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container-site">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Google Reviews</Eyebrow>
                <h2 className="display-lg mt-5 lg:text-[2.6rem]">Posted publicly by our customers.</h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">Reviews shown as posted on Google.</p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {google.map((t, i) => (
                <Reveal key={t.name} delay={(i % 3) * 100}><ReviewCard t={t} /></Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container-site">
            <Reveal>
              <Eyebrow>Letters From Homeowners</Eyebrow>
              <h2 className="display-lg mt-5 lg:text-[2.6rem]">Thank-you notes we've received.</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {letters.filter((l) => l !== featured).map((t, i) => (
                <Reveal key={t.name} delay={(i % 2) * 100}>
                  <figure className="quote-card bg-background">
                    <span className="font-display text-5xl leading-none text-primary">“</span>
                    <div className="mt-4 space-y-3 leading-relaxed">
                      {(t.full ?? t.quote).split("\n\n").map((p, k) => <p key={k}>{p}</p>)}
                    </div>
                    <figcaption className="mt-6 text-sm">
                      <span className="font-semibold">{t.name}</span>
                      {t.location && <span className="text-muted-foreground"> · {t.location}</span>}
                      <span className="mt-1 block text-xs text-muted-foreground">Letter to North Shore Home Works</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <Eyebrow>Start Your Project</Eyebrow>
              <h2 className="display-lg mt-5 max-w-xl lg:text-[2.6rem]">Ready to be our next happy customer?</h2>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary btn-lg">Get Your Free Estimate <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/our-work" className="btn btn-outline btn-lg">See Our Work</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
