import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { about, business, images, testimonials } from "@/content/site";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteImage } from "@/components/site/SiteImage";
import { Eyebrow, Reveal } from "@/components/site/Reveal";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Guarantees } from "@/components/site/Guarantees";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { PhoneText } from "@/components/site/PhoneText";

const title = "About North Shore Home Works | Over 25 Years on Chicago's North Shore";
const description = "Meet North Shore Home Works: over 25 years of remodeling, repairs, painting, roofing and fencing. Read our work commitments and service-specific written guarantees.";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: `${SITE_URL}/about` }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])) }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const quotes = testimonials.filter((review) => ["Judy Fine-Eichner", "Tammy Hartweg", "A. & B. Kunis"].includes(review.name));
  return <>
    <SiteHeader />
    <main id="main-content" tabIndex={-1} className="pt-20">
      <section className="container-site pb-12 pt-12 lg:pt-20">
        <Eyebrow>About Us</Eyebrow>
        <h1 className="display-xl mt-5 max-w-4xl md:text-[2.6rem]">North Shore Home Works</h1>
        <p className="lead mt-6 max-w-3xl">{about.intro}</p>
        <div className="hero-frame mt-10"><SiteImage src={images.kitchen} alt="Kitchen and connected dining room shown on the original North Shore Home Works website" className="hero-img" loading="eager" fetchPriority="high" /></div>
      </section>
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5"><Eyebrow>Personal Attention</Eyebrow><h2 className="display-lg mt-5 lg:text-[2.6rem]">Local experience. A personal commitment.</h2></Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7"><p className="lead">{about.leadership}</p><p className="mt-6 leading-relaxed text-muted-foreground">Our experience includes homes and commercial properties. Painting and fencing services have served commercial clients alongside our residential remodeling and exterior work.</p><Link to="/testimonials" className="link-arrow mt-6">Read our customers' words <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>
      <section className="section bg-surface">
        <div className="container-site"><Eyebrow>Related Business Divisions</Eyebrow><h2 className="display-lg mt-5 max-w-3xl lg:text-[2.6rem]">Specialized work, familiar names.</h2><p className="lead mt-6 max-w-3xl">{about.relationship}</p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">{about.divisions.map((division) => <article key={division.name} className="border-t border-border pt-6"><h3 className="font-display text-2xl">{division.name}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{division.text}</p><Link to="/services/$slug" params={{ slug: division.service }} className="link-arrow mt-5">View services <ArrowRight className="h-4 w-4" /></Link></article>)}</div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">The division names do not mean every service has the same licensing or warranty coverage. Confirm the contracting provider and applicable terms for your project with your estimate.</p>
        </div>
      </section>
      <section className="section"><div className="container-site"><Eyebrow>Why Choose Us</Eyebrow><h2 className="display-lg mt-5 lg:text-[2.6rem]">Care in the details.</h2><div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{about.commitments.map((item) => <div key={item.title} className="border-t border-border pt-6"><Check className="h-6 w-6 text-primary" aria-hidden /><h3 className="mt-4 text-lg font-semibold">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p></div>)}</div></div></section>
      <section id="guarantees" className="section bg-surface"><div className="container-site"><Eyebrow>Our Commitment</Eyebrow><h2 className="display-lg mt-5 lg:text-[2.6rem]">Written guarantees, specific to the work.</h2><p className="lead mt-6 max-w-3xl">Coverage depends on the service and the materials selected. Review the written terms for your project rather than assuming one warranty covers every kind of work.</p><div className="mt-12"><Guarantees /></div><p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">The original gutter and heating cable pages promise guaranteed work but do not state a warranty duration. Ask about the applicable coverage before work begins.</p></div></section>
      <section className="section"><div className="container-site grid gap-10 lg:grid-cols-2"><div><Eyebrow>Property Preparation</Eyebrow><h2 className="display-lg mt-5 lg:text-[2.6rem]">Before the listing. After the inspection.</h2></div><div><p className="lead">We help homeowners and real estate professionals prepare, maintain and improve residential properties, from home-inspection punch lists to painting and repairs before a sale.</p><p className="mt-6 leading-relaxed text-muted-foreground">Customer testimonials describe repairs completed before listing and after a home inspection. Bring your maintenance list to the conversation so we can discuss the work your property needs.</p><Link to="/services/$slug" params={{ slug: "remodeling-construction" }} hash="repairs" className="link-arrow mt-6">Home improvements & repairs <ArrowRight className="h-4 w-4" /></Link></div></div></section>
      <section className="section bg-surface"><div className="container-site"><Eyebrow>From Our Customers</Eyebrow><h2 className="display-lg mt-5 lg:text-[2.6rem]">Reliability, in their own words.</h2><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{quotes.map((review) => <ReviewCard key={review.name} t={review} className="bg-background" />)}</div><Link to="/testimonials" className="link-arrow mt-8">All reviews & letters <ArrowRight className="h-4 w-4" /></Link></div></section>
      <section className="section"><div className="container-site grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><Eyebrow>Common Questions</Eyebrow><h2 className="display-lg mt-5 lg:text-[2.6rem]">Working with us.</h2></div><div className="lg:col-span-8">{about.faqs.map((faq) => <details key={faq.q} className="faq"><summary>{faq.q}<span className="faq-icon shrink-0" aria-hidden>+</span></summary><p className="pb-6 leading-relaxed text-muted-foreground"><PhoneText>{faq.a}</PhoneText></p></details>)}</div></div></section>
      <section className="section bg-surface"><div className="container-site"><Eyebrow>Your North Shore Home</Eyebrow><h2 className="display-lg mt-5 max-w-3xl lg:text-[2.6rem]">Let's talk about what comes next.</h2><p className="lead mt-6 max-w-2xl">Based in {business.city}, serving Chicago's North Shore and nearby communities. Ask us about your property and request a free estimate.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" data-cta="about-estimate" className="btn btn-primary btn-lg">Get Your Free Estimate <ArrowRight className="h-4 w-4" /></Link><Link to="/areas-served" className="btn btn-outline btn-lg">Areas Served</Link><a href={business.phoneHref} className="btn btn-outline btn-lg"><Phone className="h-4 w-4" />{business.phone}</a></div></div></section>
    </main>
    <SiteFooter />
  </>;
}