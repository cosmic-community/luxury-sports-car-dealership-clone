import Link from 'next/link'
import { Car } from '@/types'

interface CarCardProps {
  car: Car
}

export default function CarCard({ car }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'reserved':
        return 'bg-yellow-500';
      case 'sold':
        return 'bg-red-500';
      default:
        return 'bg-muted';
    }
  };

  return (
    <Link href={`/cars/${car.slug}`} className="card group hover:scale-105 transition-transform duration-300">
      <div className="relative">
        {car.metadata.featured_image && (
          <img 
            src={`${car.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={car.title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(car.metadata.status.key)}`}>
            {car.metadata.status.value}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {car.metadata.year} {car.metadata.make} {car.metadata.model}
        </h3>
        
        <p className="text-3xl font-bold text-primary mb-4">
          {formatPrice(car.metadata.price)}
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          {car.metadata.mileage && (
            <div>
              <span className="block font-medium">Mileage</span>
              <span>{car.metadata.mileage.toLocaleString()} miles</span>
            </div>
          )}
          {car.metadata.horsepower && (
            <div>
              <span className="block font-medium">Horsepower</span>
              <span>{car.metadata.horsepower} hp</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}