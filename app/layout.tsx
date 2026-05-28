import type { Metadata } from 'next'
import './globals.css'
import { siteMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: 'website',
    images: ['/images/ivan-double-gold.jpeg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
