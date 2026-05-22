import { internshipsPageContent } from '@/content/internships'

export function InternshipsStory() {
  return (
    <section className="bg-white px-5 py-16 sm:px-7 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-[var(--realx-green-strong)]">
            {internshipsPageContent.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-6xl">
            {internshipsPageContent.storyTitle}
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-[#4c4c4c]">
          {internshipsPageContent.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
