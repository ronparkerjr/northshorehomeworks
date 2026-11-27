import fader1 from "@/assets/site/fader1.jpg.asset.json";
import fader2 from "@/assets/site/fader2.jpg.asset.json";
import fader3 from "@/assets/site/fader3.jpg.asset.json";
import fader4 from "@/assets/site/fader4.jpg.asset.json";
import co1 from "@/assets/site/co1.jpg.asset.json";
import co2 from "@/assets/site/co2.jpg.asset.json";
import co3 from "@/assets/site/co3.jpg.asset.json";
import co4 from "@/assets/site/co4.jpg.asset.json";
import tools from "@/assets/site/contact-bg.jpg.asset.json";
import logo from "@/assets/site/logo.png.asset.json";

// Owner-confirmed NAP (Nov 1, 2026) — keep this the single source for name, address and phone.
const city = "Northfield";
const state = "IL";
const zip = "60062";

export const business = {
  name: "North Shore Home Works",
  phone: "847-409-5507",
  phoneHref: "tel:8474095507",
  // The owner's inbox address is deliberately not stored here: it is never shown to
  // visitors and reaches FormSubmit only from the server (FORMSUBMIT_TO secret).
  address: "1654 Mission Hills Rd.",
  city,
  state,
  zip,
  cityLine: `${city}, ${state} ${zip}`,
  facebook: "https://www.facebook.com/North-Shore-Home-Works-118622627886241",
  logo: logo.url,
};

export const images = {
  roof: fader1.url,
  deckWide: fader2.url,
  fence: fader3.url,
  kitchen: fader4.url,
  framing: co1.url,
  gutter: co2.url,
  painting: co3.url,
  deck: co4.url,
  tools: tools.url,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
};

// Copy preserved from the existing website.
export const services: Service[] = [
  {
    slug: "remodeling-construction",
    title: "Remodeling & Construction",
    short: "Kitchens, baths, basements, windows & more",
    description:
      "We can handle all phases of repair and remodeling work, interior and exterior. From kitchens, bathrooms, and basements to roof replacement and window installation — count on us for any job, no matter how big or how small.",
    image: images.kitchen,
  },
  {
    slug: "roofing-and-repairs",
    title: "Roofing & Repairs",
    short: "Roof replacement and repair",
    description:
      "For over 25 years we have been replacing roofs across Chicago's North Shore, protecting homes with quality materials and careful workmanship.",
    image: images.roof,
  },
  {
    slug: "gutters-downspouts",
    title: "Gutters & Downspouts",
    short: "Protect your roof, landscaping & basement",
    description:
      "Gutters and downspouts are among the most important features for preventing damage to your roof, landscaping, or basement. Without a functioning system, rain and melting snow take years off your roof and can erode your foundation.",
    image: images.gutter,
  },
  {
    slug: "painting-decorating",
    title: "Painting & Decorating",
    short: "Interior & exterior, residential & commercial",
    description:
      "North Shore Home Works and Menorah Painting have earned a reputation of excellence throughout Chicago's North Shore. We back all of our painting and decorating with a written guarantee and excellent references.",
    image: images.painting,
  },
  {
    slug: "decks-fencing",
    title: "Decks & Fencing",
    short: "Installation and repair, many styles",
    description:
      "We offer services that meet all of your fence installation and repair needs, in a variety of sizes, styles and colors — with recommendations based on your specific needs and budget.",
    image: images.deck,
  },
  {
    slug: "heating-cable-installation",
    title: "Heating Cable Installation",
    short: "Prevent ice dams through the winter",
    description:
      "Heating cable installation helps keep roofs and gutters clear of damaging ice. Ask about free gutter cleaning with our heating cable installation special.",
    image: images.framing,
  },
];

export type Testimonial = {
  name: string;
  location?: string;
  service?: string;
  quote: string;
  tags: string[];
  /** "google" = public Google review ; "letter" = written testimonial published on the original website. */
  source: "google" | "letter";
  /** Full letter text where the original site published one. */
  full?: string;
};

// Google reviews as posted on the Google Business Profile (owner-supplied Nov 2026), plus letters from the original website.
export const testimonials: Testimonial[] = [
  { name: "Rachel Feldman", source: "google", tags: ["remodeling"], quote: "I had a great experience working with North Shore Home Works from start to finish! They responded promptly, were easy to communicate with, and made the whole moving process stress-free. Highly recommend!" },
  { name: "Rabbi Michael Sommer", source: "google", tags: ["remodeling"], quote: "Ron and his crew did an incredible job repairing the cracks in my foundation and installing drain tile around the perimeter of my basement. They also did a wonderful job of removing my old driveway and installing the new one." },
  { name: "Hal Roseth", source: "google", tags: ["remodeling"], quote: "Ron delivered what he promised in a timely manner. He and his staff were professional, thorough and very pleasant to deal with. Any follow up matters were dealt with promptly and efficiently. Final project costs came in right on budget. Very pleased and will use them again." },
  { name: "Tammy Hartweg", source: "google", tags: ["repairs"], quote: "I needed several repairs done around the house before putting it up for sale. Ron and his team did a great job with the punch list. All of the items were completed promptly and within the estimated budget. I highly recommend North Shore Home Works — they are professional and do high quality work at a reasonable price!" },
  { name: "Skip Coggin", source: "google", tags: ["remodeling"], quote: "Ron and his crew are great at in-house construction projects as well as exterior problems as well, such as a leaking basement. Ron finished a basement for us, put in drain piping to eliminate a basement water leakage problem, and put in a beautiful den with shelving and a TV watching area for us. We recommend him highly." },
  { name: "Judy Fine-Eichner", source: "google", tags: ["remodeling"], quote: "I highly recommend Ron Graham and his team. His prices are fair and competitive. His workers show up when he says they will show up. They complete the work in a reasonable timeframe and if something unexpected comes up Ron communicates well and works toward a solution quickly." },
  { name: "Aaron Sorensen", source: "google", tags: ["gutters", "painting"], quote: "Great experience all around. Straight forward pricing, knowledgeable about solutions, responsive communication, and high quality work product. Installed a new gutter, larger downspouts, and refinished an oak door. Will use again." },
  { name: "Eitan Coresh", source: "google", tags: ["repairs"], quote: "Called for estimate came on time. Did the job quick and clean. His people were very polite. Worked very professional, my place look great." },
  { name: "Larry Malvin", source: "google", tags: ["remodeling"], quote: "Ron and his crew completely remodeled the shower in my condo and did an excellent job." },
  { name: "Judy Rosenak", source: "google", tags: ["remodeling"], quote: "Very good work on our kitchen remodel. Good communication and very capable and good people on the whole team." },
  { name: "Aryeh Kitzes", source: "google", tags: ["repairs"], quote: "Great work. Looks like new after 2 years." },
  { name: "Pete Krebill", source: "google", tags: ["fencing"], quote: "Great fence. Ron was great." },
  {
    name: "T. Hartweg",
    source: "letter",
    full: "Dear Ron,\n\nAfter a recent home inspection, I had a number of repairs to make around the house. I am so glad I called North Shore Home Works. Your team did a fabulous job with all of the repairs on my maintenance list. They were efficient and professional, and went out of their way to help. What really impressed me, though, was how well they accomplished everything. From window caulking to roof repair to matching ceiling paint, they did an outstanding job. I would not hesitate to use your services again, and have already referred several of my friends to you.\n\nThank you for a great job, and for exceeding my expectations. You truly are a step above the competition!",
    location: "Glenview",
    tags: ["repairs", "roofing"],
    quote:
      "After a recent home inspection, I had a number of repairs to make around the house. Your team did a fabulous job with all of the repairs on my maintenance list. They were efficient and professional, and went out of their way to help. From window caulking to roof repair to matching ceiling paint, they did an outstanding job. You truly are a step above the competition!",
  },
  {
    name: "A. & B. Kunis",
    source: "letter",
    location: "Chicago",
    tags: ["painting"],
    quote:
      "Menorah Painting did excellent, high quality work, both outside and inside of our home. The painters arrived on the agreed date and time, worked diligently for full days until the work was completed. Their work areas were neat, and they cleaned up after they completed their assignment. They were totally reliable in every way.",
  },
  {
    name: "A. Matimore",
    source: "letter",
    full: "Dear Ron,\n\nI wanted to send you a note to express our satisfaction with all the work your team did at our house last week. Given the amount of work that needed completion, I was more than pleasantly surprised at how quickly and professionally it was performed. Your crew was prompt, courteous and extremely hard-working. I have not had such a positive experience with contractors over the years. Needless to say, we will recommend you to our friends and neighbors, as well as call you for future work.\n\nOnce again, thanks for the great job.",
    location: "Lincolnshire",
    tags: ["remodeling", "repairs"],
    quote:
      "Given the amount of work that needed completion, I was more than pleasantly surprised at how quickly and professionally it was performed. Your crew was prompt, courteous and extremely hard-working. I have not had such a positive experience with contractors over the years.",
  },
  {
    name: "S. Hershinow",
    source: "letter",
    full: "Dear Ron:\n\nWhen my family moved to Skokie we bought a house that had not been redecorated for at least 20 years. One of the first calls we made was to your company for your free estimate.\n\nYour salesman, Jeff Leebling, promptly called us back to schedule an appointment at our convenience. When we met, he diligently listened to us about what we wanted and helped us design a plan, room by room, that fit our budget. Jeff was clearly knowledgeable and professional. At that point we knew we wanted to work with your company.\n\nFollowing our satisfying sales experience, we were further impressed with how quickly the work was scheduled. Topping even that, the crew showed up on time, worked very efficiently, was clean, and with great craftsmanship transformed our house into the home we envisioned.\n\nHowever, the greatest satisfaction we had came from your personal attention to our project. Your calls to the house the night before your crew arrived to make sure you understood what we expected and then your visits to the house while the project was underway demonstrated a level of commitment and service you don\u2019t typically find.\n\nThank you again for all your help. Until our next project, best wishes.",
    location: "Skokie",
    tags: ["painting", "remodeling"],
    quote:
      "The crew showed up on time, worked very efficiently, was clean, and with great craftsmanship transformed our house into the home we envisioned. The greatest satisfaction came from your personal attention to our project — a level of commitment and service you don't typically find.",
  },
];

export const areas = [
  "Deerfield", "Northbrook", "Highland Park", "Lake Forest", "Lake Bluff", "Glenview", "Kenilworth", "Wilmette", "Winnetka", "Northfield",
  "Glencoe", "Highwood", "Bannockburn", "Riverwoods", "Lincolnshire", "Long Grove", "Buffalo Grove", "Wheeling", "Indian Creek",
  "Green Oaks", "North Chicago", "Kildeer", "Vernon Hills", "Palatine", "Arlington Heights", "Des Plaines",
];

export const projects = [
  { title: "Open-concept kitchen & dining", category: "Remodeling", image: images.kitchen },
  { title: "Multi-level entertaining deck", category: "Decks", image: images.deckWide },
  { title: "Gabled roof replacement", category: "Roofing", image: images.roof },
  { title: "Cedar privacy fence", category: "Fencing", image: images.fence },
];

// Service-specific terms preserved from the original service pages, not a blanket guarantee.
export const warranties = [
  { service: "remodeling-construction", provider: "North Shore Home Works", title: "4-year labor warranty", years: 4, coverage: "labor", text: "North Shore Home Works remodeling and construction labor is covered by a 4-year warranty. References are provided with your estimate or upon request." },
  { service: "painting-decorating", provider: "Menorah Painting & Decorating", title: "4-year written guarantee", years: 4, coverage: "workmanship and materials", text: "Painting workmanship and materials are covered for four years, including exterior painting. Peeling, cracking or damage due to workmanship or product selection will be repaired." },
  { service: "roofing-and-repairs", provider: "Red's Roofing", title: "10-year new roofing labor warranty", years: 10, coverage: "new roofing labor", text: "New roofing labor is covered for 10 years. Material warranties range from 20 years to lifetime depending on the roofing product and project. Confirm the selected manufacturer's terms with your estimate." },
  { service: "decks-fencing", provider: "North Shore Fences", title: "Fencing labor guarantee", years: 5, repairYears: 1, coverage: "fence workmanship", text: "Fencing labor carries a 100% guarantee, with 5 years on workmanship and 1 year on repairs. These fencing terms do not establish warranty coverage for decks or porches." },
] as const;

export const about = {
  relationship: "The original About Us page identifies North Shore Home Works, Red's Roofing and North Shore Fences as divisions of Menorah Painting & Decorating. These related service names do not establish identical legal identities, licensing or warranty coverage.",
  intro: "For over 25 years, North Shore Home Works has helped homeowners across Chicago's North Shore repair, maintain and improve their properties. From a home-inspection repair list to interior and exterior remodeling, we bring a personal approach to work of every size.",
  leadership: "Customers identify Ron Graham as the person they work with and praise his personal attention, clear communication and follow-through. We directly supervise and take responsibility for our work.",
  divisions: [
    { name: "Menorah Painting & Decorating", service: "painting-decorating", text: "Interior and exterior painting, wallpapering and specialty finishes for residential and commercial properties." },
    { name: "Red's Roofing", service: "roofing-and-repairs", text: "Residential roof replacement and repairs, with materials selected for your home and budget." },
    { name: "North Shore Fences", service: "decks-fencing", text: "Fence installation and repairs for homeowners and commercial properties, in wood, vinyl, ornamental metal and chain link." },
  ],
  commitments: [
    { title: "Established local experience", text: "Over 25 years serving Chicago's North Shore, with experience in both residential and commercial work." },
    { title: "Reliable communication", text: "Customers praise our scheduling, responsive communication and practical solutions when something unexpected comes up." },
    { title: "Careful craftsmanship", text: "Attention to detail, quality materials and direct supervision of our work." },
    { title: "Respect for your property", text: "Clean, neat work practices. Painting preparation includes protecting surfaces, returning furniture and vacuuming the work area." },
    { title: "Service-specific guarantees", text: "Written warranty terms differ by service. Review the applicable labor, workmanship and material coverage with your estimate." },
    { title: "References you can read", text: "Genuine Google reviews and homeowner letters, with references available with your estimate or upon request." },
  ],
  faqs: [
    { q: "How do I request an estimate?", a: "Call 847-409-5507 or use the estimate form to tell us about your property and the work you have in mind. Consultations and estimates are free and without obligation." },
    { q: "What kinds of projects do you handle?", a: "Interior and exterior remodeling, home repairs, roofing, gutters, painting and decorating, decks and fencing, and heating cable installation. Small repair lists are welcome as well as larger projects." },
    { q: "Do you work with commercial clients?", a: "Yes. Our painting experience includes offices, industrial spaces, retail spaces and nursing homes. Fence installation and repair are also available for commercial properties. Call to discuss the scope of your project." },
    { q: "What should I have ready for our conversation?", a: "It is helpful to have your property location, a description of the work and any inspection or maintenance list you would like us to review. You can also share your priorities and questions about materials or budget." },
    { q: "What happens during a consultation?", a: "We discuss the work you need, your priorities and suitable options, then provide a free estimate. For painting, the original service commitment includes a written contract with every free estimate." },
    { q: "Does every service have the same warranty?", a: "No. Remodeling labor, painting, new roofing labor and fencing have different terms. Ask us to confirm the provider, scope, exclusions and any manufacturer's coverage in your written project documents. A roofing or fencing warranty should not be assumed to cover other services." },
    { q: "How can I check whether you serve my property?", a: "Review our Areas Served page or call 847-409-5507 with the property's town and location. Our office is in Northfield; listed communities are service areas, not additional offices." },
  ],
};
