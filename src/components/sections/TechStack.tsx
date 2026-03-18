'use client'
import { techStack } from '@/data/techStack'
import SectionHeader from '@/components/ui/SectionHeader'
import FadeIn from '@/components/ui/FadeIn'

export default function TechStack() {
  return (
    <section className="py-20 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Tecnologias" title='Ferramentas que <em>utilizo.</em>' description="Stack moderna e testada em produção. Cada tecnologia é escolhida pelo resultado que entrega ao seu negócio." />
        <FadeIn>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {techStack.map(tech => (
              <div key={tech.id} className="flex flex-col items-center gap-2">
                <img src={tech.image} alt={tech.name} className="h-10 w-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" loading="lazy" />
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
