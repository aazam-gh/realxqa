import { TextWithEmailLinks } from '@/components/ui/TextWithEmailLinks'
import type { LegalContent } from '@/content/legal'

type LegalArticleProps = {
  content: LegalContent
}

export function LegalArticle({ content }: LegalArticleProps) {
  return (
    <article className="bg-white px-5 py-16 sm:px-7 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-semibold text-[var(--realx-muted)]">
          ( Last Updated: {content.lastUpdated} )
        </p>
        <h1 className="mt-5 text-center text-4xl font-semibold tracking-tight text-black uppercase sm:text-7xl">
          {content.title}
        </h1>
        <p className="mt-10 text-lg leading-8 text-[#4c4c4c]">
          <TextWithEmailLinks text={content.intro} />
        </p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold tracking-tight text-black">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-[#4c4c4c]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>
                    <TextWithEmailLinks text={paragraph} />
                  </p>
                ))}
                {section.items ? (
                  <ul className="list-disc space-y-3 pl-6">
                    {section.items.map((item) => (
                      <li key={item}>
                        <TextWithEmailLinks text={item} />
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.after?.map((paragraph) => (
                  <p key={paragraph}>
                    <TextWithEmailLinks text={paragraph} />
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
