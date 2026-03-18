'use client'
import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'

const portfolioItems = [
  { id: 1, title: 'Elite Surfing', description: 'E-Commerce com 446+ produtos, checkout otimizado e PIX automático.', imageSrc: '/elite-surfing.jpg', href: 'https://www.elitesurfing.com.br' },
  { id: 2, title: 'Centro Dentário Colombo', description: 'Site institucional bilíngue PT/EN com agendamento integrado.', imageSrc: '/centro-dentario.jpg', href: 'https://www.centrodentariocolombo.com' },
  { id: 3, title: 'Street Paint', description: 'Oficina com orçamento interativo por peça e chatbot de IA.', imageSrc: '/street-paint.jpg', href: 'https://www.streetpaint.pt' },
  { id: 4, title: 'Go Portugal Tours', description: '24 roteiros de tours privados com preços dinâmicos.', imageSrc: '/go-portugal-tours.jpg', href: 'https://www.goportugaltours.com' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
      <div className="max-w-300 mx-auto">
        <SectionHeader label="Portfólio" title='Projetos <em>reais</em>, resultados reais.' description="Cada projeto é construído do zero com código próprio. Sem templates, sem limitações — e com resultados mensuráveis." />
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {portfolioItems.map(item => (
              <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all no-underline">
                <div className="aspect-video overflow-hidden"><img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div>
                <div className="p-5"><h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h3><p className="text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p></div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
