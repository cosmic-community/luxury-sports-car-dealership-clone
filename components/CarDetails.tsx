import { Car } from '@/types'

interface CarDetailsProps {
  car: Car
}

export default function CarDetails({ car }: CarDetailsProps) {
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
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">
            {car.metadata.year} {car.metadata.make} {car.metadata.model}
          </h1>
          <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(car.metadata.status.key)}`}>
            {car.metadata.status.value}
          </span>
        </div>
        
        <p className="text-4xl font-bold text-primary mb-6">
          {formatPrice(car.metadata.price)}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {car.metadata.mileage && (
          <div>
            <span className="block text-sm font-medium text-muted-foreground">Mileage</span>
            <span className="text-lg font-semibold">{car.metadata.mileage.toLocaleString()} miles</span>
          </div>
        )}
        {car.metadata.engine && (
          <div>
            <span className="block text-sm font-medium text-muted-foreground">Engine</span>
            <span className="text-lg font-semibold">{car.metadata.engine}</span>
          </div>
        )}
        {car.metadata.horsepower && (
          <div>
            <span className="block text-sm font-medium text-muted-foreground">Horsepower</span>
            <span className="text-lg font-semibold">{car.metadata.horsepower} hp</span>
          </div>
        )}
        {car.metadata.top_speed && (
          <div>
            <span className="block text-sm font-medium text-muted-foreground">Top Speed</span>
            <span className="text-lg font-semibold">{car.metadata.top_speed}</span>
          </div>
        )}
      </div>

      {car.metadata.description && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Description</h3>
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: car.metadata.description }}
          />
        </div>
      )}
    </div>
  )
}