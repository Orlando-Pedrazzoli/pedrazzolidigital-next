import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import SobreClient from '@/components/pages/SobreClient'

export const metadata: Metadata = buildPageMetadata({
  title: 'Sobre',
  description: 'Conheça Orlando Pedrazzoli — Full Stack Developer com 10+ anos de experiência empreendedora e 3+ anos em desenvolvimento web.',
  path: '/sobre',
  keywords: ['Orlando Pedrazzoli', 'full stack developer', 'desenvolvedor web', 'freelancer Lisboa'],
})

export default function SobrePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Sobre', path: '/sobre' }]} />
      <SobreClient />
    </>
  )
}
