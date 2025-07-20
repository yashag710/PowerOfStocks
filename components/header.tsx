import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-22 flex items-center border-b border-green-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="#">
      <Image
        src="/Power.png" // Path for 'public' folder
        alt="Power of Stocks Logo" // Alt text for accessibility
        width={100} // Width prop
        height={20} // Height prop
        className="object-contain" // Ensures the image scales correctly
      />
      </Link>

      <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Input type="text" placeholder="Search" className="pl-4 pr-10 py-2 w-full" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-lg font-medium hover:text-green-600 transition-colors" href="#courses">
          Courses
        </Link>
        <Link className="text-lg font-medium hover:text-green-600 transition-colors" href="#about">
          About Us
        </Link>
        <Link className="text-lg font-medium hover:text-green-600 transition-colors" href="#community">
          Join POS Community
        </Link>
        <Link className="text-lg font-medium hover:text-green-600 transition-colors" href="#gallery">
          Gallery
        </Link>
        <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-green-600 cursor-pointer" />
      </nav>

      <Button className="ml-4 text-lg bg-green-600 hover:bg-green-700 text-white">Login</Button>
    </header>
  )
}
