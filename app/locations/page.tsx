import { getLocations } from '@/lib/cosmic'
import LocationCard from '@/components/LocationCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dealership Locations | Luxury Sports Car Showrooms',
  description: 'Visit our luxury sports car showrooms in Beverly Hills and Manhattan. Experience our premium collection in person.',
}

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Locations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit our premium showrooms to experience luxury automotive excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  )
}