'use client'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'

const SERVICES = [
  { id: '01', title: 'Sites Institucionais', description: 'Sites profissionais com código próprio, design moderno, SEO otimizado e performance máxima.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200' },
  { id: '02', title: 'E-Commerce', description: 'Lojas virtuais completas com carrinho, checkout, integração Pagar.me/Stripe e painel de vendedor.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200' },
  { id: '03', title: 'Framer Development', description: 'Sites de alta performance e animações fluidas com Framer.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200' },
  { id: '04', title: 'Branding', description: 'Identidade visual completa — logotipo, paleta de cores, tipografia e guia de marca.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200' },
  { id: '05', title: 'UI/UX Design', description: 'Interfaces pensadas para conversão. Protótipos interativos e wireframes.', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200' },
  { id: '06', title: 'Projetos Sob Medida', description: 'Sistemas personalizados, dashboards, integrações com APIs e automações.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200' },
]

export default function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <section id="solucoes" className="w-full py-24 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
      <div className="max-w-300 mx-auto">
        <SectionHeader label="Serviços" title='Como posso ajudar o seu <em>negócio.</em>' description="Do conceito ao deploy — soluções completas de desenvolvimento, design e branding." />
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col space-y-0 order-2 lg:order-1 pt-4">
              {SERVICES.map((service, index) => (
                <button key={service.id} onClick={() => setActiveIndex(index)} className={`group relative flex items-start gap-4 py-5 md:py-6 text-left transition-all duration-500 border-t border-zinc-200 dark:border-zinc-800 first:border-0 bg-transparent cursor-pointer ${activeIndex === index ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300'}`}>
                  <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">/{service.id}</span>
                  <div className="flex flex-col gap-2 flex-1">
                    <span className="text-xl md:text-2xl lg:text-3xl font-normal tracking-tight">{service.title}</span>
                    {activeIndex === index && <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2">{service.description}</p>}
                  </div>
                </button>
              ))}
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-4/5 md:aspect-4/3 lg:aspect-16/11 rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <img src={SERVICES[activeIndex].image} alt={SERVICES[activeIndex].title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 block" />
                <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                  <button onClick={() => setActiveIndex(i => (i - 1 + SERVICES.length) % SERVICES.length)} className="w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 flex items-center justify-center cursor-pointer"><ArrowLeft size={20} /></button>
                  <button onClick={() => setActiveIndex(i => (i + 1) % SERVICES.length)} className="w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 flex items-center justify-center cursor-pointer"><ArrowRight size={20} /></button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
