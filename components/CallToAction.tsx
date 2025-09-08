import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 luxury-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Experience <span className="text-primary">Luxury?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Visit our premium showrooms and discover the world's most exclusive supercars. 
          Our expert consultants are ready to help you find your dream car.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/locations" className="btn-primary">
            Visit Our Showrooms
          </Link>
          <Link href="/cars" className="btn-secondary">
            Browse Collection
          </Link>
        </div>
      </div>
    </section>
  )
}