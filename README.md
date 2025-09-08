# Luxury Sports Car Dealership

![App Preview](https://imgix.cosmicjs.com/b597bdc0-8ce7-11f0-8dcc-651091f6a7c0-photo-1618843479313-40f8afb4b4d8-1757358725436.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium luxury sports car dealership website built with Next.js and Cosmic CMS. Showcase exclusive supercars with a modern, sleek dark theme and red accent colors.

## ✨ Features

- **Dynamic Car Showcase** - Browse luxury vehicles with detailed specifications and high-quality images
- **Location Pages** - Elegant showroom location displays with contact information
- **News & Events** - Latest automotive news and exclusive dealership events
- **Advanced Filtering** - Filter cars by make, model, price, and availability
- **Responsive Design** - Optimized for all devices and screen sizes
- **SEO Optimized** - Dynamic meta tags and structured data
- **Dark Theme** - Modern dark design with strategic red accent colors

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68bf29546a8f16787aa746da&clone_repository=68bf46fc11cbc9243d29eff1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a luxury sports car dealership website"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Modern sleek style, dark with pops of red.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety and development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Vercel** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd luxury-sports-car-dealership
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📡 Cosmic SDK Examples

### Fetching Cars
```typescript
import { cosmic } from '@/lib/cosmic'

const cars = await cosmic.objects
  .find({ type: 'cars' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Single Car
```typescript
const car = await cosmic.objects
  .findOne({ type: 'cars', slug: carSlug })
  .depth(1)
```

### Filtering Available Cars
```typescript
const availableCars = await cosmic.objects
  .find({ 
    type: 'cars',
    'metadata.status': 'available'
  })
  .depth(1)
```

## 🌐 Cosmic CMS Integration

This application integrates with three main Cosmic object types:

### Cars
- **Make** - Car manufacturer (Ferrari, McLaren, Lamborghini)
- **Model** - Specific car model
- **Year** - Model year
- **Price** - Vehicle price
- **Engine** - Engine specifications
- **Horsepower** - Engine power output
- **Status** - Availability status (Available, Sold, Reserved)
- **Featured Image** - Primary vehicle image
- **Gallery** - Additional vehicle images

### Locations
- **Location Name** - Showroom name
- **Address** - Full address details
- **Phone** - Contact phone number
- **Hours** - Operating hours
- **Manager** - Location manager name
- **Location Image** - Showroom image

### News & Events
- **Headline** - Article headline
- **Content** - Article body content
- **Featured Image** - Article image
- **Date** - Publication date
- **Category** - Content category (Event, News, Sale, New Arrival)

## 🚀 Deployment

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY` 
   - `COSMIC_WRITE_KEY`
3. Deploy automatically on push to main branch

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

<!-- README_END -->