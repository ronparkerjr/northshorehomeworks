import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { areas, business, services } from "@/content/site";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { townSlug } from "@/content/towns";

const title = "Areas Served — North Shore & Northwest Suburbs | North Shore Home Works";
const description =
  "North Shore Home Works serves Northfield, Deerfield, Highland Park, Lake Forest, Winnetka, Glenview, Northbrook and 19 more Illinois communities with remodeling, roofing, painting and fencing.";

export const Route = createFileRoute("/areas-served")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "Areas Served | North Shore Home Works" },
      { property: "og:description", content: "The Chicago North Shore and nearby suburbs we serve from our Northfield office." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/areas-served` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/areas-served` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Areas Served", path: "/areas-served" }])),
      },
    ],
  }),
  component: AreasPage,
});

const faqs = [
  {
    q: "Where is North Shore Home Works located?",
    a: `Our office is at ${business.address}, ${business.cityLine}. We travel to homes throughout Chicago's North Shore and the nearby northwest suburbs.`,
  },
  {
    q: "Do you serve my town?",
    a: "We serve the communities listed on this page. If your town isn't listed, call us — we may still be able to help with your project.",
  },
  {
    q: "Is the estimate free wherever I live?",
    a: "Yes. Consultations and estimates are free and there's no obligation, in every community we serve.",
  },
];

function AreasPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <section className="section bg-surface">
          <div className="container-site max-w-4xl">
            <Reveal>
              <Eyebrow>Areas Served</Eyebrow>
              <h1 className="display-lg mt-5 lg:text-[2.6rem]">Remodeling and home improvement across Chicago's North Shore.</h1>
              <p className="lead mt-6">
                From our office in Northfield, North Shore Home Works serves homeowners in {areas.length} communities along the North Shore and in the nearby northwest suburbs of Lake and Cook counties.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container-site">
            <h2 className="display-md">Communities we serve</h2>
            <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((a) => (
                <li key={a} className="border-b border-border">
                  <Link to="/areas-served/$town" params={{ town: townSlug(a) }} className="flex min-h-11 items-center gap-3 pb-3 hover:text-primary">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden /> {a}, IL
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-border pt-8">
              <h3 className="font-display text-2xl">Is your property in our service area?</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">Tell us your town and property location. The communities listed above are places we serve, not additional office locations.</p>
              <div className="mt-5 flex flex-wrap gap-3"><a href={business.phoneHref} className="btn btn-outline">Call {business.phone}</a><Link to="/contact" data-cta="area-check" className="btn btn-primary">Ask about your property <ArrowRight className="h-4 w-4" /></Link></div>
            </div>
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container-site grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="display-md">Services available in every town</h2>
              <ul className="mt-8 space-y-4">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="link-arrow">
                      {s.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="display-md">Common questions</h2>
              <dl className="mt-8 space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <dt className="font-semibold">{f.q}</dt>
                    <dd className="mt-2 text-muted-foreground">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="section text-center">
          <div className="container-site">
            <h2 className="display-md">Start your home improvement project.</h2>
            <p className="lead mx-auto mt-4 max-w-xl">Free consultation and estimate. Call <a href={business.phoneHref} className="font-semibold text-foreground underline">{business.phone}</a> or send us your project details.</p>
            <Link to="/contact" data-cta="areas-page" className="btn btn-primary btn-lg mt-8">Get Your Free Estimate <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
