import Link from 'next/link'
import { NewsArticle } from '@/types'

interface NewsCardProps {
  article: NewsArticle
}

export default function NewsCard({ article }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getExcerpt = (content: string) => {
    const text = content.replace(/<[^>]*>/g, '');
    return text.length > 150 ? text.slice(0, 150) + '...' : text;
  };

  return (
    <Link href={`/news/${article.slug}`} className="card group hover:scale-105 transition-transform duration-300">
      {article.metadata.featured_image && (
        <img 
          src={`${article.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={article.metadata.headline}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        {article.metadata.category && (
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
            {article.metadata.category.value}
          </span>
        )}
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {article.metadata.headline}
        </h3>
        
        <p className="text-muted-foreground mb-4">
          {getExcerpt(article.metadata.content)}
        </p>
        
        <p className="text-sm text-muted-foreground">
          {formatDate(article.metadata.date)}
        </p>
      </div>
    </Link>
  )
}