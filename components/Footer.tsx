import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Luxury<span className="text-primary">Sports</span>
            </h3>
            <p className="text-muted-foreground">
              Experience the world's most exclusive supercars at our premium dealership locations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/cars" className="text-muted-foreground hover:text-primary transition-colors">Our Cars</Link></li>
              <li><Link href="/locations" className="text-muted-foreground hover:text-primary transition-colors">Locations</Link></li>
              <li><Link href="/news" className="text-muted-foreground hover:text-primary transition-colors">News & Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Luxury Car Sales</span></li>
              <li><span className="text-muted-foreground">Trade-In Services</span></li>
              <li><span className="text-muted-foreground">Financing Options</span></li>
              <li><span className="text-muted-foreground">VIP Events</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Beverly Hills: (310) 555-0123</span></li>
              <li><span className="text-muted-foreground">Manhattan: (212) 555-0456</span></li>
              <li><span className="text-muted-foreground">info@luxurysports.com</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Luxury Sports Car Dealership. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}