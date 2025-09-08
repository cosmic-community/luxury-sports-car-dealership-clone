'use client'

import { useState } from 'react'
import { Car } from '@/types'

interface CarGalleryProps {
  car: Car
}

export default function CarGallery({ car }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  
  // Ensure we have images to display
  const images = car.metadata?.gallery || []
  const featuredImage = car.metadata?.featured_image
  
  // If no gallery images, use featured image if available
  const allImages = images.length > 0 ? images : (featuredImage ? [featuredImage] : [])
  
  // Early return if no images available
  if (allImages.length === 0) {
    return (
      <div className="w-full h-96 bg-secondary/30 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="aspect-video bg-secondary/30 rounded-lg overflow-hidden">
        {allImages[selectedImage] && (
          <img
            src={`${allImages[selectedImage].imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={`${car.metadata?.make || ''} ${car.metadata?.model || ''} - Image ${selectedImage + 1}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnail Gallery */}
      {allImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index
                  ? 'border-primary'
                  : 'border-transparent hover:border-secondary'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                alt={`${car.metadata?.make || ''} ${car.metadata?.model || ''} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}