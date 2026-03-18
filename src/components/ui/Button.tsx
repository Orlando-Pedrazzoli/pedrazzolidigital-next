import { MessageCircle } from 'lucide-react'
import type { ReactNode } from 'react'

const variants: Record<string, string> = {
  primary: 'bg-green-600 hover:bg-green-700 text-white border border-green-600 hover:border-green-700 shadow-md hover:shadow-lg',
  outline: 'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700',
  ghost: 'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-transparent',
}

const sizes: Record<string, string> = { sm: 'h-9 px-4 text-sm gap-2', md: 'h-10 px-5 text-sm gap-2', lg: 'h-11 px-6 text-base gap-2.5' }

interface ButtonProps {
  children: ReactNode; href?: string; external?: boolean; variant?: string
  size?: string; whatsapp?: boolean; fullWidth?: boolean; className?: string
  [key: string]: unknown
}

export default function Button({ children, href, external = false, variant = 'primary', size = 'md', whatsapp = false, fullWidth = false, className = '', ...props }: ButtonProps) {
  const allClasses = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer no-underline ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${fullWidth ? 'w-full' : ''} ${className}`.trim()
  const content = <>{whatsapp && <MessageCircle size={size === 'sm' ? 14 : 16} />}{children}</>

  if (href) {
    return <a href={href} className={allClasses} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>{content}</a>
  }
  return <button className={allClasses} {...props}>{content}</button>
}
