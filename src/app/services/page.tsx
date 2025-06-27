import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building, CheckCircle2, DollarSign, FastForward, Network, Package, Repeat2, Scale, TrendingUp, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "JZB Wholesale Trading Services - Liquidation and Closeout Solutions",
  description: "Explore JZB Wholesale Trading's services including closeout purchasing, liquidation solutions, and rapid distribution of FMCG products.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Wholesale Trading Services
            </h1>
            <p className="max-w-[700px] text-blue-100 text-lg">
              Comprehensive solutions for businesses with excess inventory and those seeking
              quality closeout merchandise at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-blue-50 rounded-lg" id="closeout">
              <div className="bg-blue-600 p-3 rounded-full">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Closeout Purchasing</h2>
              <p className="text-muted-foreground">
                We purchase excess inventory and closeout merchandise directly from manufacturers,
                distributors, and retailers.
              </p>
              <Button asChild variant="outline" className="mt-2">
                <Link href="#closeout-details" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-blue-50 rounded-lg" id="liquidation">
              <div className="bg-blue-600 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Liquidation Solutions</h2>
              <p className="text-muted-foreground">
                Efficient and transparent liquidation services for retailers and distributors
                looking to clear excess inventory.
              </p>
              <Button asChild variant="outline" className="mt-2">
                <Link href="#liquidation-details" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-blue-50 rounded-lg" id="distribution">
              <div className="bg-blue-600 p-3 rounded-full">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Distribution Network</h2>
              <p className="text-muted-foreground">
                Our extensive network allows us to rapidly distribute purchased inventory
                to retailers nationwide.
              </p>
              <Button asChild variant="outline" className="mt-2">
                <Link href="#distribution-details" className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Closeout Purchasing Details */}
      <section className="w-full py-12 md:py-24 bg-gray-50" id="closeout-details">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Closeout Purchasing</h2>
              <p className="text-muted-foreground text-lg">
                We provide competitive and fair pricing for your excess inventory, with a fast
                assessment and valuation process.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Why Sell to JZB Wholesale?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Rapid assessment and valuation of inventory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Competitive pricing based on market conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Flexible purchase options including full or partial lot buys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Quick payment terms and fast removal of goods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>All FMCG categories accepted</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative h-[350px] w-full max-w-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8659b8e39c0c?q=80&w=2000&auto=format&fit=crop"
                alt="Business negotiation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Liquidation Solutions Details */}
      <section className="w-full py-12 md:py-24 bg-white" id="liquidation-details">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 mx-auto lg:mx-0 relative h-[350px] w-full max-w-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1494607275381-3eefa8a79882?q=80&w=2000&auto=format&fit=crop"
                alt="Inventory management"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Liquidation Solutions</h2>
              <p className="text-muted-foreground text-lg">
                Our liquidation services are designed to help businesses efficiently convert
                excess inventory into capital with minimal hassle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <Card>
                  <CardHeader className="p-4">
                    <FastForward className="h-5 w-5 text-blue-600 mb-2" />
                    <CardTitle className="text-base">Rapid Process</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Our streamlined assessment and purchase process minimizes downtime and maximizes value.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <Scale className="h-5 w-5 text-blue-600 mb-2" />
                    <CardTitle className="text-base">Fair Valuation</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Transparent pricing based on current market conditions and product demand.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <Repeat2 className="h-5 w-5 text-blue-600 mb-2" />
                    <CardTitle className="text-base">Regular Programs</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Establish ongoing liquidation programs for consistent inventory management.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <DollarSign className="h-5 w-5 text-blue-600 mb-2" />
                    <CardTitle className="text-base">Quick Payment</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Flexible payment terms to meet your business's cash flow needs.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">Discuss Your Needs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Network Details */}
      <section className="w-full py-12 md:py-24 bg-gray-50" id="distribution-details">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Distribution Network</h2>
              <p className="text-muted-foreground text-lg">
                Our extensive distribution network allows us to rapidly move inventory to the right markets,
                maximizing value and minimizing storage time.
              </p>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <Network className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Nationwide Coverage</h3>
                    <p className="text-sm text-muted-foreground">
                      Our distribution partners span the entire country, allowing us to place products in the most appropriate markets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Efficient Logistics</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimized shipping routes and warehousing solutions ensure products move quickly from acquisition to sale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <Building className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Diverse Retail Partnerships</h3>
                    <p className="text-sm text-muted-foreground">
                      Relationships with discount retailers, specialty stores, and online merchants ensure we find the right home for every product type.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Value Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Strategic placement of products based on regional demand patterns maximizes recovery value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative h-[350px] w-full max-w-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop"
                alt="Distribution warehouse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="w-full py-12 md:py-24 bg-white" id="sourcing">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">FMCG Categories We Handle</h2>
            <p className="max-w-[700px] text-muted-foreground text-lg">
              We specialize in a wide range of Fast-Moving Consumer Goods, focusing on products
              with high turnover rates and limited shelf life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Food & Beverage</CardTitle>
                <CardDescription>Non-perishable and shelf-stable food items</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Packaged snacks and confectionery</li>
                  <li>Dry goods and pantry items</li>
                  <li>Bottled beverages and drink mixes</li>
                  <li>Specialty and gourmet foods</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Care</CardTitle>
                <CardDescription>Health and beauty products</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Hygiene and toiletry items</li>
                  <li>Cosmetics and skincare</li>
                  <li>Hair care products</li>
                  <li>Oral care items</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Household Products</CardTitle>
                <CardDescription>Home and cleaning essentials</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Cleaning supplies and detergents</li>
                  <li>Paper goods and disposables</li>
                  <li>Kitchen and household accessories</li>
                  <li>Air fresheners and home scents</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health & Wellness</CardTitle>
                <CardDescription>Over-the-counter and wellness items</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Vitamins and supplements</li>
                  <li>OTC medications</li>
                  <li>First aid supplies</li>
                  <li>Fitness and wellness products</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Baby Products</CardTitle>
                <CardDescription>Infant and toddler necessities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Diapers and wipes</li>
                  <li>Formula and baby food</li>
                  <li>Feeding accessories</li>
                  <li>Baby care products</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pet Supplies</CardTitle>
                <CardDescription>Products for pets and pet care</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Pet food and treats</li>
                  <li>Pet accessories and toys</li>
                  <li>Grooming supplies</li>
                  <li>Pet care and wellness items</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Items</CardTitle>
                <CardDescription>Holiday and seasonal merchandise</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Holiday-themed food and decor</li>
                  <li>Seasonal health products</li>
                  <li>Limited edition consumer goods</li>
                  <li>Promotional items</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>General Merchandise</CardTitle>
                <CardDescription>Additional consumer goods</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Office and school supplies</li>
                  <li>Small electronics and accessories</li>
                  <li>Impulse purchase items</li>
                  <li>Gift items and novelty goods</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
            <p className="max-w-[700px] text-blue-100 text-lg">
              Contact our team today to discuss your inventory needs, whether you're looking to sell
              excess stock or source quality closeout merchandise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                <Link href="/inventory">View Our Inventory</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
