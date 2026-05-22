import { useState } from 'react'
import { Plus, Send } from 'lucide-react'

import { homeContent } from '@/content/home'
import { realXAppIcon, supportEmail } from '@/content/siteConfig'
import { RealXText } from '@/components/ui/RealXText'

export function HomeFaq() {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const toggleItem = (index: number) => {
    setOpenItem((current) => (current === index ? null : index))
  }

  return (
    <section className="bg-[#f5f5f5] px-5 py-16 sm:px-7 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-lg font-semibold text-[#3f3f3f] sm:text-2xl">
            <RealXText text={homeContent.faqs.eyebrow} />
          </p>
          <h2 className="mx-auto mt-7 max-w-6xl text-4xl font-semibold leading-[1.12] tracking-tight text-black sm:text-[44px] lg:text-[50px]">
            {homeContent.faqs.title.main}{' '}
            <span className="text-[#858585]">
              {homeContent.faqs.title.muted}
            </span>
          </h2>
        </div>

        <div className="mt-10 divide-y divide-black/10 sm:mt-14 lg:mt-16">
          {homeContent.faqs.items.map((item, index) => (
            <article
              key={item.question}
              className="py-4 font-semibold leading-tight text-black sm:py-5 lg:py-6"
            >
              <button
                type="button"
                aria-expanded={openItem === index}
                aria-controls={`home-faq-answer-${index}`}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent p-0 text-left font-semibold text-black outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-2xl sm:text-3xl lg:text-[34px]">
                  <RealXText text={item.question} />
                </span>
                <span
                  className={`grid size-12 shrink-0 place-items-center rounded-[15px] transition-colors duration-300 sm:size-14 ${
                    openItem === index
                      ? 'bg-(--realx-green) text-white'
                      : 'bg-[#d4d4d4] text-black group-hover:text-(--realx-green)'
                  }`}
                >
                  <Plus
                    className={`size-6 transition-transform duration-300 ease-out sm:size-7 ${
                      openItem === index ? 'rotate-45' : ''
                    }`}
                    strokeWidth={2.25}
                  />
                </span>
              </button>
              <div
                id={`home-faq-answer-${index}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  openItem === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-3xl pb-5 text-base leading-7 text-[#555] sm:text-lg lg:pb-6">
                    <RealXText text={item.answer} />
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center text-xl font-semibold text-[#8a8a8a] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-left sm:text-2xl lg:text-[24px]">
          <p>{homeContent.faqs.contactEyebrow}</p>
          <a
            href={`mailto:${supportEmail}`}
            className="inline-flex w-fit items-center gap-2.5 rounded-[18px] border border-black/10 bg-white px-3.5 py-2 text-sm font-medium text-black transition hover:border-black/30 sm:px-4 sm:py-2.5 sm:text-base"
          >
            <img
              src={realXAppIcon.src}
              srcSet={realXAppIcon.srcSet}
              sizes="(min-width: 640px) 32px, 28px"
              alt=""
              aria-hidden="true"
              width={realXAppIcon.width}
              height={realXAppIcon.height}
              loading="lazy"
              className="size-7 rounded-lg sm:size-8"
            />
            {homeContent.faqs.contactLabel}
            <Send className="size-4.5 sm:size-5" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </section>
  )
}
