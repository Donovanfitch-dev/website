import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lucent AI Agency | Intelligence Where There Is Friction',
  description: 'Production-grade AI solutions for modern businesses. Website design and automation that brings clarity to your operations.',
  keywords: ['AI agency', 'AI automation', 'AI website design', 'business automation', 'AI consulting'],
  authors: [{ name: 'Lucent AI Agency' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Lucent AI Agency',
    description: 'Intelligence where there is friction. Clarity where there is noise.',
    type: 'website',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
