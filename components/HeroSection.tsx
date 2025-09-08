import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://imgix.cosmicjs.com/b597bdc0-8ce7-11f0-8dcc-651091f6a7c0-photo-1618843479313-40f8afb4b4d8-1757358725436.jpg?w=1920&h=1080&fit=crop&auto=format,compress"
          alt="Luxury Sports Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Luxury <span className="text-primary">Redefined</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Discover the world's most exclusive supercars. Ferrari, McLaren, Lamborghini and more await at our premium showrooms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/cars" className="btn-primary">
            View Collection
          </Link>
          <Link href="/locations" className="btn-secondary">
            Visit Showroom
          </Link>
        </div>
      </div>
    </section>
  )
}