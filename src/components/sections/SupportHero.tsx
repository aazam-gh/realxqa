import { supportPageContent } from '@/content/support'

export function SupportHero() {
  return (
    <section className="bg-white px-5 py-16 sm:px-7 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-semibold uppercase text-[var(--realx-muted)]">
          ( Last Updated: {supportPageContent.lastUpdated} )
        </p>
        <h1 className="mt-5 text-center text-5xl font-semibold tracking-tight text-black uppercase sm:text-7xl">
          {supportPageContent.title}
        </h1>
        <p className="mt-8 text-lg leading-8 text-[#4c4c4c] sm:text-xl sm:leading-9">
          {supportPageContent.intro}
        </p>
      </div>
    </section>
  )
}
