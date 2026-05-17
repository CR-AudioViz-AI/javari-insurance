// app/layout.tsx — Javari Insurance
// Fortune 50 quality — uses AppShell for full ecosystem integration
// May 17, 2026 — CR AudioViz AI, LLC
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Javari Insurance | Javari by CR AudioViz AI',
  description: 'AI insurance comparison and quotes',
  keywords: 'Javari Insurance, Javari, AI, CR AudioViz AI',
}

import AppShell from '@/components/AppShell'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          appName="Javari Insurance"
          appColor="#3b82f6"
          appEmoji="🛡️"
          appDesc="AI insurance comparison and quotes"
      handoffApp="Javari Health"
      handoffUrl="https://javari-health.vercel.app"
      handoffPitch="Also compare health coverage options →"
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
