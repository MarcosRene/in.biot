import './globals.css'

import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-red-hat-display',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${redHatDisplay.variable}`}>
      <body className="font-sans bg-background-primary text-content-body antialiased">
        {children}
      </body>
    </html>
  )
}
