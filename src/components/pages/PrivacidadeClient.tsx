'use client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CookieConsent from '@/components/layout/CookieConsent'
import { siteConfig } from '@/utils/config'
import { useCookieConsent } from '@/contexts/CookieProvider'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 mb-3">{title}</h2>{children}</section>
}

export default function PrivacidadeClient() {
  const { openPreferences } = useCookieConsent()
  const lastUpdate = '06 de Março de 2026'

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
        <article className="max-w-180 mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-green-600 dark:text-green-400 mb-3">Legal</p>
            <h1 className="font-display text-[clamp(32px,5vw,48px)] font-normal text-zinc-900 dark:text-zinc-100 leading-[1.1] mb-4">Política de <em className="italic text-green-600 dark:text-green-400">Privacidade</em></h1>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">Última atualização: {lastUpdate}</p>
          </div>
          <div className="space-y-10 text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <Section title="1. Introdução"><p>A <strong className="text-zinc-900 dark:text-zinc-200">{siteConfig.name}</strong>, operada por {siteConfig.owner.name}, com sede em {siteConfig.owner.location}, valoriza e respeita a privacidade dos seus visitantes e clientes. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais.</p><p>Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) do Brasil e com o Regulamento Geral sobre a Proteção de Dados (RGPD/GDPR) da União Europeia.</p></Section>
            <Section title="2. Responsável pelo Tratamento dos Dados"><p><strong className="text-zinc-900 dark:text-zinc-200">Controlador:</strong> {siteConfig.owner.name}<br /><strong className="text-zinc-900 dark:text-zinc-200">Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-green-600 dark:text-green-400 hover:underline no-underline">{siteConfig.contact.email}</a><br /><strong className="text-zinc-900 dark:text-zinc-200">Localização:</strong> {siteConfig.owner.location}</p></Section>
            <Section title="3. Dados que Coletamos"><p>Podemos coletar: Nome, email, WhatsApp, tipo de negócio e mensagem — quando preenchidos voluntariamente no formulário de contato. Dados coletados automaticamente incluem endereço IP (anonimizado), tipo de navegador, páginas visitadas e dados de interação — apenas com seu consentimento prévio.</p></Section>
            <Section title="4. Seus Direitos (LGPD Art. 18 / GDPR Art. 15-22)"><p>Você tem o direito de confirmar a existência de tratamento dos seus dados, acessar, corrigir, solicitar eliminação, revogar consentimento e solicitar portabilidade. Para exercer qualquer destes direitos, contacte <a href={`mailto:${siteConfig.contact.email}`} className="text-green-600 dark:text-green-400 hover:underline no-underline">{siteConfig.contact.email}</a>.</p></Section>
            <Section title="5. Cookies"><p>Utilizamos cookies para funcionalidades essenciais e, com seu consentimento, para análise de tráfego. Você pode <button onClick={openPreferences} className="text-green-600 dark:text-green-400 font-semibold underline bg-transparent border-none cursor-pointer text-[15px]">gerenciar suas preferências de cookies</button> a qualquer momento.</p></Section>
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
