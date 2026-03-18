'use client'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { businessTypes } from '@/data/businessTypes'
import { getBusinessWhatsApp } from '@/utils/whatsapp'

export default function BusinessTypes() {
  return (
    <section id="solucoes" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Soluções para seu Negócio" title='Independentemente do segmento, seu site precisa <em>vender.</em>' description="Cada negócio tem necessidades diferentes. Desenvolvo soluções específicas para o seu segmento." />
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((bt, idx) => (
              <a key={idx} href={getBusinessWhatsApp(bt.name)} target="_blank" rel="noopener noreferrer" className="no-underline group">
                <div className="relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ background: `linear-gradient(135deg, ${bt.gradientFrom}, ${bt.gradientTo})` }}>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{bt.name}</h3>
                  <p className="text-sm leading-relaxed text-white/90" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{bt.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-center mt-8 text-sm text-zinc-500 dark:text-zinc-400">Não encontrou seu segmento? <a href={getBusinessWhatsApp('outro segmento')} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 font-semibold hover:underline">Me conta qual é</a> — provavelmente já atendemos.</p>
        </FadeIn>
      </div>
    </section>
  )
}
