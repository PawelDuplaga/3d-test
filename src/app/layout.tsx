import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900" ]
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
