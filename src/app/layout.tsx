import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arlan Medya',
  description: 'Erzurum merkezli yazılım ve reklam ajansı Arlan Medya olarak, dijital dünyada benzersiz çözümler sunuyoruz. Özel yazılım projeleri ve etkili reklam stratejileri ile markanızı güçlendirin. #ArlanMedya #Erzurum',
}

export default function RootLayout({
  children,
}: {

  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>
          <main className='min-h-screen max-sm:py-3 bg-black flex items-center'>{children}</main>
      </body>
    </html>
  )
}
