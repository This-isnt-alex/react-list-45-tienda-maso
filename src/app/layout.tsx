import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"

import { cn } from "@/lib/utils"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "JZB Wholesale Trading - Closeout & Liquidation FMCG Specialists",
  description: "JZB Wholesale Trading specializes in the purchase and rapid resale of closeout and liquidation inventory, focusing on Fast-Moving Consumer Goods (FMCG).",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
