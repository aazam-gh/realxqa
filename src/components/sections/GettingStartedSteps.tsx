import { homeContent } from '@/content/home'
import { siteConfig } from '@/content/siteConfig'
import { RealXText } from '@/components/ui/RealXText'

import './GettingStartedSteps.css'

const stepMediaClassName =
  'realx-step-card__media grid aspect-308/250 place-items-center overflow-hidden rounded-lg border border-(--realx-border) bg-white'

export function GettingStartedSteps() {
  return (
    <section className="bg-white px-5 py-16 sm:px-7 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-156 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-(--realx-green) bg-white px-4 py-1.5 text-xs font-semibold text-(--realx-green)">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-(--realx-green) shadow-[0_0_0_4px_rgba(24,184,82,0.16)]"
            />
            {homeContent.steps.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            {homeContent.steps.title}
          </h2>
        </div>

        <div className="realx-steps-grid mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.steps.items.map((step, index) => (
            <article className="realx-step-card relative" key={step.title}>
              {index === 0 ? (
                <a
                  className={`${stepMediaClassName} realx-step-card__media--link`}
                  href={siteConfig.downloadHref}
                  rel="noopener noreferrer"
                  aria-label="Download the realX app"
                >
                  <img
                    src={step.image.src}
                    srcSet={step.image.srcSet}
                    sizes={step.image.sizes}
                    alt={step.alt}
                    width={step.image.width}
                    height={step.image.height}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </a>
              ) : (
                <div className={stepMediaClassName}>
                  <img
                    src={step.image.src}
                    srcSet={step.image.srcSet}
                    sizes={step.image.sizes}
                    alt={step.alt}
                    width={step.image.width}
                    height={step.image.height}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <span className="realx-step-card__number mt-4 grid size-6 place-items-center rounded bg-[#f3f3f3] text-xs font-semibold text-[#777]">
                {index + 1}
              </span>
              <h3 className="mt-3 text-lg font-medium leading-tight text-black sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-snug text-[#555] sm:text-lg">
                <RealXText text={step.body} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
