import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { TrustList } from "@/components/site/TrustList";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { business, areas } from "@/content/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Free Estimate | North Shore Home Works" },
      { name: "description", content: "Request a free consultation and estimate from North Shore Home Works. Call 847-409-5507 or send us your project details." },
      { property: "og:title", content: "Contact North Shore Home Works — Free Estimate" },
      { property: "og:description", content: "Tell us about your remodeling, roofing, painting, deck or fence project. Free, no-obligation estimates on Chicago's North Shore." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

const mapQuery = encodeURIComponent(`${business.address} ${business.cityLine}`);

function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <section className="section bg-surface">
          <div className="container-site grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Free Consultation & Estimate</Eyebrow>
              <h1 className="display-lg mt-5 whitespace-nowrap !text-[23px] min-[375px]:!text-[27px] min-[414px]:!text-[30px] sm:!text-[2.6rem] lg:!text-[1.8rem] xl:!text-[2.4rem]">Let's discuss your project.</h1>
              <p className="lead mt-6">Whether it's a full remodel or a quick repair, tell us what you have in mind. We'll get back to you to schedule a free, no-obligation estimate.</p>
              <ul className="mt-10 space-y-6">
                <li>
                  <a href={business.phoneHref} data-cta="contact-page" className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span>
                    <span><span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">Call us today</span><span className="font-display text-2xl">{business.phone}</span></span>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border"><Mail className="h-5 w-5 text-primary" /></span>
                  <span><span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">Prefer email?</span><span className="font-semibold">Use the form — it reaches us the same way.</span></span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border"><MapPin className="h-5 w-5 text-primary" /></span>
                  <address className="not-italic"><span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">Office</span>{business.address}, {business.cityLine}</address>
                </li>
              </ul>
              <TrustList />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <ContactForm source="contact-page" />
            </Reveal>
          </div>
        </section>
        <section className="section">
          <div className="container-site grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Service Area</Eyebrow>
              <h2 className="display-md mt-5">Proudly serving Chicago's North Shore.</h2>
              <p className="mt-6 leading-8 text-muted-foreground">{areas.join(" · ")} and surrounding Illinois communities.</p>
            </div>
            <iframe
              title="Map of North Shore Home Works office"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=12&output=embed`}
              className="h-80 w-full border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

