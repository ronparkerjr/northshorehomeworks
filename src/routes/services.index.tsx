import { SiteImage } from "@/components/site/SiteImage";
import { SITE_URL } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { servicePages, serviceMenu } from "@/content/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Home Remodeling & Exterior Services | North Shore Home Works" },
      {
        name: "description",
        content:
          "Remodeling, roofing, gutters, painting, decks, fencing and heating cables for homes across Chicago's North Shore. Free estimates from a team with over 25 years of experience.",
      },
      { property: "og:title", content: "Services | North Shore Home Works" },
      { property: "og:description", content: "Every phase of your home, interior to exterior, on Chicago's North Shore." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <section className="container-site pb-16 pt-16 lg:pt-24">
          <Reveal>
            <Eyebrow>Our Services</Eyebrow>
            <h1 className="display-xl mt-6 max-w-4xl md:text-[2.6rem]">One trusted team for every part of your home.</h1>
            <p className="lead mt-6 max-w-2xl">
              From kitchens, bathrooms and basements to roofs, gutters, paint and fences — we handle all phases of repair and remodeling, interior and exterior.
            </p>
          </Reveal>
        </section>
        <section className="container-site grid gap-x-8 gap-y-16 pb-24 md:grid-cols-2">
          {servicePages.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 100}>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="service-card group">
                <div className="img-zoom aspect-[16/10]"><SiteImage src={s.hero} alt={s.title} sizes="(min-width: 768px) 45vw, 100vw" loading="lazy" /></div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{s.group}</p>
                    <h2 className="mt-2 font-display text-3xl">{s.title}</h2>
                  </div>
                  <ArrowUpRight className="mt-6 h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
              </Link>
            </Reveal>
          ))}
        </section>
        <section className="section bg-surface">
          <div className="container-site grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {serviceMenu.map((g) => (
              <div key={g.group}>
                <h2 className="footer-title">{g.group}</h2>
                <ul className="space-y-3 text-sm">
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <Link to="/services/$slug" params={{ slug: it.slug }} hash={it.hash} className="footer-link">{it.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
