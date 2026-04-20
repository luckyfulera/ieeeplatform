import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIDIS-SM 2027 - IEEE Conference on AI-Driven Intelligent Systems',
  description: '1st IEEE Conference on AI-Driven Intelligent Systems, Digital Innovation, and Sustainable Management for a Resilient Future at Graphic Era Hill University, February 19-20, 2027',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
