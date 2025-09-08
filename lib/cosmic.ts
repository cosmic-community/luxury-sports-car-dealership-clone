import { createBucketClient } from '@cosmicjs/sdk'
import { Car, Location, NewsArticle, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all cars with filtering options
export async function getCars(filters?: {
  make?: string;
  status?: string;
  featured?: boolean;
}): Promise<Car[]> {
  try {
    const query: Record<string, any> = { type: 'cars' };
    
    if (filters?.make) {
      query['metadata.make'] = filters.make;
    }
    
    if (filters?.status) {
      // Fix: Query by the key value for select-dropdown fields
      query['metadata.status.key'] = filters.status;
    }
    
    if (filters?.featured) {
      query['metadata.featured_car'] = true;
    }
    
    const response = await cosmic.objects
      .find(query)
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const cars = response.objects as Car[];
    
    // Sort by price descending
    return cars.sort((a, b) => (b.metadata?.price || 0) - (a.metadata?.price || 0));
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch cars');
  }
}

// Get single car by slug
export async function getCar(slug: string): Promise<Car | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'cars', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Car;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch car');
  }
}

// Get all locations
export async function getLocations(): Promise<Location[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'locations' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Location[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch locations');
  }
}

// Get single location by slug
export async function getLocation(slug: string): Promise<Location | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'locations', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Location;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch location');
  }
}

// Get all news articles
export async function getNews(): Promise<NewsArticle[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'news' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const articles = response.objects as NewsArticle[];
    
    // Sort by date descending
    return articles.sort((a, b) => {
      const dateA = new Date(a.metadata?.date || '').getTime();
      const dateB = new Date(b.metadata?.date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch news');
  }
}

// Get single news article by slug
export async function getNewsArticle(slug: string): Promise<NewsArticle | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'news', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as NewsArticle;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch news article');
  }
}

// Get featured cars
export async function getFeaturedCars(): Promise<Car[]> {
  return getCars({ featured: true });
}

// Get available cars (fix: use the key for status filtering)
export async function getAvailableCars(): Promise<Car[]> {
  return getCars({ status: 'available' });
}