import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'AltaireDev | Ahmadjon',
  description: 'My incredibly fancy personal portfolio)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0a0a0a] text-gray-200 min-h-screen`}>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Navigation />
          <main className="mt-12">{children}</main>
          <Analytics />
        </div>
      </body>
    </html>
  )
}