import { blogPosts } from "@/content/blog";
const blogSlugs = new Set(blogPosts.map((p) => p.slug));
// 301 map from the old WordPress site's URLs to their closest new pages.
// Town posts go to the Areas Served page; articles go to the matching service page
// unless the article was carried over to /blog.
const svc = (s: string) => `/services/${s}`;
const towns = ["des-plaines","arlington-heights","palatine","vernon-hills","glenview","kildeer","north-chicago","green-oaks","winnetka","indian-creek","lake-bluff","lake-forest","long-grove","northfield","glencoe","lincolnshire","buffalo-grove","highwood","wheeling","bannockburn","northbrook","riverwoods","highland-park","deerfield"];

export const legacyRedirects: Record<string, string> = {
  "/contact-us": "/contact",
  "/about-us": "/about",
  "/news": "/blog",
  "/sitemap": "/services",
  "/a-b-kunis": "/testimonials",
  "/a-matimore": "/testimonials",
  "/t-hartweg": "/testimonials",
  "/s-hershinow": "/testimonials",
  "/what-you-need-to-know-before-you-build-a-deck-for-your-home": "/blog/what-you-need-to-know-before-you-build-a-deck-for-your-home",
  "/tips-to-build-a-deck-in-your-house": svc("decks-fencing"),
  "/types-of-fences-for-your-home": "/blog/types-of-fences-for-your-home",
  "/ideas-for-remodeling-your-kitchen": "/blog/ideas-for-remodeling-your-kitchen",
  "/what-you-need-to-know-about-remodeling-your-kitchen": svc("remodeling-construction"),
  "/tips-for-remodeling-your-bedroom": "/blog/tips-for-remodeling-your-bedroom",
  "/tips-for-remodeling-your-basement": "/blog/tips-for-remodeling-your-basement",
  "/tips-for-remodeling-your-bathroom": "/blog/tips-for-remodeling-your-bathroom",
  "/prevent-weather-from-wrecking-remodeling-project": svc("remodeling-construction"),
  "/home-improvement-projects-finish-before-fall": svc("remodeling-construction"),
  "/exterior-fall-remodeling-projects-for-warm-winter-inside": svc("remodeling-construction"),
  "/help-your-windows-last-longer": svc("remodeling-construction"),
  "/5-signs-need-replace-homes-siding": svc("remodeling-construction"),
  "/pros-cons-top-3-siding-choices-used-on-new-homes-today": svc("remodeling-construction"),
  "/8-halloween-home-safety-measures-welcome-trick-treaters": "/",
  "/should-you-get-your-roof-replaced-or-repaired": "/blog/should-you-get-your-roof-replaced-or-repaired",
  "/can-roof-hold-santa-sleigh": svc("roofing-and-repairs"),
  "/5-roofing-options-consider-for-your-home": svc("roofing-and-repairs"),
  "/6-warning-signs-need-new-roof": svc("roofing-and-repairs"),
  "/how-to-install-gutters-on-your-home": "/blog/how-to-install-gutters-on-your-home",
  "/fall-list-get-know-gutter-system": svc("gutters-downspouts"),
  "/winter-get-mind-gutter": svc("gutters-downspouts"),
  "/interior-house-painting-tips": "/blog/interior-house-painting-tips",
  "/how-to-paint-the-outside-of-your-home": svc("painting-decorating"),
  ...Object.fromEntries(towns.map((t) => [`/home-improvement-in-${t}-illinois`, blogSlugs.has(`home-improvement-in-${t}-illinois`) ? `/blog/home-improvement-in-${t}-illinois` : "/areas-served"])),
};

export function findLegacyRedirect(pathname: string) {
  const p = pathname.replace(/\/+$/, "").toLowerCase() || "/";
  return legacyRedirects[p];
}
