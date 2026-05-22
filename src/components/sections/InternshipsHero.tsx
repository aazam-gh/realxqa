import { internshipsPageContent } from '@/content/internships'

export function InternshipsHero() {
  return (
    <section className="bg-black px-5 py-16 text-white sm:px-7 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-white/60">
          Internships
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          {internshipsPageContent.title}
        </h1>
      </div>
    </section>
  )
}
