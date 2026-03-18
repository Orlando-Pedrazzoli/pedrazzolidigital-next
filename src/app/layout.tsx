import type { ReactNode } from 'react'
import { Plus_Jakarta_Sans, Geist } from 'next/font/google'
import { rootMetadata } from '@/lib/seo'
import { OrganizationJsonLd, ProfessionalServiceJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import { CookieProvider } from '@/contexts/CookieProvider'
import '@/styles/index.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

export const metadata = rootMetadata

export const viewport = {
  width: 'device-width', initialScale: 1, viewportFit: 'cover' as const,
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#16a34a' }, { media: '(prefers-color-scheme: dark)', color: '#111827' }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth", "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <ProfessionalServiceJsonLd />
        <WebSiteJsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var s=localStorage.getItem('op-theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(s==='dark'||(!s&&d)){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark'}else{document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light'}}catch(e){document.documentElement.classList.add('dark')}})()` }} />
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider><CookieProvider>{children}</CookieProvider></ThemeProvider>
      </body>
    </html>
  )
}
