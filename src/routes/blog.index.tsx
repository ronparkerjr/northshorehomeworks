import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SITE_URL } from "@/lib/seo";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { blogPosts } from "@/content/blog";

const title = "Home Improvement Blog | North Shore Home Works";
const description = "Remodeling, roofing, painting, gutter, deck and fence tips from North Shore Home Works, plus home improvement notes for North Shore towns.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogPage,
});

function excerpt(post: (typeof blogPosts)[number]) {
  const first = post.blocks.find((b) => "p" in b);
  const text = first && "p" in first ? first.p : "";
  return text.length > 170 ? text.slice(0, text.lastIndexOf(" ", 170)) + "…" : text;
}

function PostCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block">
      <div className="img-zoom aspect-[3/2] overflow-hidden">
        <img src={post.image} alt={post.imageAlt} width={1200} height={800} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{post.date}</p>
      <h3 className="mt-2 font-display text-2xl leading-snug group-hover:text-primary">{post.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{excerpt(post)}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Read article <ArrowRight aria-hidden className="h-4 w-4" />
      </span>
    </Link>
  );
}

function BlogPage() {
  const articles = blogPosts.filter((p) => !p.town);
  const towns = blogPosts.filter((p) => p.town);
  return (
    <div>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <section className="container-site pb-12 pt-16 lg:pt-24">
          <Reveal className="grid gap-8">
            <div>
              <Eyebrow>Blog</Eyebrow>
              <h1 className="display-fit mt-6 md:text-[2.6rem]">Tips from the job site.</h1>
            </div>
            <p className="lead max-w-2xl">Practical advice on remodeling, roofing, painting, gutters, decks and fences from the North Shore Home Works team.</p>
          </Reveal>
        </section>

        <section className="section pt-0">
          <div className="container-site grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container-site">
            <Reveal>
              <Eyebrow>Around the North Shore</Eyebrow>
              <h2 className="display-lg mt-5 lg:text-[2.6rem]">Home improvement in your town.</h2>
            </Reveal>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {towns.map((p) => (
                <li key={p.slug}>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="flex min-h-11 items-center justify-between gap-2 border-b border-border py-3 font-medium hover:text-primary">
                    {p.title.replace("Home Improvement in ", "").replace(" Illinois", ", IL")}
                    <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
