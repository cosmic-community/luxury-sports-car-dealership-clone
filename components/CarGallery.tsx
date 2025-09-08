'use client'

import { useState } from 'react'
import { Car } from '@/types'

interface CarGalleryProps {
  car: Car
}

export default function CarGallery({ car }: CarGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  const images = []
  
  if (car.metadata.featured_image) {
    images.push(car.metadata.featured_image)
  }
  
  if (car.metadata.gallery) {
    images.push(...car.metadata.gallery)
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="aspect-video bg-card rounded-lg overflow-hidden">
        <img 
          src={`${images[selectedImageIndex].imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
          alt={car.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImageIndex === index ? 'border-primary' : 'border-border hover:border-primary/50'
              }`}
            >
              <img 
                src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={`${car.title} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}