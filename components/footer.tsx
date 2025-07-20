import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-green-100">
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl mx-auto justify-between">
        {/* PAGES Section */}
        <div>
          <h3 className="text-lg font-semibold text-green-600 mb-3">PAGES</h3>
          <ul className="space-y-2">
            <li>
              <Link className="text-base text-black hover:underline underline-offset-4" href="#">Home</Link>
            </li>
            <li>
              <Link className="text-base text-black hover:underline underline-offset-4" href="#courses">Courses</Link>
            </li>
            <li>
              <Link className="text-base text-black hover:underline underline-offset-4" href="#community">POS Community</Link>
            </li>
            <li>
              <Link className="text-base text-black hover:underline underline-offset-4" href="#contact">Contact</Link>
            </li>
            <li>
              <Link className="text-base text-black hover:underline underline-offset-4" href="#about">About</Link>
            </li>
          </ul>
        </div>

        {/* LEGALS Section */}
        <div>
          <h3 className="text-lg font-semibold text-green-600 mb-3">LEGALS</h3>
          <ul className="space-y-2">
            <li>
              <Link className="text-base text-black hover:underline underline-offset-4" href="#privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link className="text-base text-black hover:underline underline-offset-4" href="#refund">Refund Policy</Link>
            </li>
            <li>
              <Link className="text-base text-black hover:underline underline-offset-4" href="#terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 mt-6 text-center w-full">© Copyright 2025 Power of Stocks. All rights reserved.</p>
    </footer>
  )
}
