'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CookieConsent from '@/components/layout/CookieConsent'
import VerticalTabs from '@/components/sections/VerticalTabs'
import Features from '@/components/sections/Features'
import BusinessTypes from '@/components/sections/BusinessTypes'

export default function ServicosClient() {
  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
        <div className="pt-20" />
        <VerticalTabs />
        <Features />
        <BusinessTypes />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}
