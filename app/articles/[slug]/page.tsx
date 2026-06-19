import { notFound } from 'next/navigation'
import { allArticles } from 'contentlayer/generated'
import { format } from 'date-fns'
import Link from 'next/link'
import { FiArrowLeft, FiTag, FiClock } from 'react-icons/fi'
import { MdxRenderer } from '@/components/MdxRenderer'

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params; 
  const { slug } = resolvedParams;

  const article = allArticles.find((a) => {
    console.log(a.slug);
    console.log(slug);
    console.log(a);
    return a.slug === slug;
  });

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors mb-8"
      >
        <FiArrowLeft className="w-4 h-4" />
        Back to articles
      </Link>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-mono text-emerald-400">
              {format(new Date(article.date), 'MMMM d, yyyy')}
            </span>
            {article.isCheatsheet && (
              <span className="px-2 py-0.5 bg-amber-400/20 text-amber-400 rounded-full text-xs font-medium border border-amber-400/20">
                Cheatsheet
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-400">{article.description}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <FiTag className="w-4 h-4" />
              {article.category}
            </span>
          </div>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none pt-8 border-t border-white/10">
          <MdxRenderer code={article.body.code} />
        </div>
      </div>
    </article>
  )
}