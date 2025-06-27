import Image from "next/image"
import Link from "next/link"
import { PackageCheck, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "JZB Wholesale Trading Inventory - Current Closeout Merchandise",
  description: "Browse JZB Wholesale Trading's current inventory of closeout and liquidation merchandise across various FMCG categories.",
}

// Sample inventory data
const inventoryItems = [
  {
    id: 1,
    category: "Food & Beverage",
    title: "Premium Organic Snacks Assortment",
    description: "Mixed lot of organic chips, crackers, and dried fruit snacks from premium brands.",
    quantity: "150 cases (12 units/case)",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=500&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    category: "Personal Care",
    title: "Natural Skincare Collection",
    description: "Assorted natural skincare products including cleansers, moisturizers, and serums.",
    quantity: "80 cases (24 units/case)",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    category: "Household",
    title: "Eco-Friendly Cleaning Supplies",
    description: "Environmentally friendly cleaning products including all-purpose cleaners, dish soaps, and laundry detergent.",
    quantity: "120 cases (12 units/case)",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=500&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    category: "Health & Wellness",
    title: "Vitamin and Supplement Bundle",
    description: "Assorted vitamins, minerals, and dietary supplements from leading brands.",
    quantity: "90 cases (30 units/case)",
    image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=500&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 5,
    category: "Baby Products",
    title: "Organic Baby Food Collection",
    description: "Assorted organic baby food pouches, cereals, and snacks from premium brands.",
    quantity: "75 cases (24 units/case)",
    image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=500&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 6,
    category: "Pet Supplies",
    title: "Premium Pet Food and Treats",
    description: "High-quality dog and cat food, treats, and supplements from specialty brands.",
    quantity: "100 cases (12 units/case)",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 7,
    category: "Food & Beverage",
    title: "Specialty Coffee Collection",
    description: "Assorted premium coffee beans, ground coffee, and specialty blends from craft roasters.",
    quantity: "60 cases (12 units/case)",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=500&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 8,
    category: "Personal Care",
    title: "Luxury Bath and Body Set",
    description: "High-end bath products including soaps, bath bombs, lotions, and body wash.",
    quantity: "85 cases (12 units/case)",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500&auto=format&fit=crop",
    featured: false,
  },
]

export default function InventoryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Current Inventory
            </h1>
            <p className="max-w-[700px] text-blue-100 text-lg">
              Browse our current selection of closeout and liquidation merchandise.
              Our inventory changes frequently, so check back often for new arrivals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
              Featured Inventory
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">New Arrivals & Featured Items</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Recently added high-quality merchandise available for immediate purchase.
              Contact us for pricing and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {inventoryItems
              .filter(item => item.featured)
              .map(item => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                      {item.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <PackageCheck className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Quantity: {item.quantity}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Inquire About This Item</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="#all-inventory">View All Inventory</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="w-full py-8 md:py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-medium">Search Inventory</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search by product type, category, or keyword..."
                    className="flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="category"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1.5"
                    >
                      <option value="">All Categories</option>
                      <option value="food">Food & Beverage</option>
                      <option value="personal">Personal Care</option>
                      <option value="household">Household</option>
                      <option value="health">Health & Wellness</option>
                      <option value="baby">Baby Products</option>
                      <option value="pet">Pet Supplies</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="sort"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Sort By
                    </label>
                    <select
                      id="sort"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1.5"
                    >
                      <option value="newest">Newest First</option>
                      <option value="alpha">Alphabetical (A-Z)</option>
                      <option value="category">By Category</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Inventory */}
      <section className="w-full py-12 md:py-24 bg-white" id="all-inventory">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Complete Inventory Listing</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Our current closeout and liquidation merchandise available for purchase.
              Contact our sales team for custom quotes and bulk pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {inventoryItems.map(item => (
              <Card key={item.id} className="overflow-hidden flex flex-col">
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                    {item.category}
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-1">
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <PackageCheck className="h-4 w-4 text-blue-600" />
                    <span className="text-xs">Quantity: {item.quantity}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Looking for Something Specific?</h2>
            <p className="max-w-[700px] text-blue-100 text-lg">
              If you don't see what you're looking for, contact us and let us know your requirements.
              We regularly source specific merchandise for our partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                <Link href="/services">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Notes */}
      <section className="w-full py-8 md:py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-sm text-muted-foreground space-y-3">
            <h3 className="font-medium text-base">Important Notes About Our Inventory:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>All merchandise is sold on a first-come, first-served basis</li>
              <li>Inventory changes frequently; items shown may be sold out</li>
              <li>Minimum order quantities may apply</li>
              <li>Pricing is based on volume and specific product details</li>
              <li>Item conditions range from new/unopened to closeout/excess inventory</li>
              <li>Full lot purchases are given priority</li>
            </ul>
            <p>For the most accurate inventory information and pricing, please contact our sales team directly.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
