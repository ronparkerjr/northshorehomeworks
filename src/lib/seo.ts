import { business, areas } from "@/content/site";

export const SITE_URL = "https://northshorehomeworks.com";

/** Sitewide LocalBusiness JSON-LD — only verified facts (no ratings, hours or prices). */
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
  "@id": `${SITE_URL}/#business`,
  name: business.name,
  url: `${SITE_URL}/`,
  telephone: `+1-${business.phone}`,
  // No email in the listing data: the owner asked that it not be published.
  logo: business.logo,
  image: business.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
  areaServed: areas.map((a) => ({ "@type": "City", name: `${a}, IL` })),
  sameAs: [business.facebook],
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
  };
}
