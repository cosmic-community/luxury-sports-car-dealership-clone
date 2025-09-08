import { getCars, getFeaturedCars, getNews } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import FeaturedCars from '@/components/FeaturedCars'
import LatestNews from '@/components/LatestNews'
import CallToAction from '@/components/CallToAction'

export default async function HomePage() {
  const [featuredCars, latestNews] = await Promise.all([
    getFeaturedCars(),
    getNews()
  ]);

  const latestNewsItems = latestNews.slice(0, 3);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {featuredCars.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <FeaturedCars cars={featuredCars} />
          </div>
        </section>
      )}
      
      {latestNewsItems.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <LatestNews articles={latestNewsItems} />
          </div>
        </section>
      )}
      
      <CallToAction />
    </div>
  )
}