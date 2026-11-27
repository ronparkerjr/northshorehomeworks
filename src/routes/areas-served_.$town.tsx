import type { CSSProperties } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Eyebrow } from "@/components/site/Reveal";
import { business, services } from "@/content/site";
import { getTown } from "@/content/towns";

export const Route = createFileRoute("/areas-served_/$town")({
  loader: ({ params }) => {
    if (!getTown(params.town)) throw notFound();
    return { slug: params.town };
  },
  head: ({ params }) => {
    const t = getTown(params.town);
    if (!t) return { meta: [{ title: "Area unavailable | North Shore Home Works" }, { name: "robots", content: "noindex" }] };
    const title = `Home Improvement in ${t.name}, IL | North Shore Home Works`;
    const desc = `Remodeling, roofing, gutters, painting, decks and fences for homeowners in ${t.name}, Illinois, from North Shore Home Works in Northfield. Free estimates: ${business.phone}.`;
    const url = `${SITE_URL}/areas-served/${t.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Areas Served", path: "/areas-served" }, { name: `${t.name}, IL`, path: `/areas-served/${t.slug}` }])) },
      ],
    };
  },
  component: TownPage,
});

function TownPage() {
  const { slug } = Route.useLoaderData();
  const t = getTown(slug)!;
  return (
    <div>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <article className="container-site max-w-3xl pb-16 pt-12 lg:pt-20">
          <Link to="/areas-served" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary">
            <ArrowLeft aria-hidden className="h-4 w-4" /> All areas served
          </Link>
          <div className="mt-6"><Eyebrow>Areas Served</Eyebrow></div>
          <div className="title-container mt-5" style={{ "--title-em": t.em } as CSSProperties}><h1 className="display-town">Home Improvement in {t.name}, IL</h1></div>
          <img src={t.image.src} alt={t.image.alt} width={1200} height={800} className="mt-10 aspect-[3/2] w-full object-cover" />
          <div className="mt-10 space-y-5 text-lg leading-relaxed">
            {t.blocks.map((b, i) => ("h" in b ? <h2 key={i} className="pt-4 font-display text-2xl">{b.h}</h2> : <p key={i}>{b.p}</p>))}
          </div>
          <div className="mt-12 border border-border bg-surface p-6 sm:p-8">
            <p className="font-display text-2xl">For a consultation and quote in {t.name}, contact us today.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="btn btn-primary"><Phone aria-hidden className="h-4 w-4" /> {business.phone}</a>
              <Link to="/contact" className="btn btn-outline">Request a free estimate</Link>
            </div>
          </div>
        </article>
        <section className="section bg-surface">
          <div className="container-site">
            <h2 className="display-md">Our services in {t.name}</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="link-arrow">{s.title} <ArrowRight className="h-4 w-4" /></Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
