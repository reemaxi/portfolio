import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rimaxi Sakariya — Full Stack Developer',
  description:
    'Rimaxi Sakariya — Full Stack Developer specializing in Next.js, React.js, Node.js, and NestJS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />
        {/* AOS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
