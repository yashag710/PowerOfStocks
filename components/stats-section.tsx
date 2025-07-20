export function StatsSection() {
  return (
    <section className="w-full py-12 bg-green-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold">2.5M+</div>
            <div className="text-green-100">Social Media Followers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100K+</div>
            <div className="text-green-100">Students Taught</div>
          </div>
          <div>
            <div className="text-3xl font-bold">95%</div>
            <div className="text-green-100">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold">10+</div>
            <div className="text-green-100">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
