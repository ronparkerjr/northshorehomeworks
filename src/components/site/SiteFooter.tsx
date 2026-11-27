import { Link } from "@tanstack/react-router";
import { Facebook } from "lucide-react";
import { business, services, areas } from "@/content/site";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/our-work", label: "Our Work" },
  { to: "/testimonials", label: "Google Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/areas-served", label: "Areas Served" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-site grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <img src={business.logo} alt="North Shore Home Works logo" className="h-20 w-auto max-w-full object-contain md:h-24" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Chicago's North Shore preferred remodeler, serving homeowners for over 25 years. North Shore Home Works, Red's Roofing and North Shore Fences are identified on our original website as divisions of Menorah Painting & Decorating.
          </p>
          <Link to="/about" className="footer-link mt-4 inline-block text-sm font-semibold">About us & our commitments →</Link>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="North Shore Home Works on Facebook"
            data-cta="footer-facebook"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <Facebook className="h-4 w-4 text-primary" /> Follow us on Facebook
          </a>
        </div>
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((q) => (
              <li key={q.to}><Link to={q.to} className="footer-link">{q.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Services</h3>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="footer-link">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Areas Served</h3>
          <p className="text-sm leading-7 text-muted-foreground">{areas.slice(0, 12).join(" · ")} and more.</p>
          <Link to="/areas-served" className="footer-link mt-3 inline-block text-sm font-semibold">All areas served →</Link>
        </div>
        <div>
          <h3 className="footer-title">Contact</h3>
          <address className="space-y-2 text-sm not-italic text-muted-foreground">
            <p>{business.address}<br />{business.cityLine}</p>
            <p><a href={business.phoneHref} className="text-lg font-semibold text-foreground hover:text-primary">{business.phone}</a></p>
          </address>
          <Link to="/contact" className="btn btn-primary mt-6">Get a Free Estimate</Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-site flex flex-col justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} North Shore Home Works. All rights reserved.</p>
          <p>Northfield, Illinois</p>
        </div>
      </div>
    </footer>
  );
}
