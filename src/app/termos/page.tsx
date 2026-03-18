import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import TermosClient from '@/components/pages/TermosClient'

export const metadata: Metadata = buildPageMetadata({
  title: 'Termos de Uso',
  description: 'Termos de Uso do site Pedrazzoli Digital. Condições gerais para utilização dos nossos serviços de desenvolvimento web.',
  path: '/termos',
})

export default function TermosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Termos de Uso', path: '/termos' }]} />
      <TermosClient />
    </>
  )
}
