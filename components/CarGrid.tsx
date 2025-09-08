'use client'

import { useState } from 'react'
import { Car } from '@/types'
import CarCard from './CarCard'

interface CarGridProps {
  cars: Car[]
}

export default function CarGrid({ cars }: CarGridProps) {
  const [filteredCars, setFilteredCars] = useState(cars)

  if (!cars || cars.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-muted-foreground">No cars available at the moment.</p>
      </div>
    )
  }

  if (filteredCars.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-muted-foreground">No cars match your current filters.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}