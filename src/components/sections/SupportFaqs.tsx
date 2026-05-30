import { TextWithEmailLinks } from '@/components/ui/TextWithEmailLinks'
import { supportPageContent } from '@/content/support'

export function SupportFaqs() {
  return (
    <section className="bg-[#f7f7f5] px-5 py-16 sm:px-7">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-5xl">
          {supportPageContent.faqTitle}
        </h2>
        <div className="mt-8 divide-y divide-[var(--realx-border)] rounded-3xl bg-white px-6">
          {supportPageContent.faqs.map((faq) => (
            <article className="py-6" key={faq.question}>
              <h3 className="text-lg font-semibold text-black">
                {faq.question}
              </h3>
              <p className="mt-3 leading-7 text-[#4c4c4c]">
                <TextWithEmailLinks text={faq.answer} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
