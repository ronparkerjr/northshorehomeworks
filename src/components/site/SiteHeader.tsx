import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { business } from "@/content/site";
import { serviceMenu } from "@/content/services";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useDialogFocus } from "@/hooks/use-dialog-focus";

const navLinks = [
  { to: "/our-work", hash: "", label: "Our Work" },
  { to: "/testimonials", hash: "", label: "Google Reviews" },
  { to: "/areas-served", hash: "", label: "Areas Served" },
  { to: "/contact", hash: "", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  useDialogFocus(open, menuRef);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); setMega(false); }
    };
    const onResize = () => { if (window.innerWidth >= 1280) setOpen(false); else setMega(false); };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { document.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, []);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      ref={menuRef}
      role={open ? "dialog" : undefined}
      aria-modal={open ? true : undefined}
      aria-label={open ? "Navigation" : undefined}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mega ? "bg-background/95 shadow-soft backdrop-blur" : "bg-background",
      )}
      onMouseLeave={() => setMega(false)}
    >
      <div className="container-site grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 xl:flex xl:justify-between">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Link to="/" aria-label="North Shore Home Works home" className="min-w-0 shrink-0" onClick={() => setOpen(false)}>
          <img src={business.logo} alt="North Shore Home Works logo" className="h-16 w-auto max-w-full object-contain" width={188} height={60} />
        </Link>
        <nav className="hidden h-full items-center gap-3 whitespace-nowrap xl:flex min-[1360px]:gap-5 [&>*]:shrink-0" aria-label="Main">
          <Link to="/" className="nav-link" onMouseEnter={() => setMega(false)}>Home</Link>
          <Link to="/about" className="nav-link" onMouseEnter={() => setMega(false)}>About</Link>
          <div className="flex h-full items-center" onMouseEnter={() => setMega(true)}>
            <Button variant="ghost"
              className="nav-link flex items-center gap-1"
              aria-expanded={mega}
              aria-controls="desktop-services"
              onClick={() => setMega(!mega)}
            >
              Services <ChevronDown className={cn("h-4 w-4 transition", mega && "rotate-180")} />
            </Button>
          </div>
          {navLinks.map((n) => (
            <Link key={n.label} to={n.to} hash={n.hash} className="nav-link" onMouseEnter={() => setMega(false)}>
              {n.label === "Google Reviews" ? <span className="inline-flex items-center gap-1"><Star aria-hidden className="nav-star h-3.5 w-3.5 fill-current text-primary" />{n.label}</span> : n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <a href={business.phoneHref} className="flex min-h-6 items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            <Phone className="h-4 w-4 text-primary" /> {business.phone}
          </a>
          <Link to="/contact" className="btn btn-primary">Free Estimate</Link>
        </div>
        <Button variant="ghost" size="icon" data-dialog-close className="h-12 w-12 shrink-0 xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {mega && (
        <div id="desktop-services" className="mega-panel hidden xl:block" onBlur={(event) => { if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) setMega(false); }}>
          <div className="container-site grid grid-cols-5 gap-10 py-10">
            {serviceMenu.map((g) => (
              <div key={g.group}>
                <p className="footer-title text-primary">{g.group}</p>
                <ul className="space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: it.slug }}
                        hash={it.hash}
                        className="mega-link"
                        onClick={() => setMega(false)}
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-surface p-6">
              <p className="font-display text-2xl">Not sure where to start?</p>
              <p className="mt-2 text-sm text-muted-foreground">Tell us about your home and we'll recommend the right approach.</p>
              <Link to="/services" className="link-arrow mt-5" onClick={() => setMega(false)}>
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {open && (
        <nav id="mobile-navigation" aria-label="Mobile" className="mobile-menu border-t border-border bg-background xl:hidden">
          <div className="container-site flex flex-col gap-2 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-3 text-lg font-medium">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-3 text-lg font-medium">About</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="py-3 text-lg font-medium">All Services</Link>
            {serviceMenu.map((g) => (
              <details key={g.group} className="group border-b border-border">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold text-primary">{g.group}<ChevronDown className="h-4 w-4 shrink-0 group-open:rotate-180" /></summary>
                <div className="grid gap-1 pb-3 pl-3 text-base sm:grid-cols-2">
                  {g.items.map((it) => (
                    <Link key={it.label} to="/services/$slug" params={{ slug: it.slug }} hash={it.hash} className="flex min-h-12 items-center py-2" onClick={() => setOpen(false)}>
                      {it.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            {navLinks.map((n) => (
              <Link key={n.label} to={n.to} hash={n.hash} onClick={() => setOpen(false)} className="py-3 text-lg font-medium">
                {n.label === "Google Reviews" ? <span className="inline-flex items-center gap-1.5"><Star aria-hidden className="nav-star h-4 w-4 fill-current text-primary" />{n.label}</span> : n.label}
              </Link>
            ))}
            <a href={business.phoneHref} className="py-3 font-semibold text-primary">{business.phone}</a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary self-start">Free Estimate</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
