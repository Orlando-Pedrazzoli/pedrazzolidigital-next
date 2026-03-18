'use client'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import Button from '@/components/ui/Button'
import { getWhatsAppUrl } from '@/utils/whatsapp'

const businessOptions = ['Loja Online / E-Commerce','Restaurante / Cafeteria','Clínica / Saúde','Salão / Barbearia','Imobiliária','Serviços / Oficina','Turismo','Educação / Cursos','Outro']

export default function CTAFinal() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending')
    try {
      const emailjs = await import('@emailjs/browser')
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
      await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', {
        from_name: form.name, from_email: form.email, phone: form.phone || 'Não informado',
        business_type: form.business || 'Não informado', message: form.message, to_email: 'pedrazzoliorlando@gmail.com',
      })
      setStatus('success'); setForm({ name: '', email: '', phone: '', business: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch { setStatus('error'); setTimeout(() => setStatus('idle'), 5000) }
  }

  const inputTheme = 'w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all bg-zinc-50 dark:bg-white/6 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-white/30 focus:border-green-500 dark:focus:border-green-500 focus:bg-white dark:focus:bg-white/8 focus:ring-1 focus:ring-green-500/30'

  return (
    <section id="contato" className="py-24 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]">
      <FadeIn>
        <div className="max-w-220 mx-auto rounded-3xl py-16 px-8 md:px-14 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden">
          <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 lg:max-w-75">
              <h2 className="font-display text-[clamp(24px,4vw,36px)] font-normal text-zinc-900 dark:text-white mb-4 leading-[1.15]">Vamos criar algo <em className="italic text-green-600 dark:text-green-400">incrível?</em></h2>
              <p className="text-[15px] text-zinc-500 dark:text-white/50 leading-relaxed mb-6">Preencha o formulário e receba um orçamento personalizado em até 24 horas. Sem compromisso.</p>
              <div className="hidden lg:block"><Button href={getWhatsAppUrl('Olá! Quero iniciar meu projeto.')} external variant="primary" size="md" whatsapp>Iniciar Projeto no WhatsApp</Button></div>
            </div>
            <div className="flex-1 w-full">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle size={32} className="text-green-600 dark:text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Mensagem enviada!</h3>
                  <p className="text-sm text-zinc-500 dark:text-white/50">Retorno em até 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input type="text" name="name" placeholder="Seu nome *" required value={form.name} onChange={handleChange} className={inputTheme} />
                    <input type="email" name="email" placeholder="Seu email *" required value={form.email} onChange={handleChange} className={inputTheme} />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input type="tel" name="phone" placeholder="WhatsApp (opcional)" value={form.phone} onChange={handleChange} className={inputTheme} />
                    <select name="business" value={form.business} onChange={handleChange} className={inputTheme}>
                      <option value="" disabled>Tipo de negócio</option>
                      {businessOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <textarea name="message" placeholder="Conte um pouco sobre seu projeto... *" required rows={4} value={form.message} onChange={handleChange} className={`${inputTheme} resize-none`} />
                  <button type="submit" disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-green-600 hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer border-none">
                    {status === 'sending' ? <><Loader2 size={18} className="animate-spin" /> Enviando...</> : <><Send size={18} /> Iniciar Projeto</>}
                  </button>
                  {status === 'error' && <div className="flex items-center gap-2 text-red-500 text-sm mt-2"><AlertCircle size={16} /><span>Erro ao enviar. Tente novamente ou use o WhatsApp.</span></div>}
                </form>
              )}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
