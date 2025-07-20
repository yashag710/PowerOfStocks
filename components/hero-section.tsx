import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">🚀 Led by Subasish Pani</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                LED BY <span className="text-green-600">SUBASISH</span>.<br />
                BUILT WITH <span className="text-green-600">SIMPLICITY</span>.<br />
                DESIGNED FOR <span className="text-green-600">TRADERS</span>.
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Learn the market the simple way with clear strategies, real guidance, and the experience of Subasish to
                help you trade smarter every day.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                JOIN NOW
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Free Preview
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                Lifetime Access
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Subasish Pani - Power of Stocks"
              className="aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
              height="400"
              src="/placeholder.svg?height=400&width=600"
              width="600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
