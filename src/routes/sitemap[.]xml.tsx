import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";
import { servicePages } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { areas } from "@/content/site";
import { townSlug } from "@/content/towns";

const paths = ["/", "/about", "/services", ...servicePages.map((s) => `/services/${s.slug}`), "/our-work", "/testimonials", "/areas-served", ...areas.map((a) => `/areas-served/${townSlug(a)}`), "/contact", "/blog", ...blogPosts.map((p) => `/blog/${p.slug}`)];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
          .map((p) => `  <url><loc>${SITE_URL}${p === "/" ? "/" : p}</loc></url>`)
          .join("\n")}\n</urlset>\n`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
