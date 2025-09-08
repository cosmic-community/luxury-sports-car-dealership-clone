import { Location } from '@/types'

interface LocationCardProps {
  location: Location
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="card">
      {location.metadata.location_image && (
        <img 
          src={`${location.metadata.location_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={location.metadata.location_name}
          className="w-full h-64 object-cover"
        />
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">
          {location.metadata.location_name}
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-muted-foreground whitespace-pre-line">
              {location.metadata.address}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-muted-foreground">
                {location.metadata.phone}
              </p>
            </div>
            
            {location.metadata.manager && (
              <div>
                <h4 className="font-semibold mb-2">Manager</h4>
                <p className="text-muted-foreground">
                  {location.metadata.manager}
                </p>
              </div>
            )}
          </div>
          
          {location.metadata.hours && (
            <div>
              <h4 className="font-semibold mb-2">Hours</h4>
              <div 
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: location.metadata.hours }}
              />
            </div>
          )}
          
          {location.metadata.description && (
            <div>
              <h4 className="font-semibold mb-2">About This Location</h4>
              <div 
                className="text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: location.metadata.description }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}