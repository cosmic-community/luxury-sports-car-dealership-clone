import { getNews } from '@/lib/cosmic'
import NewsCard from '@/components/NewsCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News & Events | Luxury Sports Car Dealership',
  description: 'Stay updated with the latest news, events, and exclusive previews from our luxury sports car dealership.',
}

export default async function NewsPage() {
  const articles = await getNews();

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            News & <span className="text-primary">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest automotive news and exclusive events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}