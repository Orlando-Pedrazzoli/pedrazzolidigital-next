import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd'
import FaqClient from '@/components/pages/FaqClient'

export const metadata: Metadata = buildPageMetadata({
  title: 'FAQ',
  description: 'Perguntas frequentes sobre desenvolvimento de sites, lojas virtuais, prazos, pagamentos e suporte da Pedrazzoli Digital.',
  path: '/faq',
  keywords: ['FAQ', 'perguntas frequentes', 'dúvidas desenvolvimento web', 'preços sites'],
})

export default function FaqPage() {
  return (
    <>
      {/* FAQPage JSON-LD — Google pode exibir rich results */}
      <FAQPageJsonLd />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]} />
      <FaqClient />
    </>
  )
}
