import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="w-fit bg-green-100 text-green-800">ABOUT</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Meet Subasish Pani</h2>
              <Badge className="w-fit bg-green-200 text-green-800 px-4 py-2">The Face behind Power Of Stocks</Badge>
              <div className="space-y-4 text-gray-600 md:text-lg">
                <p>
                  Subasish Pani, better known in the trading world as Power of Stocks, is the man behind a new era of
                  smart, simplified Trading.
                </p>
                <p>
                  With years of hands-on market experience, Subasish has transformed his passion for trading into a
                  powerful mission: to simplify stock market education and make financial freedom accessible to every
                  Indian. What began as a personal journey quickly evolved into a trusted brand that now empowers lakhs
                  of aspiring traders and investors across the country.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="link" className="text-green-600 hover:text-green-700 p-0">
                Read More
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Join Indian Stock Market Training</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Subasish Pani - Power of Stocks"
              className="aspect-square overflow-hidden rounded-xl object-cover shadow-lg"
              height="400"
              src="/placeholder.svg?height=400&width=400"
              width="400"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
