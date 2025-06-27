import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Clock, DollarSign, PackageCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Fast, Efficient Liquidation & Closeout Solutions
              </h1>
              <p className="max-w-[600px] text-blue-100 md:text-xl">
                JZB Wholesale Trading specializes in the purchase and rapid resale of closeout and liquidation
                inventory, focusing on Fast-Moving Consumer Goods (FMCG).
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative h-[350px] w-full max-w-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2000&auto=format&fit=crop"
                alt="Warehouse with inventory boxes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-sm text-muted-foreground">Successful Transactions</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <PackageCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-sm text-muted-foreground">Product Categories</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold">24-48h</h3>
              <p className="text-sm text-muted-foreground">Average Turnaround Time</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold">30%</h3>
              <p className="text-sm text-muted-foreground">Average Cost Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide comprehensive solutions for businesses looking to efficiently manage their
                inventory through liquidation and closeout strategies.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Closeout Purchasing</CardTitle>
                <CardDescription>
                  We buy excess inventory and closeout merchandise directly from manufacturers and retailers.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Competitive pricing</li>
                  <li>Fast assessment and valuation</li>
                  <li>Flexible purchase options</li>
                  <li>All FMCG categories accepted</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services#closeout" className="flex items-center justify-center gap-1">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Liquidation Solutions</CardTitle>
                <CardDescription>
                  We provide efficient liquidation services for retailers and distributors with excess inventory.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Rapid inventory assessment</li>
                  <li>Transparent valuation process</li>
                  <li>Full or partial lot purchases</li>
                  <li>Confidential transactions</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services#liquidation" className="flex items-center justify-center gap-1">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Distribution Network</CardTitle>
                <CardDescription>
                  Our extensive network allows us to rapidly distribute purchased inventory to retailers nationwide.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Nationwide distribution channels</li>
                  <li>Quick turnaround times</li>
                  <li>Efficient logistics management</li>
                  <li>Strategic market placement</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services#distribution" className="flex items-center justify-center gap-1">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">FMCG Categories We Handle</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We specialize in a wide range of Fast-Moving Consumer Goods categories.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
            <div className="flex flex-col items-center p-4 text-center bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-1">Food & Beverage</h3>
              <p className="text-xs text-muted-foreground">Packaged goods, snacks, drinks</p>
            </div>
            <div className="flex flex-col items-center p-4 text-center bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-1">Personal Care</h3>
              <p className="text-xs text-muted-foreground">Hygiene, cosmetics, toiletries</p>
            </div>
            <div className="flex flex-col items-center p-4 text-center bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-1">Household</h3>
              <p className="text-xs text-muted-foreground">Cleaning, laundry, kitchen</p>
            </div>
            <div className="flex flex-col items-center p-4 text-center bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-1">Baby Products</h3>
              <p className="text-xs text-muted-foreground">Diapers, formula, baby food</p>
            </div>
            <div className="flex flex-col items-center p-4 text-center bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-1">Pet Supplies</h3>
              <p className="text-xs text-muted-foreground">Food, treats, accessories</p>
            </div>
            <div className="flex flex-col items-center p-4 text-center bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-1">Health & Wellness</h3>
              <p className="text-xs text-muted-foreground">OTC, supplements, first aid</p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/inventory">View Our Current Inventory</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work With Us?</h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're looking to liquidate inventory or source closeout merchandise,
                our team is ready to provide fast, efficient solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
