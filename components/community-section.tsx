import { Badge } from "@/components/ui/badge"

export function CommunitySection() {
  return (
    <section id="community" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge className="bg-green-600 text-white px-6 py-2">TRADERS COMMUNITY</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">POS Traders Community</h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Become a part of our{" "}
            <span className="text-green-600 font-semibold italic">Exclusive Traders' Community</span> and don't miss out
            on all the good stuff – from exciting giveaways to special access to classes and member-only discounts. It's
            the perfect space to learn, grow, and get rewarded while trading with like-minded people.
          </p>
        </div>
      </div>
    </section>
  )
}
