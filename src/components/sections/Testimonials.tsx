'use client'
import { Star } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeader from '@/components/ui/SectionHeader'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-300 mx-auto">
        <SectionHeader label="Depoimentos" title='Quem já trabalhou comigo, <em>recomenda.</em>' description="Resultados reais de clientes reais. Cada projeto entregue é uma parceria de confiança." />
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}</div>
                <p className="text-[13px] leading-relaxed text-zinc-300 mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="pt-4 border-t border-zinc-800"><p className="text-[14px] font-bold text-zinc-100">{t.name}</p><p className="text-[12px] text-zinc-500">{t.role} · {t.company}</p></div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
