import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function CoursePackages() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Package 1 - Indian Market */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Indian Market Trading"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">Package 1</Badge>
              <h3 className="text-4xl font-bold text-gray-900">Indian Market Trading Mastery</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Master the art of intraday, positional & option buying and selling in the Indian stock market with bonus
                topics. Taught by Subasish Pani this course is built for beginners to advanced-level traders.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">What You'll Learn:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">A Trader in me</span> - A combination of intraday, positional &
                      option buying and selling for advance traders
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Scalping Program</span> - A unique approach towards scalping and
                      traders who prefer less screen time
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Zero to Hero Program</span> - Best suitable for beginners with
                      simple setups
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Option Buying</span> - Dedicated to option buying traders
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900">What You Get:</h4>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>50+ pre-recorded HD videos</span>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-xl">
                Join Indian Stock Market Training
              </Button>
            </div>
          </div>

          {/* Package 2 - Global Market */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">Package 2</Badge>
              <h3 className="text-4xl font-bold text-gray-900">Global Market & Crypto Trading Mastery</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Step into the world of international trading and crypto markets - smartly and safely. Built for those
                who want to expand beyond Indian markets and explore global indices, gold, US stocks, and
                cryptocurrency. Mainly designed for NRI's.
              </p>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-xl">
                Global Market & Crypto Trading Mastery
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Global Market Trading"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
