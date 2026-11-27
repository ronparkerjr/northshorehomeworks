// Privacy-conscious event tracking: pushes events to window.dataLayer only
// (no personal form data). Connect GA4/GTM/Plausible later by reading dataLayer.
type EventName = "phone_click" | "estimate_submit" | "cta_click" | "gallery_open" | "gallery_filter";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: EventName, props: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...props, path: window.location.pathname });
}

/** Global listener: tracks every tel: link and any element marked data-cta. */
/** Loads Google Analytics 4 only when VITE_GA4_ID is set (no ID is invented here). */
function loadGa4() {
  const id = import.meta.env["VITE_GA4_ID"] as string | undefined;
  if (!id || document.getElementById("ga4")) return;
  const s = document.createElement("script");
  s.id = "ga4";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  const gtag = function () { window.dataLayer?.push(arguments as unknown as Record<string, unknown>); };
  (gtag as (...a: unknown[]) => void)("js", new Date());
  (gtag as (...a: unknown[]) => void)("config", id, { anonymize_ip: true });
}

export function installClickTracking() {
  loadGa4();
  const on = (e: MouseEvent) => {
    const el = (e.target as HTMLElement | null)?.closest("a,button") as HTMLElement | null;
    if (!el) return;
    const href = el.getAttribute("href") || "";
    if (href.startsWith("tel:")) track("phone_click", { location: el.dataset["cta"] || "link" });
    else if (el.dataset["cta"]) track("cta_click", { location: el.dataset["cta"] });
  };
  document.addEventListener("click", on);
  return () => document.removeEventListener("click", on);
}
