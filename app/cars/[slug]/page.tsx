// app/cars/[slug]/page.tsx
import { getCar } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import CarDetails from '@/components/CarDetails'
import CarGallery from '@/components/CarGallery'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

interface CarPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CarPageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = await getCar(slug);

  if (!car) {
    return {
      title: 'Car Not Found',
    }
  }

  return {
    title: `${car.metadata.year} ${car.metadata.make} ${car.metadata.model} | Luxury Sports Cars`,
    description: car.metadata.description || `${car.metadata.year} ${car.metadata.make} ${car.metadata.model} for sale at our luxury dealership.`,
  }
}

export default async function CarPage({ params }: CarPageProps) {
  const { slug } = await params;
  const car = await getCar(slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <CarGallery car={car} />
          <CarDetails car={car} />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ContactForm carTitle={`${car.metadata.year} ${car.metadata.make} ${car.metadata.model}`} />
        </div>
      </div>
    </div>
  )
}