import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "sonner";

import './globals.css'

import ConvexClientProvider from '@/components/provider/convex-provider'
import ModalProvider from '@/components/provider/modal-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'The connected workspace where better, faster work happens.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      }
    ]
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster position="bottom-right" />
          <ModalProvider />
          {children}
        </ConvexClientProvider>
        <Toaster />
      </body>
    </html>
  )
}
