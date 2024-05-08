import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import GQLProvider from './gqlProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GQLProvider>
          <Providers>{children}</Providers>
        </GQLProvider>
      </body>
    </html>
  )
}
