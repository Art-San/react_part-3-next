import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'

const loveFont = Oswald({
  variable: '--font-geist-sans',
  subsets: ['cyrillic'],
  weight: ['400', '200']
})

export const metadata: Metadata = {
  title: {
    default: 'Мое приложение на Next.js',
    template: '%s | Мое приложение на Next.js'
  },
  description: 'Я изучаю Next.js последней версии'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${loveFont.className} antialiased max-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 dark:text-white`}
      >
        <main className="p-8">{children}</main>
      </body>
    </html>
  )
}
