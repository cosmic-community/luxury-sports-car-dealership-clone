import { getCars } from '@/lib/cosmic'
import CarGrid from '@/components/CarGrid'
import CarFilter from '@/components/CarFilter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Cars | Premium Sports Car Collection',
  description: 'Browse our exclusive collection of luxury sports cars including Ferrari, McLaren, and Lamborghini vehicles.',
}

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Collection</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most exclusive supercars in our premium collection
          </p>
        </div>

        <CarFilter />
        
        <CarGrid cars={cars} />
      </div>
    </div>
  )
}