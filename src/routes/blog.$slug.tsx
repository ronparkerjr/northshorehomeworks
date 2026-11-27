import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Eyebrow } from "@/components/site/Reveal";
import { blogPosts, findPost } from "@/content/blog";
import { business } from "@/content/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (!findPost(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const p = findPost(params.slug);
    if (!p) return { meta: [{ title: "Article unavailable | North Shore Home Works" }, { name: "robots", content: "noindex" }] };
    const first = p.blocks.find((b) => "p" in b);
    const desc = (first && "p" in first ? first.p : p.title).slice(0, 155);
    const title = `${p.title} | North Shore Home Works`;
    const url = `${SITE_URL}/blog/${p.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: new Date(p.date).toISOString().slice(0, 10),
            url,
            publisher: { "@id": `${SITE_URL}/#business` },
          }),
        },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: p.title, path: `/blog/${p.slug}` }])) },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useLoaderData();
  const post = findPost(slug)!;
  const more = blogPosts.filter((p) => !p.town && p.slug !== slug).slice(0, 3);
  return (
    <div>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <article className="container-site max-w-3xl pb-16 pt-12 lg:pt-20">
          <Link to="/blog" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary">
            <ArrowLeft aria-hidden className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-6"><Eyebrow>{post.date}</Eyebrow></div>
          <h1 className="display-lg mt-5 lg:text-[2.6rem]">{post.title}</h1>
          <img src={post.image} alt={post.imageAlt} width={1200} height={800} className="mt-10 aspect-[3/2] w-full object-cover" />
          <div className="mt-10 space-y-5 text-lg leading-relaxed">
            {post.blocks.map((b, i) =>
              "h" in b ? (
                b.h.startsWith("For a consultation") ? null : <h2 key={i} className="pt-4 font-display text-2xl">{b.h}</h2>
              ) : (
                <p key={i}>{b.p}</p>
              ),
            )}
          </div>
          <div className="mt-12 border border-border bg-surface p-6 sm:p-8">
            <p className="font-display text-2xl">For a consultation and quote, contact us today.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="btn btn-primary"><Phone aria-hidden className="h-4 w-4" /> {business.phone}</a>
              <Link to="/contact" className="btn btn-outline">Request a free estimate</Link>
            </div>
          </div>
        </article>
        <section className="section bg-surface">
          <div className="container-site">
            <h2 className="display-lg lg:text-[2.6rem]">More articles.</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {more.map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                  <img src={p.image} alt={p.imageAlt} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                  <h3 className="mt-4 font-display text-xl group-hover:text-primary">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
