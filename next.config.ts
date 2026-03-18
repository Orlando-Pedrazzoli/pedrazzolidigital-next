import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Imagens externas — usar unoptimized se não quiser Image Optimization API
  images: {
    unoptimized: true,
  },

  // Headers de segurança (geridos pela Vercel em produção)
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ],
}

export default nextConfig
