'use client'
import { useInView } from '@/hooks/useInView'
import type { ReactNode } from 'react'

interface FadeInProps { children: ReactNode; delay?: number; className?: string; direction?: 'up' | 'down' | 'left' | 'right' }

export default function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  const [ref, isVisible] = useInView()
  const transforms = { up: 'translateY(24px)', down: 'translateY(-24px)', left: 'translateX(24px)', right: 'translateX(-24px)' }

  return (
    <div ref={ref} className={className} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translate(0)' : transforms[direction], transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  )
}
