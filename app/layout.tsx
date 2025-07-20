import type { Metadata } from 'next'
import { Cabin } from "next/font/google"
import './globals.css'

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Customize weights as needed
  display: "swap",
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
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
