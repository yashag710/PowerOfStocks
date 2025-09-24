import type { Metadata } from 'next'
import { Cabin } from "next/font/google"
import './globals.css'

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Customize weights as needed
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Power of Stocks',
  description: 'Learn to trade stocks like a pro with our comprehensive courses and expert guidance.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  )
}
