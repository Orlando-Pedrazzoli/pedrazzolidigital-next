import type { Metadata } from 'next'

const SITE_URL = 'https://pedrazzolidigital.com'
const SITE_NAME = 'Pedrazzoli Digital'
const DEFAULT_TITLE = 'Pedrazzoli Digital | Sites e Lojas Online'
const DEFAULT_DESCRIPTION = 'Sites profissionais, lojas virtuais e sistemas sob medida. Design moderno, código próprio, SEO otimizado e preço justo. Feito para converter.'
const OG_IMAGE = '/og-image.jpg'
const LOCALE = 'pt_BR'
const TWITTER_HANDLE = '@opcreate'

export function buildPageMetadata({ title, description, path = '', noIndex = false, keywords = [] }: {
  title?: string; description?: string; path?: string; noIndex?: boolean; keywords?: string[]
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const metaDescription = description || DEFAULT_DESCRIPTION
  const canonicalUrl = path ? `${SITE_URL}${path}` : SITE_URL
  const ogImageUrl = `${SITE_URL}${OG_IMAGE}`

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: { canonical: canonicalUrl, languages: { 'pt-BR': canonicalUrl, 'x-default': canonicalUrl } },
    openGraph: {
      type: 'website', siteName: SITE_NAME, title: fullTitle, description: metaDescription,
      url: canonicalUrl, locale: LOCALE,
      images: [{ url: ogImageUrl, secureUrl: ogImageUrl, width: 1200, height: 630, alt: fullTitle, type: 'image/jpeg' }],
    },
    twitter: { card: 'summary_large_image', site: TWITTER_HANDLE, creator: TWITTER_HANDLE, title: fullTitle, description: metaDescription, images: [ogImageUrl] },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1, 'max-video-preview': -1 },
    metadataBase: new URL(SITE_URL),
    other: { 'geo.region': 'BR', 'geo.placename': 'Brasil', 'content-language': 'pt-BR' },
  }
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: 'Orlando Pedrazzoli', url: SITE_URL }],
  creator: 'Orlando Pedrazzoli',
  publisher: SITE_NAME,
  alternates: { canonical: '/', languages: { 'pt-BR': '/', 'x-default': '/' } },
  openGraph: { type: 'website', siteName: SITE_NAME, title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, url: SITE_URL, locale: LOCALE, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — Sites e Lojas Online Profissionais`, type: 'image/jpeg' }] },
  twitter: { card: 'summary_large_image', site: TWITTER_HANDLE, creator: TWITTER_HANDLE, title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, images: [OG_IMAGE] },
  robots: { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1, 'max-video-preview': -1 },
  other: { 'geo.region': 'BR', 'geo.placename': 'Brasil', 'content-language': 'pt-BR' },
  verification: { google: 'GOOGLE_VERIFICATION_CODE' },
}
