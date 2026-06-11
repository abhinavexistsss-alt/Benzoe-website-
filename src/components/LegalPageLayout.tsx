import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { SiteHeader } from './SiteHeader'

type LegalPageProps = {
  title: string
  children: ReactNode
}

export function LegalPageLayout({ title, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="pt-[110px] pb-20 md:pt-[120px]">
        <div className="section-wrap max-w-3xl">
          <Link to="/" className="text-sm text-blue hover:underline">
            ← Back to home
          </Link>
          <h1 className="mt-8 font-display text-4xl tracking-tight md:text-5xl">{title}</h1>
          <div className="prose-legal mt-10 space-y-6 text-base leading-relaxed text-ink-soft">
            {children}
          </div>
          <p className="mt-12 text-sm text-ink-soft">Last updated: June 2026</p>
        </div>
      </main>
    </>
  )
}
