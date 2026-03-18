import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import ServicosClient from '@/components/pages/ServicosClient'

export const metadata: Metadata = buildPageMetadata({
  title: 'Serviços',
  description: 'Desenvolvimento web, e-commerce, UI/UX design, branding, SEO e suporte contínuo. Conheça todos os serviços da Pedrazzoli Digital.',
  path: '/servicos',
  keywords: ['serviços web', 'desenvolvimento de sites', 'e-commerce', 'UI/UX design', 'branding', 'SEO'],
})

export default function ServicosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Serviços', path: '/servicos' }]} />
      <ServicosClient />
    </>
  )
}
