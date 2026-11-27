import { areas } from "@/content/site";
import { blogPosts, type BlogBlock } from "@/content/blog";

export const townSlug = (town: string) => town.toLowerCase().replace(/\s+/g, "-");

// Town pages reuse the owner's original town-post wording (from the old site), with each town's name swapped in.
const template = blogPosts.find((p) => p.slug === "home-improvement-in-glencoe-illinois")!;
const images = blogPosts.filter((p) => p.town).map((p) => ({ src: p.image, alt: p.imageAlt }));
const uniqueImages = images.filter((im, i) => images.findIndex((x) => x.src === im.src) === i);

// Painted width of "Home Improvement in <Town>, IL" in ems, measured in Fraunces 400 at
// the smallest size each title renders at (letters widen as the type shrinks, so this is
// the worst case). The page title utility scales the heading to 99cqw / this number, which
// keeps every town name on one line at any screen width. Re-measure in the browser if the
// title wording or the display font ever changes.
const titleEm: Record<string, number> = {
  deerfield: 16.68, northbrook: 17.93, "highland-park": 19.19, "lake-forest": 17.76,
  "lake-bluff": 17.13, glenview: 16.64, kenilworth: 17.63, wilmette: 16.61,
  winnetka: 16.87, northfield: 17.21, glencoe: 16.12, highwood: 17.2,
  bannockburn: 18.76, riverwoods: 17.88, lincolnshire: 18.25, "long-grove": 17.76,
  "buffalo-grove": 18.84, wheeling: 16.78, "indian-creek": 18.41, "green-oaks": 17.81,
  "north-chicago": 19.18, kildeer: 15.73, "vernon-hills": 18.22, palatine: 16.15,
  "arlington-heights": 20.76, "des-plaines": 17.74,
};

export function getTown(slug: string) {
  const i = areas.findIndex((a) => townSlug(a) === slug);
  if (i < 0) return undefined;
  const name = areas[i]!;
  const blocks: BlogBlock[] = template.blocks
    .filter((b) => !("h" in b && b.h.startsWith("For a consultation")))
    .map((b) => ("h" in b ? { h: b.h.replaceAll("Glencoe", name) } : { p: b.p.replaceAll("Glencoe", name) }));
  return { name, slug, blocks, em: titleEm[slug] ?? 20.8, image: uniqueImages[i % uniqueImages.length]! };
}
