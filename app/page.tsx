import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ValuePropositions } from "@/components/value-propositions"
import { TradingPlatforms } from "@/components/trading-platforms"
import { CoursesSection } from "@/components/courses-section"
import { AboutSection } from "@/components/about-section"
import { CommunitySection } from "@/components/community-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

import Head from "next/head";

export default function PowerOfStocksLanding() {
  return (
    <>
     <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ValuePropositions />
        <TradingPlatforms />
        <CoursesSection />
        <AboutSection />
        <CommunitySection />
        <SocialMediaSection />
        <CTASection />
      </main>
      <Footer />
    </div>
    </>
  )
}
