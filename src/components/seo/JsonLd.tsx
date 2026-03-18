import { siteConfig } from '@/utils/config'
import { faqItems } from '@/data/faq'

export function OrganizationJsonLd() {
  const schema = { '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/icon-512.png`, image: `${siteConfig.url}/og-image.jpg`, description: siteConfig.description, founder: { '@type': 'Person', name: siteConfig.owner.name, jobTitle: siteConfig.owner.role }, contactPoint: { '@type': 'ContactPoint', telephone: `+${siteConfig.contact.whatsapp}`, contactType: 'sales', availableLanguage: ['Portuguese', 'English'] }, sameAs: [`https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`] }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ProfessionalServiceJsonLd() {
  const schema = { '@context': 'https://schema.org', '@type': ['ProfessionalService', 'LocalBusiness'], name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/icon-512.png`, description: 'Desenvolvimento de sites profissionais, lojas virtuais e sistemas sob medida para empresas no Brasil e Portugal.', telephone: `+${siteConfig.contact.whatsapp}`, email: siteConfig.contact.email, priceRange: 'R$997 - R$5000+', address: { '@type': 'PostalAddress', addressLocality: 'Lisboa', addressCountry: 'PT' }, geo: { '@type': 'GeoCoordinates', latitude: 38.7223, longitude: -9.1393 }, areaServed: [{ '@type': 'Country', name: 'Brasil' }, { '@type': 'Country', name: 'Portugal' }], serviceType: ['Criação de Sites', 'Desenvolvimento de E-Commerce', 'Lojas Virtuais', 'Web Design'], hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Planos', itemListElement: [{ '@type': 'Offer', name: 'Site Institucional', price: '997', priceCurrency: 'BRL' }, { '@type': 'Offer', name: 'E-Commerce Completo', price: '2497', priceCurrency: 'BRL' }] } }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebSiteJsonLd() {
  const schema = { '@context': 'https://schema.org', '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url, description: 'Sites e Lojas Online Profissionais — código próprio, feito para converter.', inLanguage: 'pt-BR', publisher: { '@type': 'Organization', name: siteConfig.name } }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQPageJsonLd() {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const schema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: `${siteConfig.url}${item.path}` })) }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
