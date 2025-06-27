"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { useEffect, useState } from "react"

import { Separator } from "@/components/ui/separator"

export function Footer() {
  // Fix hydration mismatch by using static year value
  const [year, setYear] = useState(2024)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full bg-blue-50 text-blue-900">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">JZB</span>
              <span className="ml-2 text-xl font-semibold">Wholesale Trading</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Specialists in the purchase and rapid resale of closeout and liquidation inventory, focusing on Fast-Moving Consumer Goods (FMCG).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#closeout"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Closeout Purchasing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#liquidation"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Liquidation Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services#distribution"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Rapid Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="/services#sourcing"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  FMCG Sourcing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@jzbwholesale.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Business Ave, Suite 500<br />Commerce City, CA 90001</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-blue-200" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} JZB Wholesale Trading. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs transition-colors hover:text-blue-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs transition-colors hover:text-blue-600"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
