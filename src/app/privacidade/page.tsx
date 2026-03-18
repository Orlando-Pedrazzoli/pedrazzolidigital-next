import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import PrivacidadeClient from '@/components/pages/PrivacidadeClient'

export const metadata: Metadata = buildPageMetadata({
  title: 'Política de Privacidade',
  description: 'Política de Privacidade da Pedrazzoli Digital. Saiba como coletamos, utilizamos e protegemos seus dados pessoais.',
  path: '/privacidade',
})

export default function PrivacidadePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Política de Privacidade', path: '/privacidade' }]} />
      <PrivacidadeClient />
    </>
  )
}
