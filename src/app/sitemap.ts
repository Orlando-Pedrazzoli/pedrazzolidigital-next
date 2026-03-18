import type { MetadataRoute } from 'next'

const BASE_URL = 'https://pedrazzolidigital.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/servicos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/sobre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/privacidade`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/termos`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
