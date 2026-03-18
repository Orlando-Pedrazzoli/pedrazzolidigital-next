'use client'
import SectionHeader from '@/components/ui/SectionHeader'
import FadeIn from '@/components/ui/FadeIn'
import { featuresFolders } from '@/data/features'

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Funcionalidades" title='Tudo incluso. <em>Sem surpresas.</em>' description="Cada projeto é entregue completo e pronto para funcionar." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {featuresFolders.map((folder, index) => (
            <FadeIn key={index} delay={index * 80}>
              <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-green-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10" style={{ minHeight: '240px' }}>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{folder.title}</h3>
                <p className="text-sm text-zinc-500 mb-4">{folder.description}</p>
                <div className="flex gap-2">
                  {folder.projects.map(p => (
                    <div key={p.id} className="w-16 h-20 rounded-lg overflow-hidden border border-zinc-700">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
