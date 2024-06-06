import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers'
const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat' })

export const metadata: Metadata = {
  title: 'EthDA',
  description: 'EthDA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' rel='stylesheet'></link> */}
      {/* <script src='https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js'></script> */}
      <body className={montserrat.className} style={{ backgroundColor: '#000000' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
