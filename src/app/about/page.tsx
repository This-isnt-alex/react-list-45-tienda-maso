import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "About JZB Wholesale Trading - Our Story and Expertise",
  description: "Learn about JZB Wholesale Trading's history, mission, and expertise in the closeout and liquidation industry focusing on FMCG products.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About JZB Wholesale Trading
              </h1>
              <p className="text-muted-foreground text-lg">
                JZB Wholesale Trading was founded with a clear mission: to provide efficient solutions
                for businesses with excess inventory and create value through our extensive distribution network.
              </p>
            </div>
            <div className="mx-auto lg:mx-0 relative h-[350px] w-full max-w-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2000&auto=format&fit=crop"
                alt="Wholesale business meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="text-muted-foreground text-lg">
                Since our founding in 2010, JZB Wholesale Trading has been at the forefront
                of the closeout and liquidation industry.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                JZB Wholesale Trading was established by industry veterans with over 30 years of combined
                experience in retail, distribution, and supply chain management. Recognizing a gap in the
                market for efficient handling of closeout and liquidation inventory, our founders created
                a streamlined approach to connecting excess inventory with buyers.
              </p>

              <p>
                Over the years, we've grown from a small regional operation to a nationwide network of
                distribution partners, manufacturers, and retailers. Our focus on Fast-Moving Consumer
                Goods (FMCG) has allowed us to develop specialized expertise in handling products with
                shorter shelf lives and rapid turnover requirements.
              </p>

              <p>
                Today, JZB Wholesale Trading handles millions of dollars in inventory annually, providing
                value for both our suppliers and distribution partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p>
                To provide efficient, transparent, and profitable solutions for businesses with excess
                inventory while delivering quality products to our distribution network at competitive prices.
              </p>
              <ul className="space-y-2 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>Create value through efficient inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>Build long-term relationships with our partners</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>Reduce waste and maximize the lifecycle of consumer goods</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Values</h2>
              <ul className="space-y-6">
                <li>
                  <h3 className="font-medium">Efficiency</h3>
                  <p className="text-muted-foreground">
                    We pride ourselves on rapid assessment, purchasing, and distribution of inventory,
                    minimizing storage time and maximizing value.
                  </p>
                </li>
                <li>
                  <h3 className="font-medium">Transparency</h3>
                  <p className="text-muted-foreground">
                    Clear communication and fair pricing are the foundation of our business relationships.
                  </p>
                </li>
                <li>
                  <h3 className="font-medium">Expertise</h3>
                  <p className="text-muted-foreground">
                    Our team brings deep industry knowledge to every transaction, ensuring optimal
                    outcomes for all parties.
                  </p>
                </li>
                <li>
                  <h3 className="font-medium">Adaptability</h3>
                  <p className="text-muted-foreground">
                    We remain flexible in our approach, tailoring solutions to each partner's unique needs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Leadership Team</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Led by industry veterans with decades of experience in retail, distribution, and supply chain management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="relative h-48 w-48 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
                  alt="John Zhang - CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">John Zhang</h3>
                <p className="text-blue-600 font-medium">CEO & Founder</p>
                <p className="text-sm text-muted-foreground mt-2">
                  15+ years of experience in retail distribution and supply chain management.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="relative h-48 w-48 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
                  alt="Sarah Brown - COO"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sarah Brown</h3>
                <p className="text-blue-600 font-medium">Chief Operations Officer</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Former logistics director with expertise in inventory management and distribution.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="relative h-48 w-48 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
                  alt="Michael Rodriguez - Business Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                <p className="text-blue-600 font-medium">Business Development Director</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Specializes in building strategic partnerships with retailers and manufacturers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work With JZB Wholesale Trading</h2>
            <p className="text-blue-100 text-lg max-w-[800px]">
              Whether you're looking to liquidate inventory or source closeout merchandise,
              our team is ready to provide expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
