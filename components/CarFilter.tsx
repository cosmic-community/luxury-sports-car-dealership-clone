'use client'

export default function CarFilter() {
  return (
    <div className="bg-card p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter Cars</h3>
      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Make</label>
          <select className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="">All Makes</option>
            <option value="Ferrari">Ferrari</option>
            <option value="McLaren">McLaren</option>
            <option value="Lamborghini">Lamborghini</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Status</label>
          <select className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="">All Status</option>
            <option value="available">Available</option>
            <option value="reserved">Reserved</option>
            <option value="sold">Sold</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Max Price</label>
          <select className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="">Any Price</option>
            <option value="300000">$300,000</option>
            <option value="500000">$500,000</option>
            <option value="750000">$750,000</option>
          </select>
        </div>
        
        <div className="flex items-end">
          <button className="w-full btn-primary">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}