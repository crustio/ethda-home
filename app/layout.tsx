import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ethda',
  description: 'Ethda',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
