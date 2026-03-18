import { siteConfig } from './config'

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = 'Olá! Gostaria de saber mais sobre as soluções digitais.'
  const text = encodeURIComponent(message || defaultMsg)
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`
}

export function getBusinessWhatsApp(businessType: string): string {
  return getWhatsAppUrl(`Olá! Tenho um negócio de ${businessType.toLowerCase()} e gostaria de saber mais sobre as soluções.`)
}

export function getPlanWhatsApp(planName: string): string {
  return getWhatsAppUrl(`Olá! Tenho interesse no plano ${planName}. Gostaria de mais informações.`)
}
