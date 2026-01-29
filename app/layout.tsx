import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFSAR.SYS - Portfolio Terminal',
  description: 'Mohd Afsar Hussain - Software Engineer | Cloud & DevOps Specialist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
