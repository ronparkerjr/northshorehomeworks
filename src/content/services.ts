import { images, warranties } from "@/content/site";
import basement from "@/assets/site/basement.jpg.asset.json";
import basement2 from "@/assets/site/basement-remodle.jpg.asset.json";
import bathroom from "@/assets/site/bathroom-remodel.jpg.asset.json";
import chain from "@/assets/site/chain.jpg.asset.json";
import deckSmall from "@/assets/site/download.jpg.asset.json";
import fallHome from "@/assets/site/home-exterior-fall.jpg.asset.json";
import stair from "@/assets/site/image000000-1.jpg.asset.json";
import wallpaperBath from "@/assets/site/image000000-2.jpg.asset.json";
import foyer from "@/assets/site/image000000.jpg.asset.json";
import interiorPaint from "@/assets/site/interior-paint.jpg.asset.json";
import kitchen2 from "@/assets/site/kitchen-remodel.jpg.asset.json";
import ornamental from "@/assets/site/ornimental.jpg.asset.json";
import siding from "@/assets/site/siding-repair.jpg.asset.json";
import vinyl from "@/assets/site/vinyl.jpg.asset.json";
import wood from "@/assets/site/wood-fence.jpg.asset.json";

export const photos = {
  basement: basement.url,
  basement2: basement2.url,
  bathroom: bathroom.url,
  chain: chain.url,
  deckSmall: deckSmall.url,
  fallHome: fallHome.url,
  stair: stair.url,
  wallpaperBath: wallpaperBath.url,
  foyer: foyer.url,
  interiorPaint: interiorPaint.url,
  kitchen2: kitchen2.url,
  ornamental: ornamental.url,
  siding: siding.url,
  vinyl: vinyl.url,
  wood: wood.url,
};

export type ServiceSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  bulletsTitle?: string;
  image?: string;
};

export type ServicePage = {
  slug: string;
  group: string;
  title: string;
  navLabel: string;
  headline: string;
  metaDescription: string;
  intro: string;
  hero: string;
  sections: ServiceSection[];
  options: { title: string; text: string }[];
  promises: string[];
  guarantee?: { title: string; text: string };
  testimonialTags: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  gallery: string[];
};

// All factual statements below come from the original northshorehomeworks.com pages.
export const servicePages: ServicePage[] = [
  {
    slug: "remodeling-construction",
    group: "Remodeling & Construction",
    title: "Remodeling & Construction",
    navLabel: "Remodeling & Construction",
    headline: "North Shore remodeling, from the kitchen to the curb.",
    metaDescription:
      "Kitchen, bathroom and basement remodeling plus interior and exterior construction and repairs across Chicago's North Shore. Free consultation and estimate: 847-409-5507.",
    intro:
      "Looking for a home remodeler who stands by a rock-solid guarantee and superior service? We are a one-stop shop that handles all phases of repair and remodeling work, interior and exterior — count on us for any job, no matter how big or how small.",
    hero: images.kitchen,
    sections: [
      {
        id: "kitchen-remodeling",
        title: "Kitchen Remodeling",
        body: [
          "The kitchen is where a home comes together. We plan and build kitchen remodels around how your family actually cooks, gathers and stores — then handle the carpentry, electrical, plumbing and finish work under one roof.",
        ],
        image: photos.kitchen2,
      },
      {
        id: "bathroom-remodeling",
        title: "Bathroom Remodeling",
        body: [
          "From a full primary bath to a condo shower, our crews take bathrooms down to the studs when needed and rebuild them cleanly and carefully, with tile, fixtures and finishes that fit your style.",
        ],
        image: photos.bathroom,
      },
      {
        id: "basement-remodeling",
        title: "Basement Remodeling",
        body: [
          "Turn unused square footage into a family room, office or guest space. We also handle the practical side of basements — foundation crack repairs and emergency water removal.",
        ],
        image: photos.basement,
      },
      {
        id: "interior-remodeling",
        title: "Interior Remodeling",
        body: [
          "Carpentry, electrical, plumbing and interior painting — the trades that turn a dated room into one you love — all directly supervised by our team.",
        ],
        image: photos.foyer,
      },
      {
        id: "exterior-remodeling",
        title: "Exterior Remodeling",
        body: [
          "Roofing, gutters, siding installation and repair, window installation and window seal replacement, fences, and landscaping or tree removal to protect and refresh the outside of your home.",
        ],
        image: photos.siding,
      },
      {
        id: "repairs",
        title: "General Home Improvements & Repairs",
        body: [
          "Getting ready to sell, or working through a home-inspection punch list? We handle maintenance lists of every size — from window caulking to roof repair to matching ceiling paint — plus cleaning (including floors, carpets and cleanouts) and junk removal and haul-aways.",
        ],
        image: photos.stair,
      },
    ],
    options: [
      { title: "Roofing & Roof Repairs", text: "Full replacement and leak repair." },
      { title: "Gutters & Downspouts", text: "Aluminum, steel and copper systems." },
      { title: "Siding", text: "Siding installation and siding repairs." },
      { title: "Windows", text: "Window installation and window seal replacement." },
      { title: "Carpentry", text: "Trim, framing, decks and finish carpentry." },
      { title: "Electrical & Plumbing", text: "Handled as part of your remodel." },
      { title: "Painting", text: "Interior and exterior." },
      { title: "Foundation Crack Repairs", text: "Stop water before it spreads." },
      { title: "Emergency Water Removal", text: "Fast response when it matters." },
      { title: "Cleaning & Cleanouts", text: "Including floors and carpets." },
      { title: "Junk Removal / Haul-Aways", text: "We take it with us." },
      { title: "Fences, Landscaping & Tree Removal", text: "Finish the outdoor picture." },
    ],
    promises: [
      "Work cleanly and neatly",
      "Be reliable and professional",
      "Arrive on time",
      "Directly supervise and take responsibility for all our work",
    ],
    guarantee: {
      title: "4-year labor warranty",
      text: warranties[0].text,
    },
    testimonialTags: ["remodeling", "repairs"],
    faqs: [
      {
        q: "Do you take on small jobs?",
        a: "Yes. We handle all phases of repair and remodeling work — count on us for any job, no matter how big or how small, including home-inspection repair lists.",
      },
      {
        q: "Who supervises the work in my home?",
        a: "We directly supervise and take responsibility for all of our work, rather than handing your project off.",
      },
      {
        q: "Is the estimate free?",
        a: "Yes. Call 847-409-5507 or send us a message to set up your free consultation and free estimate.",
      },
      {
        q: "Can I see references?",
        a: "References are provided with your estimate or upon request, and you can read testimonials from past customers on our site.",
      },
    ],
    related: ["roofing-and-repairs", "painting-decorating", "gutters-downspouts"],
    gallery: [photos.kitchen2, photos.foyer, photos.wallpaperBath, photos.basement2],
  },
  {
    slug: "roofing-and-repairs",
    group: "Exterior",
    title: "Roofing & Repairs",
    navLabel: "Roofing & Repairs",
    headline: "Roofs built for four North Shore seasons.",
    metaDescription:
      "Roof replacement and roof repair for North Shore homes — asphalt, architectural, cedar shake, flat and rubber roofing. 10-year labor warranty. Call 847-409-5507.",
    intro:
      "Homeowners in the Chicago North Shore area need roofs that fit their budgets and stand up to all four of our seasons. Through our Red's Roofing division, we specialize in full roof replacement and roofing repairs for residential homes, with experience across all types of roofing materials.",
    hero: images.roof,
    sections: [
      {
        id: "roof-replacement",
        title: "Roof Replacement",
        body: [
          "There are a variety of roofing materials available today, from asphalt to cedar shingles. Each has specific advantages and disadvantages. We'll discuss the options that make the most sense for your structure and recommend a solution that fits your needs and your budget.",
          "Whether you're looking for a roof that offers environmental benefits or one that is cost-effective, we can help you select the materials that are ideal for your home.",
        ],
        bulletsTitle: "Materials we work with",
        bullets: [
          "Flat roofing",
          "Rubber roofing",
          "Asphalt shingles",
          "Three-tab shingles",
          "Architectural shingles",
          "Cedar shake & shingle",
        ],
        image: images.roof,
      },
      {
        id: "roof-repairs",
        title: "Leaky Roof? Roof Repairs",
        body: [
          "A leak can be caused by high winds or storm damage, clogged or damaged gutters, damaged flashings, or improperly installed ridge vents.",
          "Even when a leak appears in one spot inside your home, it may not have come from the matching spot on your roof. Water seeks its own level — a leak near the top of the roof can run down the interior unseen long before it shows up as a stain on your ceiling or a puddle on your floor. We have the right tools and experience to find the real source and fix it quickly, with a written, no-obligation estimate.",
        ],
        image: photos.fallHome,
      },
      {
        id: "roof-gutters",
        title: "Gutters That Protect Your Roof",
        body: [
          "We also install and repair gutters, including copper gutters. A gutter system that hasn't been cleaned in six months can cause a leaky roof down the road — when gutters clog, water may run down or behind your siding.",
        ],
        image: images.gutter,
      },
    ],
    options: [
      { title: "Full roof replacement", text: "Tear-off and new roof, material matched to your home." },
      { title: "Leak diagnosis & repair", text: "Find the true source, not just the stain." },
      { title: "Flashing & ridge vents", text: "Common leak points corrected." },
      { title: "Storm damage", text: "Repairs after wind and storm events." },
    ],
    promises: [
      "Arrive on time",
      "Work cleanly and neatly",
      "Be reliable and professional",
      "Take responsibility for all our work",
    ],
    guarantee: {
      title: "10-year labor warranty",
      text: warranties[2].text,
    },
    testimonialTags: ["roofing", "repairs"],
    faqs: [
      {
        q: "Should I repair or replace my roof?",
        a: "It depends on the material, the age of the roof and the cause of the problem. We'll inspect it and give you a written, no-obligation estimate with our honest recommendation.",
      },
      {
        q: "The stain on my ceiling is in one room — is that where the leak is?",
        a: "Not necessarily. Water seeks its own level and can travel inside the roof and walls before it shows up, which is why we trace leaks to their source.",
      },
      {
        q: "What warranty comes with a new roof?",
        a: warranties[2].text,
      },
      {
        q: "Which roofing materials do you install?",
        a: "Flat, rubber, asphalt, three-tab and architectural shingles, and cedar shake and shingle, among others.",
      },
    ],
    related: ["gutters-downspouts", "heating-cable-installation", "remodeling-construction"],
    gallery: [images.roof, photos.fallHome, images.gutter],
  },
  {
    slug: "gutters-downspouts",
    group: "Exterior",
    title: "Gutters & Downspouts",
    navLabel: "Gutters & Downspouts",
    headline: "Small part of the house. Big protection.",
    metaDescription:
      "Gutter installation, replacement and cleaning, plus downspout installation and repair in aluminum, steel and copper. Licensed and insured. Call 847-409-5507.",
    intro:
      "Not exactly the most exciting part of your home — but gutters and downspouts are among the most important features for preventing damage to your roof, landscaping and basement.",
    hero: images.gutter,
    sections: [
      {
        id: "gutter-replacement",
        title: "Gutter Installation & Replacement",
        body: [
          "If your home lacks a functioning gutter system, rainwater and melting snow will take years off your roof and can erode your foundation — top-to-bottom damage from such a small part of the house.",
        ],
        bulletsTitle: "We install all types of gutter systems",
        bullets: ["Aluminum gutters", "Steel gutters", "Copper gutters"],
        image: images.gutter,
      },
      {
        id: "gutter-cleaning",
        title: "Gutter Cleaning",
        body: [
          "If your gutter system hasn't been cleaned in the last six months, it may cause a leaky roof in the future. It's not unusual for roof leaks to be caused by gutters full of leaf debris. When water has nowhere to go, it can run down or behind the siding of your home — unsightly and potentially hazardous.",
          "If your gutters are damaged or clogged, we can correct the issue quickly and affordably.",
        ],
        image: photos.fallHome,
      },
      {
        id: "downspouts",
        title: "Downspout Installation & Repair",
        body: [
          "Downspouts carry water safely away from your foundation. We install new downspouts, upgrade to larger downspouts where water overwhelms the old ones, and repair damaged runs.",
        ],
        image: images.framing,
      },
    ],
    options: [
      { title: "Aluminum", text: "A popular, economical choice." },
      { title: "Steel", text: "A sturdy option for demanding runs." },
      { title: "Copper", text: "A distinctive, long-lasting upgrade." },
      { title: "Heating cables", text: "Keep gutters flowing through winter." },
    ],
    promises: [
      "Licensed and fully insured with liability insurance",
      "We guarantee our work",
      "References with your estimate or upon request",
      "Quick, affordable fixes for clogged or damaged gutters",
    ],
    testimonialTags: ["gutters"],
    faqs: [
      {
        q: "How often should gutters be cleaned?",
        a: "If your gutters haven't been cleaned in the last six months, it's time — clogged gutters are a common cause of roof leaks.",
      },
      {
        q: "What gutter materials do you offer?",
        a: "We install aluminum, steel and copper gutter systems.",
      },
      {
        q: "Can you help with ice in my gutters?",
        a: "Yes — we install gutter heating cables to keep drainage open through freezing weather.",
      },
      {
        q: "Are you licensed?",
        a: "Yes. We are licensed and fully insured with liability insurance. State License # 104.015836 and 105.005926.",
      },
    ],
    related: ["heating-cable-installation", "roofing-and-repairs", "remodeling-construction"],
    gallery: [images.gutter, photos.fallHome],
  },
  {
    slug: "painting-decorating",
    group: "Interior & Finishes",
    title: "Painting & Decorating",
    navLabel: "Painting & Decorating",
    headline: "Painting with a four-year written guarantee.",
    metaDescription:
      "Interior, exterior and commercial painting, wallpapering, faux finishes and power washing on Chicago's North Shore — backed by a 4-year written guarantee. 847-409-5507.",
    intro:
      "Menorah Painting & Decorating is the related painting operation identified on our original About Us page. Interior or exterior, residential or commercial, its painting and decorating services are backed by a four-year written guarantee and excellent references.",
    hero: photos.interiorPaint,
    sections: [
      {
        id: "interior-painting",
        title: "Interior Painting",
        body: [
          "We're punctual, sensitive to the needs of our customers, and reasonably priced. Your home is treated with care from start to finish.",
        ],
        bulletsTitle: "On every interior project we",
        bullets: [
          "Move furniture when needed",
          "Use clean drop cloths to cover all areas",
          "Remove unpainted hardware to protect it",
          "Prepare all surfaces as needed",
          "Apply high-quality materials",
          "Return all furniture to its original location",
          "Vacuum the area",
          "Perform a final inspection with you",
        ],
        image: photos.interiorPaint,
      },
      {
        id: "exterior-painting",
        title: "Exterior Painting",
        body: [
          "Our warranty even applies to exterior work in Chicago's rough climate. Any peeling, cracking or damage due to workmanship or product selection will be repaired.",
        ],
        bulletsTitle: "On every exterior project we",
        bullets: [
          "Remove storm windows as specified",
          "Cover bushes and grass near the building",
          "Cover brick walls and walkways with plastic",
          "Prepare all surfaces — including light repairs and carpentry",
          "Paint, stain and power-wash decks",
        ],
        image: images.painting,
      },
      {
        id: "wallpaper-finishes",
        title: "Wallpapering & Specialty Finishes",
        body: [
          "Our services include interior and exterior painting and plastering. We also employ specialists in artistic paint designs — marbling, faux finishes — and wallpapering to customize any room to your individual style.",
        ],
        image: photos.wallpaperBath,
      },
      {
        id: "commercial-painting",
        title: "Commercial Painting",
        body: [
          "We have provided commercial painting for many years on projects ranging from small to large, and we'll accommodate your special business needs.",
        ],
        bulletsTitle: "Commercial work has included",
        bullets: [
          "Mall interior & exterior space",
          "Industrial spaces",
          "Offices",
          "Nursing homes",
          "Metal lattice work",
        ],
        image: photos.stair,
      },
      {
        id: "power-washing",
        title: "Power Washing",
        body: [
          "Keep your decks, home, building, boats, swing sets and fencing looking like new. Having the right equipment and knowledge is key — it's not just point and shoot. Our power washers are geared to handle jobs both tough and delicate.",
        ],
        image: images.deck,
      },
    ],
    options: [
      { title: "Plaster, drywall, wood & metal", text: "Prepared and painted correctly." },
      { title: "Floor paints", text: "Acrylic and oil-based." },
      { title: "Rust-resistant paints", text: "For metal surfaces." },
      { title: "Residential & commercial", text: "Homes, offices and more." },
    ],
    promises: [
      "A written contract with every free estimate",
      "Punctual and reasonably priced",
      "An emphasis on quality and cleanliness",
      "Timely, professional completion",
    ],
    guarantee: {
      title: "4-year written guarantee",
      text: warranties[1].text,
    },
    testimonialTags: ["painting"],
    faqs: [
      {
        q: "What does your painting guarantee cover?",
        a: "Workmanship and materials for four years, including exterior work. Peeling, cracking or damage due to workmanship or product selection will be repaired.",
      },
      {
        q: "Do I need to move my furniture?",
        a: "No. We move furniture when needed, cover everything with clean drop cloths, and return it all to its original location when we finish.",
      },
      {
        q: "Do you do wallpaper or faux finishes?",
        a: "Yes. Our specialists handle wallpapering and artistic finishes such as marbling and faux.",
      },
      {
        q: "Do you paint commercial properties?",
        a: "Yes — offices, industrial spaces, retail and nursing homes among others. Call 847-409-5507 to discuss your business's needs.",
      },
    ],
    related: ["remodeling-construction", "decks-fencing", "roofing-and-repairs"],
    gallery: [photos.interiorPaint, photos.wallpaperBath, photos.foyer, photos.stair],
  },
  {
    slug: "decks-fencing",
    group: "Outdoor Living",
    title: "Decks & Fencing",
    navLabel: "Decks & Fencing",
    headline: "Fences and decks that make the yard yours.",
    metaDescription:
      "Wood, vinyl, ornamental and chain link fence installation and repair, plus custom decks and porches, across Chicago's North Shore. Year-round service. 847-409-5507.",
    intro:
      "Homeowner or commercial property, we meet all of your fence installation and repair needs in a variety of sizes, styles and colors — and help you choose based on your needs and budget. While most of our work is along Chicago's North Shore, we also serve the greater Chicago metro area, year-round.",
    hero: images.fence,
    sections: [
      {
        id: "wood-fencing",
        title: "Wood Fences",
        body: [
          "Wood fences are very popular along the North Shore. They're relatively inexpensive to install and easily customized to suit their surroundings, and they tend to get better with age as the wood matures. Wood needs occasional treating and repair, but maintenance costs are low and often take half the time of other fencing types.",
          "Wood is also an environmentally friendly choice: the trees it comes from can be regrown, and replaced fencing can be disposed of quickly and easily.",
        ],
        image: photos.wood,
      },
      {
        id: "vinyl-fencing",
        title: "Vinyl Fences",
        body: [
          "Vinyl is a popular alternative to wood, available in privacy, picket and ornamental styles — many conforming to swimming pool safety codes. White, tan and gray are the most common colors.",
          "Vinyl can cost more up front than wood, but ongoing maintenance is very low. It resists mold, rust and termites, and cleaning can be as easy as a garden hose.",
        ],
        image: photos.vinyl,
      },
      {
        id: "ornamental-fencing",
        title: "Ornamental Fences",
        body: [
          "Ornamental fencing offers an upscale look while providing a sense of security, in styles from traditional to contemporary. Personalize it with rails, rings, scrolls, finials and more.",
          "Ornamental steel and aluminum fences are most commonly used for front and back yards, and are popular for securing swimming pools and pets. Like vinyl, decorative metals have become increasingly durable and maintenance-free.",
        ],
        image: photos.ornamental,
      },
      {
        id: "chain-link-fencing",
        title: "Chain Link Fences",
        body: [
          "Chain link's big advantage is affordability, and it now comes in a number of styles and thicknesses. Vinyl-coated chain link — typically green or black — is more attractive and durable than plain silver steel: rust-resistant, pest-resistant and tolerant of harsh temperatures.",
          "A competent do-it-yourselfer can install chain link, but a professional installation results in a tighter, longer-lasting fence.",
        ],
        image: photos.chain,
      },
      {
        id: "fence-repairs",
        title: "Fence Repairs, Extensions & Gates",
        body: [
          "Whether you have children or pets, or simply want a little privacy, our services include new fence installation, repair or extension of existing fences, specialty gates and more. We're experienced with all fencing materials and repairs.",
        ],
        image: images.fence,
      },
      {
        id: "decks",
        title: "Decks & Outdoor Living",
        body: [
          "Dreaming of an outdoor living space to enjoy and relax on? We build decks and porches that expand your living space so you can enjoy our beautiful Illinois weather.",
          "No matter your budget, we'll walk you through the steps to create a relaxing oasis or a functional outdoor eating space — and keep it looking new with professional power washing.",
        ],
        image: images.deckWide,
      },
    ],
    options: [
      { title: "Wood", text: "Classic, customizable, low-cost upkeep." },
      { title: "Vinyl", text: "Privacy, picket and ornamental styles." },
      { title: "Ornamental", text: "Steel and aluminum, upscale and secure." },
      { title: "Chain link", text: "Affordable; vinyl-coated options." },
      { title: "Decks & porches", text: "Outdoor living spaces on any budget." },
      { title: "Power washing", text: "Decks, fences, siding and more." },
    ],
    promises: [
      "Fully licensed and insured",
      "Year-round fence installation and repair",
      "Recommendations based on your needs and budget",
      "Experienced with all fencing materials",
    ],
    guarantee: {
      title: "100% labor guarantee",
      text: warranties[3].text,
    },
    testimonialTags: ["fencing"],
    faqs: [
      {
        q: "Which fence material is right for me?",
        a: "Wood is affordable and customizable, vinyl is very low maintenance, ornamental metal is upscale and secure, and chain link is the most budget-friendly. We'll recommend options based on your needs and budget.",
      },
      {
        q: "Can you install a fence around a pool?",
        a: "Many vinyl and ornamental metal styles conform to swimming pool safety codes.",
      },
      {
        q: "Do you install fences in winter?",
        a: "We offer year-round service on all fence installation and repair projects.",
      },
      {
        q: "Do you work outside the North Shore?",
        a: "Most of our work is on Chicago's North Shore, but we also provide fence installation and repair throughout the Chicago metro area.",
      },
    ],
    related: ["painting-decorating", "remodeling-construction", "gutters-downspouts"],
    gallery: [images.deckWide, photos.wood, photos.vinyl, photos.deckSmall],
  },
  {
    slug: "heating-cable-installation",
    group: "Exterior",
    title: "Heating Cable Installation",
    navLabel: "Heating Cables",
    headline: "Stop ice dams before winter starts.",
    metaDescription:
      "Gutter and roof heating cable installation for Chicago's North Shore winters. Protect your roof, gutters and downspouts from ice dams. Call 847-409-5507.",
    intro:
      "To complement our gutter and roofing services, we install gutter heating cables that protect those investments through Chicago-area winters.",
    hero: photos.fallHome,
    sections: [
      {
        id: "what-are-heating-cables",
        title: "What Are Gutter Heating Cables?",
        body: [
          "Known as heat cables, gutter heaters or heat tape, gutter heating cables can be critical in preventing winter weather from damaging your roof, gutters and downspouts. When temperatures fall below freezing, melted snow can refreeze into ice dams that stop water from draining off your roof.",
          "Installed within the gutters and downspouts, the cables melt frozen precipitation and keep an open drainage path from the roof to the ground.",
        ],
        image: images.gutter,
      },
      {
        id: "choosing-cables",
        title: "What to Look For",
        body: [
          "Compatibility and safety: cables should be waterproof, shouldn't crack in extreme cold, and must be compatible with your roof, gutter and downspout materials.",
          "Electrical power: most heating cables provide 5–7 watts per foot. Chicago and its north suburbs aren't known for mild winters — you may be better served by at least 10 watts per foot.",
          "Automatic sensors: cables with sensors cost more but improve efficiency and need far less maintenance, switching off automatically when heat isn't needed. Without sensors, you'll plug and unplug them as temperatures change.",
        ],
        image: images.roof,
      },
      {
        id: "professional-install",
        title: "Why Professional Installation",
        body: [
          "With the right materials and tools, a homeowner can install heating cables — but the job isn't for everyone. On taller homes, don't underestimate the danger of working high above the ground, or the risk of electrical shock from the wrong cable. We install heating cables reliably and affordably. Don't wait until you already have a problem.",
        ],
        image: photos.fallHome,
      },
    ],
    options: [
      { title: "Gutter cables", text: "Keep gutters flowing." },
      { title: "Downspout cables", text: "Open drainage to the ground." },
      { title: "Sensor-controlled systems", text: "Efficient, hands-off operation." },
    ],
    promises: [
      "We guarantee our work",
      "References with your estimate or upon request",
      "Installed safely by professionals",
      "Cables matched to your roof and gutters",
    ],
    testimonialTags: ["gutters"],
    faqs: [
      {
        q: "How many watts per foot do I need?",
        a: "Most cables offer 5–7 watts per foot; for Chicago-area winters, at least 10 watts per foot may serve you better.",
      },
      {
        q: "Are sensors worth it?",
        a: "Sensor-controlled cables cost more but are more efficient and need far less attention, turning off automatically when heating isn't needed.",
      },
      {
        q: "Is there a current special?",
        a: "We have offered free gutter cleaning with heating cable installation — call 847-409-5507 to ask about current offers.",
      },
    ],
    related: ["gutters-downspouts", "roofing-and-repairs", "remodeling-construction"],
    gallery: [],
  },
];

export const serviceMenu = [
  {
    group: "Remodeling & Construction",
    items: [
      { slug: "remodeling-construction", hash: "kitchen-remodeling", label: "Kitchen Remodeling" },
      { slug: "remodeling-construction", hash: "bathroom-remodeling", label: "Bathroom Remodeling" },
      { slug: "remodeling-construction", hash: "basement-remodeling", label: "Basement Remodeling" },
      { slug: "remodeling-construction", hash: "interior-remodeling", label: "Interior Remodeling" },
      { slug: "remodeling-construction", hash: "exterior-remodeling", label: "Exterior & Siding" },
      { slug: "remodeling-construction", hash: "repairs", label: "Home Repairs" },
    ],
  },
  {
    group: "Roofing & Gutters",
    items: [
      { slug: "roofing-and-repairs", hash: "roof-replacement", label: "Roof Replacement" },
      { slug: "roofing-and-repairs", hash: "roof-repairs", label: "Roof Repairs" },
      { slug: "gutters-downspouts", hash: "gutter-replacement", label: "Gutter Installation" },
      { slug: "gutters-downspouts", hash: "gutter-cleaning", label: "Gutter Cleaning" },
      { slug: "gutters-downspouts", hash: "downspouts", label: "Downspouts" },
      { slug: "heating-cable-installation", hash: "", label: "Heating Cables" },
    ],
  },
  {
    group: "Painting & Decorating",
    items: [
      { slug: "painting-decorating", hash: "interior-painting", label: "Interior Painting" },
      { slug: "painting-decorating", hash: "exterior-painting", label: "Exterior Painting" },
      { slug: "painting-decorating", hash: "wallpaper-finishes", label: "Wallpaper & Faux Finishes" },
      { slug: "painting-decorating", hash: "commercial-painting", label: "Commercial Painting" },
      { slug: "painting-decorating", hash: "power-washing", label: "Power Washing" },
    ],
  },
  {
    group: "Decks & Fencing",
    items: [
      { slug: "decks-fencing", hash: "wood-fencing", label: "Wood Fences" },
      { slug: "decks-fencing", hash: "vinyl-fencing", label: "Vinyl Fences" },
      { slug: "decks-fencing", hash: "ornamental-fencing", label: "Ornamental Fences" },
      { slug: "decks-fencing", hash: "chain-link-fencing", label: "Chain Link Fences" },
      { slug: "decks-fencing", hash: "fence-repairs", label: "Fence Repairs & Gates" },
      { slug: "decks-fencing", hash: "decks", label: "Decks & Porches" },
    ],
  },
];

export const getService = (slug: string) => servicePages.find((s) => s.slug === slug);
