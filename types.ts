// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Car object type
export interface Car extends CosmicObject {
  type: 'cars';
  metadata: {
    make: string;
    model: string;
    year: number;
    price: number;
    mileage?: number;
    engine?: string;
    horsepower?: number;
    top_speed?: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    status: {
      key: 'available' | 'sold' | 'reserved';
      value: 'Available' | 'Sold' | 'Reserved';
    };
    featured_car: boolean;
  };
}

// Location object type
export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    location_name: string;
    address: string;
    phone: string;
    email?: string;
    hours?: string;
    manager?: string;
    location_image?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
  };
}

// News article object type
export interface NewsArticle extends CosmicObject {
  type: 'news';
  metadata: {
    headline: string;
    content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    date: string;
    category?: {
      key: 'new_arrival' | 'event' | 'news' | 'sale';
      value: 'New Arrival' | 'Event' | 'News' | 'Sale';
    };
    featured_article: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
export function isCar(obj: CosmicObject): obj is Car {
  return obj.type === 'cars';
}

export function isLocation(obj: CosmicObject): obj is Location {
  return obj.type === 'locations';
}

export function isNewsArticle(obj: CosmicObject): obj is NewsArticle {
  return obj.type === 'news';
}