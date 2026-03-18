'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CookieConsent from '@/components/layout/CookieConsent'
import TechStack from '@/components/sections/TechStack'
import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import Plans from '@/components/sections/Plans'
import CTAFinal from '@/components/sections/CTAFinal'
import EtherealHero from '@/components/sections/EtherealHero'

export default function HomeClient() {
  return (
    <>
      <Navbar />
      <main>
        <EtherealHero />
        <div className="relative z-20 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
          <TechStack />
          <Portfolio />
          <Testimonials />
          <Plans />
          <CTAFinal />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}
