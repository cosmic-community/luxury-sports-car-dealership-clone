// app/news/[slug]/page.tsx
import { getNewsArticle } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface NewsPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.metadata.headline} | News`,
    description: article.metadata.content.replace(/<[^>]*>/g, '').slice(0, 160),
  }
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {article.metadata.category && (
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                {article.metadata.category.value}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {article.metadata.headline}
            </h1>
            <p className="text-muted-foreground mb-8">
              {formatDate(article.metadata.date)}
            </p>
          </div>

          {article.metadata.featured_image && (
            <div className="mb-8">
              <img 
                src={`${article.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={article.metadata.headline}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}

          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.metadata.content }}
          />
        </div>
      </div>
    </div>
  )
}