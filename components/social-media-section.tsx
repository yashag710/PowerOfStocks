import { Youtube, Send, Instagram, ShoppingBag } from "lucide-react"

export function SocialMediaSection() {
  return (
    <section className="w-full py-12 bg-green-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find Power of Stocks On</h2>
            <p className="text-green-100 md:text-xl">
              Subasish Pani has a strong community of 2.5M+ Followers across all popular social media
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Youtube className="h-12 w-12" />
              <span className="text-sm font-medium">Power of Stocks</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Youtube className="h-12 w-12" />
              <span className="text-sm font-medium">Pos Global</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Send className="h-12 w-12" />
              <span className="text-sm font-medium">Telegram</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Instagram className="h-12 w-12" />
              <span className="text-sm font-medium">Instagram</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Youtube className="h-12 w-12" />
              <span className="text-sm font-medium">Subanjali bucketlist</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ShoppingBag className="h-12 w-12" />
              <span className="text-sm font-medium">Pos merch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
