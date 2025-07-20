import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function TradingPlatforms() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-full h-1 bg-green-500 rounded-full mb-4"></div>
              <CardTitle className="text-2xl text-gray-900">For Indian Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3">
                    <Image src="/Fyers.png" alt="Fyers" width={40} height={40} />
                  </div>
                  <span className="font-semibold text-gray-800">Fyers</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3">
                    <Image src="/Zerodha.png" alt="Zerodha" width={40} height={40} />
                  </div>
                  <span className="font-semibold text-gray-800">Zerodha</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3">
                    <Image src="/delta.png" alt="Delta" width={40} height={40} />
                  </div>
                  <span className="font-semibold text-gray-800">Delta</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-full h-1 bg-blue-500 rounded-full mb-4"></div>
              <CardTitle className="text-2xl text-gray-900">For Global users & NRI's</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3">
                    <Image src="/exness.png" alt="Exness" width={40} height={40} />
                  </div>
                  <span className="font-semibold text-gray-800">Exness</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3">
                    <Image src="/winpro.jpeg" alt="Winpro FX" width={40} height={40} />
                  </div>
                  <span className="font-semibold text-gray-800">Winpro FX</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3">
                    <Image src="/prop.png" alt="Propfirmo" width={40} height={40} />
                  </div>
                  <span className="font-semibold text-gray-800">Propfirmo</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
