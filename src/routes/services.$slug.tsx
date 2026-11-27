import { SiteImage } from "@/components/site/SiteImage";
import { PhoneText } from "@/components/site/PhoneText";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Phone, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { ReviewCard } from "@/components/site/ReviewCard";
import { ContactForm } from "@/components/site/ContactForm";
import { getService } from "@/content/services";
import { business, testimonials } from "@/content/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const s = getService(params.slug);
    if (!s) return { meta: [{ title: "Service not found | North Shore Home Works" }, { name: "robots", content: "noindex" }] };
    const title = `${s.title} on Chicago's North Shore | North Shore Home Works`;
    return {
      meta: [
        { title },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE_URL}/services/${s.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            serviceType: s.title,
            description: s.metaDescription,
            url: `${SITE_URL}/services/${s.slug}`,
            provider: { "@id": `${SITE_URL}/#business` },
            areaServed: { "@type": "Place", name: "Chicago's North Shore, Illinois" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: s.title, path: `/services/${s.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: ServicePageView,
});

function ServicePageView() {
  const { slug } = Route.useLoaderData();
  const s = getService(slug);
  if (!s) throw notFound();
  const quotes = testimonials.filter((t) => t.tags.some((tag) => s.testimonialTags.includes(tag))).slice(0, 3);
  const related = s.related.map(getService).filter((r) => r !== undefined);

  return (
    <div>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        {/* Hero */}
        <section className="relative">
          <div className="service-hero">
            <SiteImage src={s.hero} alt={s.title} loading="eager" fetchPriority="high" className="hero-img" />
            <div className="service-hero-overlay" />
          </div>
          <div className="container-site relative -mt-12 md:-mt-32">
            <div className="service-hero-card">
              <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-primary">Home</Link> /{" "}
                <Link to="/services" className="hover:text-primary">Services</Link> / <span className="text-foreground">{s.title}</span>
              </nav>
              <div className="mt-6"><Eyebrow>{s.title}</Eyebrow></div>
              <h1 className="display-xl mt-5 max-w-4xl md:text-[2.6rem]">{s.headline}</h1>
              <div className="mt-8 grid gap-8 lg:grid-cols-12">
                <p className="lead lg:col-span-7">{s.intro}</p>
              <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-start lg:col-span-5 lg:justify-end">
                  <a href="#estimate" className="btn btn-primary btn-lg">Get Your Free Estimate <ArrowRight className="h-4 w-4" /></a>
                  <a href={business.phoneHref} className="btn btn-outline btn-lg"><Phone className="h-4 w-4" /> {business.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jump links */}
        {s.sections.length > 2 && (
          <div className="container-site mt-12">
            <div className="flex flex-wrap gap-2">
              {s.sections.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} className="chip">{sec.title}</a>
              ))}
            </div>
          </div>
        )}

        {/* Detail sections */}
        <section className="section">
          <div className="container-site space-y-24 lg:space-y-32">
            {s.sections.map((sec, i) => (
              <div key={sec.id} id={sec.id} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                {sec.image && (
                  <Reveal className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                    <div className="img-zoom aspect-[4/3]">
                      <SiteImage src={sec.image} alt={sec.title} sizes="(min-width: 1024px) 45vw, 100vw" loading="lazy" />
                    </div>
                  </Reveal>
                )}
                <Reveal delay={100} className={sec.image ? "lg:col-span-6" : "lg:col-span-8"}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">0{i + 1}</p>
                  <h2 className="display-md mt-3">{sec.title}</h2>
                  <div className="mt-5 space-y-4">
                    {sec.body.map((p, k) => (
                      <p key={k} className="leading-relaxed text-muted-foreground">{p}</p>
                    ))}
                  </div>
                  {sec.bullets && (
                    <div className="mt-6">
                      {sec.bulletsTitle && <p className="text-sm font-semibold">{sec.bulletsTitle}:</p>}
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {sec.bullets.map((b) => (
                          <li key={b} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        {/* Options */}
        <section className="section bg-surface">
          <div className="container-site">
            <Reveal className="max-w-2xl">
              <Eyebrow>Service Options</Eyebrow>
              <h2 className="display-lg mt-5 lg:text-[2.6rem]">What we can do for you.</h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {s.options.map((o) => (
                <div key={o.title} className="option-cell">
                  <h3 className="font-display text-xl">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {s.gallery.length > 1 && (
          <section className="section-sm">
            <div className="container-site grid grid-cols-2 gap-4 md:grid-cols-4">
              {s.gallery.map((g, i) => (
                <div key={i} className="img-zoom aspect-[3/4]"><SiteImage src={g} alt={`${s.title} project photo ${i + 1}`} sizes="(min-width: 768px) 30vw, 50vw" loading="lazy" /></div>
              ))}
            </div>
          </section>
        )}

        {/* Why choose + guarantee */}
        <section className="section">
          <div className="container-site grid gap-16 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Why Choose North Shore Home Works</Eyebrow>
              <h2 className="display-lg mt-5 lg:text-[2.6rem]">Over 25 years of doing it right.</h2>
              <p className="lead mt-6">
                For over 25 years we've served homeowners and commercial properties across Chicago's North Shore. On every {s.title.toLowerCase()} project, you can count on us to:
              </p>
              <ul className="mt-8 space-y-4">
                {s.promises.map((p) => (
                  <li key={p} className="flex gap-3 border-b border-border pb-4"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{p}</li>
                ))}
              </ul>
            </Reveal>
            {s.guarantee && (
              <Reveal delay={100} className="lg:self-center">
                <div className="guarantee-card">
                  <ShieldCheck className="h-10 w-10 text-primary" strokeWidth={1.4} />
                  <h3 className="display-md mt-6">{s.guarantee.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.guarantee.text}</p>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* Testimonials */}
        {quotes.length > 0 && (
          <section className="section bg-surface">
            <div className="container-site">
              <Reveal><Eyebrow>What Customers Say</Eyebrow></Reveal>
              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {quotes.map((t, i) => (
                  <Reveal key={t.name} delay={i * 100}>
                    <ReviewCard t={t} className="bg-background" />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="section">
          <div className="container-site grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="display-lg mt-5 lg:text-[2.6rem]">Questions, answered.</h2>
            </Reveal>
            <div className="lg:col-span-8">
              {s.faqs.map((f) => (
                <details key={f.q} className="faq group">
                  <summary>{f.q}<span className="faq-icon">+</span></summary>
                  <p className="pb-6 leading-relaxed text-muted-foreground"><PhoneText>{f.a}</PhoneText></p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Estimate */}
        <section id="estimate" className="section bg-surface">
          <div className="container-site grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Free Consultation & Estimate</Eyebrow>
              <h2 className="display-lg mt-5 lg:text-[2.6rem]">Ready to talk about your {s.title.toLowerCase()} project?</h2>
              <p className="lead mt-6">Call <a href={business.phoneHref} className="underline">{business.phone}</a> or send a few details and we'll be in touch.</p>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7"><ContactForm defaultService={s.title} /></Reveal>
          </div>
        </section>

        {/* Related */}
        <section className="section-sm pb-24">
          <div className="container-site">
            <h2 className="footer-title">Related Services</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="related-card group">
                  <div className="img-zoom aspect-[16/10]"><SiteImage src={r.hero} alt={r.title} sizes="(min-width: 768px) 30vw, 50vw" loading="lazy" /></div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-xl group-hover:text-primary">{r.title}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
