import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, TrendingUp, Award, Lightbulb } from "lucide-react"

export function ValuePropositions() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Hack Your Wealth Journey</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
          <Card className="bg-green-600 text-white border-0 hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-8 w-8 mb-2" />
              <CardTitle className="text-white">Interactive Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-100">
                Join Power of Stocks' live and interactive sessions where we share practical strategies, and ensure
                deep, hands-on learning for traders of all levels.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-600 text-white border-0 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-8 w-8 mb-2" />
              <CardTitle className="text-white">Strong Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-100">
                Become part of a growing community of lakhs of like-minded traders and investors learning together,
                exchanging ideas, and supporting each other's financial goals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-600 text-white border-0 hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-8 w-8 mb-2" />
              <CardTitle className="text-white">Pro Tools & Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-100">
                Access cutting-edge trading tools, simplified charting techniques, and ready-to-use strategies that help
                you trade smarter and faster.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-600 text-white border-0 hover:shadow-lg transition-shadow lg:col-span-2">
            <CardHeader>
              <Award className="h-8 w-8 mb-2" />
              <CardTitle className="text-white">Power of Stocks Academy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-100">
               Our all-in-one learning platform offers comprehensive, structured courses, personalized mentorship, and real-time market insights—all thoughtfully curated from Subasish's own trading journey and proven strategies. Whether you're a beginner or looking to sharpen your skills, we equip you with the tools, knowledge, and support needed to succeed confidently in the stock market.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-600 text-white border-0 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lightbulb className="h-8 w-8 mb-2" />
              <CardTitle className="text-white">Learn with Simplicity & Clarity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-100">
                Experience a fun, relatable, and deeply educational journey—where complex concepts are taught with
                simplicity, humor, and real-world examples.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
