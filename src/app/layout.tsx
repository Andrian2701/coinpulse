import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { ReactQueryProvider } from '@/lib/react-query-provider'
import { ThemeProvider } from '@/lib/theme-provider'
import { Footer, Header } from '@/shared/components'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon1.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div
          className={`${roboto.className} box-border min-h-screen px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 flex flex-col bg-background`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactQueryProvider>
              <div className="flex flex-col min-h-[calc(100vh-2rem)]">
                <Header />
                <main className="flex-grow py-4 sm:py-6">{children}</main>
                <Footer />
              </div>
            </ReactQueryProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
