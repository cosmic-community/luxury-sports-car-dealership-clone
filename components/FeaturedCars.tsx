import Link from 'next/link'
import { Car } from '@/types'
import CarCard from './CarCard'

interface FeaturedCarsProps {
  cars: Car[]
}

export default function FeaturedCars({ cars }: FeaturedCarsProps) {
  if (!cars || cars.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-primary">Vehicles</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our handpicked selection of the world's most desirable supercars
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/cars" className="btn-primary">
          View All Cars
        </Link>
      </div>
    </div>
  )
}