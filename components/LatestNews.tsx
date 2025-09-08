import Link from 'next/link'
import { NewsArticle } from '@/types'
import NewsCard from './NewsCard'

interface LatestNewsProps {
  articles: NewsArticle[]
}

export default function LatestNews({ articles }: LatestNewsProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Latest <span className="text-primary">News</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest automotive news and exclusive events
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/news" className="btn-primary">
          View All News
        </Link>
      </div>
    </div>
  )
}