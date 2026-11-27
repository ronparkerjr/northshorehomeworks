import { SiteImage } from "@/components/site/SiteImage";
import { HeroSlider } from "@/components/site/HeroSlider";
import { GoogleReviewsCarousel } from "@/components/site/GoogleReviewsCarousel";
import { SITE_URL } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ReviewCard } from "@/components/site/ReviewCard";
import { ContactForm } from "@/components/site/ContactForm";
import { TrustList } from "@/components/site/TrustList";
import { ArrowRight, ArrowUpRight, ShieldCheck, Award, Star, Phone, Check } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { business, images, services, testimonials, projects, areas } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "North Shore Home Works | Remodeling & Construction, Chicago's North Shore" },
      {
        name: "description",
        content:
          "Remodeling, roofing, gutters, painting, decks and fencing across Chicago's North Shore. Over 25 years of quality craftsmanship. Call 847-409-5507 for a free estimate.",
      },
      { property: "og:title", content: "North Shore Home Works — Trusted for Over 25 Years" },
      {
        property: "og:description",
        content: "Quality remodeling and exterior improvements across Chicago's North Shore. Free estimates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <Hero />
        <Credibility />
        <Services />
        <Projects />
        <Why />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="container-site pb-6 pt-4 md:pb-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Chicago's North Shore Preferred Remodeler</Eyebrow>
            <h1 className="display-xl mt-6 text-[22px] min-[375px]:text-[26px] sm:text-[36px] lg:text-[40px] xl:text-[48px]">
              <span className="block">Beautiful Homes.</span>
              <em className="block whitespace-nowrap text-primary">Quality Craftsmanship.</em>
              <span className="block">Trusted for <span className="hero-underline">Over 25 Years.</span></span>
            </h1>
            <p className="lead mt-5 max-w-2xl">
              From inspired home renovations to expert exterior improvements, North Shore Home Works brings experience,
              quality, and personal attention to every project across Chicago's North Shore.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a href="#contact" className="btn btn-primary btn-lg">
                Get Your Free Estimate <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/services" className="btn btn-outline btn-lg">Explore Our Services</Link>
            </div>
            <GoogleReviewsCarousel />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <ContactForm compact title="Get Your Free Quote" source="hero" />
          </Reveal>
        </div>
      </div>
      <div className="container-site">
        <div className="hero-frame">
          <HeroSlider />
          <div className="hero-badge">
            <span className="font-display text-4xl text-primary">25+</span>
            <span className="text-sm leading-tight text-muted-foreground">years serving<br />the North Shore</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  const items = [
    { icon: Award, title: "Over 25 Years", text: "Replacing roofs, installing windows, remodeling kitchens and baths since the 1990s." },
    { icon: ShieldCheck, title: "Insured & Licensed", text: "Quality products and materials, with warranty terms specific to your service." },
    { icon: Star, title: "Recommended by Neighbors", text: "Homeowners praise our punctuality, professionalism, quality and value." },
  ];
  return (
    <section className="section-sm">
      <div className="container-site grid gap-10 border-y border-border py-12 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 100} className="flex gap-5">
            <it.icon className="h-7 w-7 shrink-0 text-primary" strokeWidth={1.5} />
            <div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="display-lg mt-5">Every phase of your home, interior to exterior.</h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="lead">
              Count on us for any job, no matter how big or how small —{" "}
              <span className="md:whitespace-nowrap">one trusted team for the whole house.</span>
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 100}>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="service-card group">
                <div className="img-zoom aspect-[4/3]">
                  <SiteImage src={s.image} alt={s.title} sizes="(min-width: 1024px) 420px, (min-width: 768px) 45vw, 100vw" loading="lazy" />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">0{i + 1}</p>
                    <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
                  </div>
                  <ArrowUpRight className="mt-6 h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  type P = (typeof projects)[number];
  const [a, b, c, d] = projects as [P, P, P, P];
  const Tile = ({ p, className }: { p: (typeof projects)[number]; className: string }) => (
    <figure className={`project-tile group ${className}`}>
      <SiteImage src={p.image} alt={p.title} loading="lazy" />
      <figcaption className="project-caption">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{p.category}</span>
        <span className="mt-1 block font-display text-xl text-foreground">{p.title}</span>
      </figcaption>
    </figure>
  );
  return (
    <section id="projects" className="section bg-surface">
      <div className="container-site">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Featured Work</Eyebrow>
            <h2 className="display-lg mt-5 max-w-2xl">Craftsmanship you can see from the curb.</h2>
          </div>
          <Link to="/our-work" className="link-arrow">See Our Work <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-8"><Tile p={b} className="aspect-[16/10]" /></Reveal>
          <Reveal delay={100} className="md:col-span-4"><Tile p={a} className="aspect-[4/5] md:aspect-auto md:h-full" /></Reveal>
          <Reveal className="md:col-span-5"><Tile p={c} className="aspect-[4/3]" /></Reveal>
          <Reveal delay={100} className="md:col-span-7"><Tile p={d} className="aspect-[16/10] md:aspect-auto md:h-full" /></Reveal>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const points = [
    "Insured and licensed remodeling contractors",
    "Great attention to detail on every project",
    "Quality products and materials",
    "Written warranty terms specific to the service",
    "Straightforward pricing and responsive communication",
    "Your best interest at the forefront, start to finish",
  ];
  return (
    <section id="about" className="section">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="img-zoom aspect-[4/5]">
            <SiteImage src={images.painting} alt="Careful painting detail on a window frame" loading="lazy" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-1/2 border-8 border-background md:block">
            <SiteImage src={images.framing} alt="Framing during a remodeling project" loading="lazy" className="aspect-square w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>Why North Shore Home Works</Eyebrow>
          <h2 className="display-lg mt-5">A personal approach to a challenging process.</h2>
          <p className="lead mt-6">
            Remodeling can be a challenging process — but our customers tell it best. They praise Ron Graham and our team
            for reliable scheduling, clear communication and work completed within the estimated budget.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "Reach Out", d: <>Call <a href={business.phoneHref} className="underline">{business.phone}</a> or send us a note about your project.</> },
    { t: "Free Consultation", d: "We visit, listen, and recommend options for your needs and budget." },
    { t: "Clear Estimate", d: "Straightforward, free pricing — no surprises." },
    { t: "Quality Build", d: "Our crew completes the work with care, with written warranty terms specific to your service." },
  ];
  return (
    <section className="section bg-surface">
      <div className="container-site">
        <Reveal className="max-w-4xl">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="display-lg-fit mt-5">From first call to finished project.</h2>
        </Reveal>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t}>
              <Reveal delay={i * 100} className="border-t-2 border-foreground pt-6">
                <span className="font-display text-5xl text-primary">{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  const lead = testimonials[0];
  if (!lead) return null;
  const rest = testimonials.slice(1);
  return (
    <section id="testimonials" className="section">
      <div className="container-site">
        <Reveal>
          <Eyebrow>What Customers Say</Eyebrow>
          <blockquote className="mt-8 max-w-5xl">
            <p className="font-display text-3xl leading-snug md:text-4xl">“{lead.quote}”</p>
            <footer className="mt-8 text-sm">
              <span className="font-semibold">{lead.name}</span>
              <span className="text-muted-foreground"> · Posted on Google</span>
            </footer>
          </blockquote>
        </Reveal>
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 100}><ReviewCard t={t} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section bg-surface">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Free Consultation & Estimate</Eyebrow>
          <h2 className="display-lg mt-5">Let's Talk</h2>
          <p className="lead mt-6">Tell us a little about your project and we'll be in touch to schedule your free estimate.</p>
          <a href={business.phoneHref} className="mt-10 flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span>
            <span>
              <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">Call us now</span>
              <span className="font-display text-2xl sm:text-3xl">{business.phone}</span>
            </span>
          </a>
          <TrustList />
          <p className="mt-10 text-sm leading-7 text-muted-foreground">Serving {areas.slice(0, 9).join(", ")} and surrounding areas.</p>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-7">
          <ContactForm source="home" />
        </Reveal>
      </div>
    </section>
  );
}

