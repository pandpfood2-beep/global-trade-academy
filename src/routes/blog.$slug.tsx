import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/layout/SiteLayout";
import { blogs } from "@/data/blogs";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogs.find((b) => b.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Global Export Import Academy` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/blog/${loaderData.post.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.post.slug}` }] : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.post.title,
              datePublished: loaderData.post.date,
              description: loaderData.post.excerpt,
              image: loaderData.post.image,
            }),
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="text-4xl font-bold">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-brand underline">Back to Blog</Link>
      </div>
    </SiteLayout>
  ),
  component: Page,
});

function Page() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHero eyebrow={post.tag} title={post.title} subtitle={post.excerpt} image={post.image} />
      <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-brand hover:underline">
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>
        <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.read}</span>
        </div>
        <img src={post.image} alt={post.title} className="mt-8 h-72 w-full rounded-2xl object-cover" />
        <div className="prose prose-lg mt-10 max-w-none">
          {post.content.map((p, i) => (
            <p key={i} className="mt-5 text-base leading-relaxed text-foreground">{p}</p>
          ))}
          {post.sections?.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="text-2xl font-bold text-foreground">{s.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-navy p-8 text-primary-foreground">
          <h3 className="text-xl font-bold">Ready to start exporting?</h3>
          <p className="mt-2 text-sm text-white/80">Explore our complete chapters on Incoterms, CHA, Documentation and Payment Terms.</p>
          <Link to="/incoterms" className="mt-4 inline-block rounded-md bg-brand px-5 py-2 text-sm font-semibold">Browse Chapters</Link>
        </div>
      </article>
    </SiteLayout>
  );
}
