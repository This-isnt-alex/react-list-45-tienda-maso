import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Contact JZB Wholesale Trading - Get in Touch With Our Team",
  description: "Connect with JZB Wholesale Trading for closeout purchases, liquidation solutions, or to discuss your inventory needs.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Our Team
            </h1>
            <p className="max-w-[700px] text-blue-100 text-lg">
              Have questions about our services or ready to discuss your inventory needs?
              Our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Get In Touch</h2>
                <p className="text-muted-foreground mt-2">
                  Fill out the form below and one of our team members will get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Company, Inc."
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="interest"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="selling">Selling excess inventory</option>
                    <option value="buying">Buying closeout merchandise</option>
                    <option value="distribution">Distribution partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your inventory needs or questions..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground mt-2">
                  Our team is available Monday through Friday, 9am to 5pm PST.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">(555) 123-4567</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">info@jzbwholesale.com</p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      123 Business Ave, Suite 500<br />
                      Commerce City, CA 90001
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-muted-foreground">9:00 AM - 5:00 PM PST</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday - Sunday</p>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">For Urgent Matters</h3>
                <p className="text-sm">
                  For urgent inquiries regarding large-volume liquidation opportunities
                  or time-sensitive closeout inventory, please call our direct line at
                  <span className="font-medium"> (555) 987-6543</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Find quick answers to common questions about working with JZB Wholesale Trading.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4 mt-8">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">What types of inventory do you purchase?</h3>
              <p className="text-muted-foreground">
                We primarily focus on Fast-Moving Consumer Goods (FMCG) including food and beverage,
                personal care, household products, health and wellness items, baby products, and pet supplies.
                We consider most consumer packaged goods with reasonable shelf life.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-medium">How quickly can you complete a purchase?</h3>
              <p className="text-muted-foreground">
                In most cases, we can complete the assessment, valuation, and purchase process within
                2-3 business days for standard inventory. For larger or more complex lots, the process
                may take 5-7 business days.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-medium">Do you handle transportation of purchased inventory?</h3>
              <p className="text-muted-foreground">
                Yes, we typically arrange and cover the cost of transportation for purchased inventory.
                Our logistics team will coordinate pickup from your location to our distribution centers.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-medium">What information do you need for an initial quote?</h3>
              <p className="text-muted-foreground">
                To provide an initial assessment, we need basic information about the inventory including
                product categories, quantities, manufacturing/expiration dates, condition, and current location.
                Photos are helpful but not required for the preliminary evaluation.
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Have more questions? <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contact our team</Link> for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
