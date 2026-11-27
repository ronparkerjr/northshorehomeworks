import { images } from "@/content/site";
import { photos } from "@/content/services";
import gutterDark from "@/assets/site/gutter-dark.jpg.asset.json";

export const galleryCategories = [
  "All",
  "Kitchens",
  "Bathrooms",
  "Home Renovations",
  "Roofing & Exterior",
  "Painting",
  "Decks & Fencing",
] as const;

export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  service: string; // service page slug
  /** "tall" | "wide" | "square" — used for masonry rhythm only */
  shape: "tall" | "wide" | "square";
};

// Every usable photograph from the original northshorehomeworks.com, captioned only with what is visible.
export const gallery: GalleryItem[] = [
  { src: images.kitchen, alt: "Open kitchen with wood cabinetry, granite island and pendant lights flowing into a dining room", caption: "Open-concept kitchen with island seating and a connected dining room", category: "Kitchens", service: "remodeling-construction", shape: "wide" },
  { src: photos.wallpaperBath, alt: "Powder room with patterned wallpaper, gold sconces and a black-framed mirror", caption: "Powder room with patterned wallpaper and brass fixtures", category: "Bathrooms", service: "painting-decorating", shape: "tall" },
  { src: photos.bathroom, alt: "Modern bathroom with freestanding tub and glass shower", caption: "Bathroom remodeling — freestanding tub and walk-in glass shower", category: "Bathrooms", service: "remodeling-construction", shape: "square" },
  { src: photos.foyer, alt: "Two-story foyer with dark hardwood floors and white staircase railing", caption: "Two-story entry with hardwood floors and painted stair railing", category: "Home Renovations", service: "remodeling-construction", shape: "tall" },
  { src: photos.stair, alt: "Stairwell with arched window and modern chandelier", caption: "Stairwell with arched window and a statement chandelier", category: "Home Renovations", service: "remodeling-construction", shape: "tall" },
  { src: photos.basement, alt: "Finished basement family room with sectional sofa and staircase", caption: "Finished basement family room", category: "Home Renovations", service: "remodeling-construction", shape: "wide" },
  { src: photos.basement2, alt: "Finished basement with recessed lighting and wall-mounted TV", caption: "Basement remodeling — bright, comfortable living space", category: "Home Renovations", service: "remodeling-construction", shape: "square" },
  { src: images.framing, alt: "Exposed roof trusses and ductwork during construction", caption: "Framing and mechanicals during construction", category: "Home Renovations", service: "remodeling-construction", shape: "square" },
  { src: images.roof, alt: "Gabled home with dark architectural shingle roof", caption: "Architectural shingle roof on a multi-gable home", category: "Roofing & Exterior", service: "roofing-and-repairs", shape: "wide" },
  { src: photos.fallHome, alt: "Brick home behind a white picket fence in autumn", caption: "North Shore home and picket fence in the fall", category: "Roofing & Exterior", service: "roofing-and-repairs", shape: "tall" },
  { src: images.gutter, alt: "White downspout and soffit on a home exterior", caption: "Seamless downspout and soffit detail", category: "Roofing & Exterior", service: "gutters-downspouts", shape: "square" },
  { src: gutterDark.url, alt: "White gutter and downspout against dark siding", caption: "Gutter and downspout installation on dark siding", category: "Roofing & Exterior", service: "gutters-downspouts", shape: "wide" },
  { src: photos.siding, alt: "Siding repair in progress with patched boards and a ladder", caption: "Siding repair in progress", category: "Roofing & Exterior", service: "remodeling-construction", shape: "square" },
  { src: photos.interiorPaint, alt: "Freshly painted lavender-gray bedroom with white trim", caption: "Interior painting — soft gray walls and crisp white trim", category: "Painting", service: "painting-decorating", shape: "wide" },
  { src: images.painting, alt: "Painter brushing white paint on a window frame", caption: "Careful brushwork on exterior window trim", category: "Painting", service: "painting-decorating", shape: "square" },
  { src: images.deckWide, alt: "Large wood deck with planters and pergola beside a two-story home", caption: "Multi-level entertaining deck with built-in planters", category: "Decks & Fencing", service: "decks-fencing", shape: "wide" },
  { src: photos.deckSmall, alt: "Small wood deck with a dining table outside a white home", caption: "Backyard deck for outdoor dining", category: "Decks & Fencing", service: "decks-fencing", shape: "square" },
  { src: images.fence, alt: "Cedar privacy fence around a landscaped backyard", caption: "Cedar privacy fence with capped posts", category: "Decks & Fencing", service: "decks-fencing", shape: "wide" },
  { src: photos.wood, alt: "Wood privacy fence along a lawn", caption: "Wood fencing", category: "Decks & Fencing", service: "decks-fencing", shape: "wide" },
  { src: photos.vinyl, alt: "White vinyl fence with gate", caption: "White vinyl fence and gate", category: "Decks & Fencing", service: "decks-fencing", shape: "wide" },
  { src: photos.ornamental, alt: "Black ornamental metal fence with scrollwork", caption: "Ornamental metal fencing with scroll detail", category: "Decks & Fencing", service: "decks-fencing", shape: "wide" },
  { src: photos.chain, alt: "Close-up of chain link fence", caption: "Chain link fencing", category: "Decks & Fencing", service: "decks-fencing", shape: "wide" },
];
