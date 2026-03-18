'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CookieConsent from '@/components/layout/CookieConsent'
import { siteConfig } from '@/utils/config'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 mb-3">{title}</h2>{children}</section>
}

export default function TermosClient() {
  const lastUpdate = '06 de Março de 2026'
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
        <article className="max-w-180 mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-green-600 dark:text-green-400 mb-3">Legal</p>
            <h1 className="font-display text-[clamp(32px,5vw,48px)] font-normal text-zinc-900 dark:text-zinc-100 leading-[1.1] mb-4">Termos de <em className="italic text-green-600 dark:text-green-400">Uso</em></h1>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">Última atualização: {lastUpdate}</p>
          </div>
          <div className="space-y-10 text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <Section title="1. Aceitação dos Termos"><p>Ao acessar e utilizar o site <strong className="text-zinc-900 dark:text-zinc-200">{siteConfig.url}</strong>, operado por <strong className="text-zinc-900 dark:text-zinc-200">{siteConfig.name}</strong> ({siteConfig.owner.name}), você concorda integralmente com estes Termos de Uso.</p></Section>
            <Section title="2. Descrição dos Serviços"><p>A {siteConfig.name} oferece serviços de desenvolvimento web, incluindo criação de sites institucionais, lojas virtuais (e-commerce), sistemas web personalizados e manutenção de projetos digitais.</p></Section>
            <Section title="3. Propriedade Intelectual"><p>Todo o conteúdo do site — incluindo textos, design, código-fonte, imagens, logotipos e a marca {siteConfig.name} — é propriedade exclusiva de {siteConfig.owner.name} e está protegido pelas leis de propriedade intelectual do Brasil e de Portugal.</p></Section>
            <Section title="4. Preços e Pagamentos"><p>Os valores apresentados no site são referenciais (a partir de). O valor final de cada projeto é definido em proposta comercial personalizada.</p></Section>
            <Section title="5. Legislação Aplicável"><p>Estes Termos de Uso são regidos pelas leis da República Portuguesa e pela legislação brasileira (LGPD), conforme aplicável ao domicílio do utilizador.</p></Section>
            <Section title="6. Contato"><p><strong className="text-zinc-900 dark:text-zinc-200">Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-green-600 dark:text-green-400 hover:underline no-underline">{siteConfig.contact.email}</a><br /><strong className="text-zinc-900 dark:text-zinc-200">WhatsApp:</strong> <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="text-green-600 dark:text-green-400 hover:underline no-underline" target="_blank" rel="noopener noreferrer">+351 912 164 220</a></p></Section>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </>
  )
}
