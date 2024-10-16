import Footer from '@/components/Footer'
import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import SessionProvider from './providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatLense',
  description: 'Your AI Assistant',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#191B1C] text-gray-300`}>
        <SessionProvider>
          <div className='flex overflow-hidden h-screen'>
            <Sidebar />
            <div className='w-4/5 p-5 bg-secondary rlative'>
              <Header />
              {children}
              <Footer />
            </div>
          </div>
          <Toaster position="top-right" />
        </SessionProvider>
      </body>
    </html>
  )
}