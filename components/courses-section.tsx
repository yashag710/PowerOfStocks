import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function CoursesSection() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Choose Your Trading Path</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Master the markets with our comprehensive trading courses designed for every level
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Badge className="w-fit bg-green-100 text-green-800">Package 1</Badge>
              <CardTitle className="text-gray-900">Indian Market Trading Mastery</CardTitle>
              <CardDescription>
                Master the art of intraday, positional & option buying and selling in the Indian stock market with bonus
                topics. Taught by Subasish Pani this course is built for beginners to advanced-level traders.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">What You'll Learn:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>A Trader in me</strong> - A combination of intraday, positional & option buying and
                      selling for advance traders
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Scalping Program</strong> - A unique approach towards scalping and traders who prefer less
                      screen time
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Zero to Hero Program</strong> - Best suitable for beginners with simple setups
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Option Buying</strong> - Dedicated to option buying traders
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">What You Get:</h4>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm">50+ pre-recorded HD videos</span>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Join Indian Stock Market Training</Button>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Badge className="w-fit bg-blue-100 text-blue-800">Package 2</Badge>
              <CardTitle className="text-gray-900">Global Market & Crypto Trading Mastery</CardTitle>
              <CardDescription>
                Step into the world of international trading and crypto markets - smartly and safely. Built for those
                who want to expand beyond Indian markets and explore global indices, gold, US stocks, and
                cryptocurrency. Mainly designed for NRI's.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Global Market & Crypto Trading Mastery</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
