import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import HomeClient from '@/components/pages/HomeClient'

// ✅ Metadata 100% server-side — chega no HTML antes de qualquer JS
export const metadata: Metadata = buildPageMetadata({
  path: '/',
  keywords: [
    'criação de sites', 'desenvolvimento web', 'lojas virtuais', 'e-commerce',
    'sites profissionais', 'web design', 'SEO', 'sites sob medida', 'Pedrazzoli Digital',
  ],
})

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }]} />
      <HomeClient />
    </>
  )
}
