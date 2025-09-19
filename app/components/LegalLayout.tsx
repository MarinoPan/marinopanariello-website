import { ReactNode } from 'react'

interface LegalLayoutProps {
  children: ReactNode
}

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900 py-16 px-6">
      <article className="mx-auto max-w-3xl space-y-12 leading-relaxed text-base">
        {children}
      </article>
    </main>
  )
}
