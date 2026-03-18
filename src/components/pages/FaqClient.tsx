'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CookieConsent from '@/components/layout/CookieConsent'
import FAQ from '@/components/sections/FAQ'

export default function FaqClient() {
  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
        <div className="pt-20" />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}
