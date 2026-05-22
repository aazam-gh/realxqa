import { homeContent } from '@/content/home'
import { RealXText } from '@/components/ui/RealXText'

export function GettingStartedSteps() {
  return (
    <section className="bg-white px-5 py-24 sm:px-7 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-156 text-center">
          <p className="text-xs font-semibold text-(--realx-green-strong)">
            {homeContent.steps.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            {homeContent.steps.title}
          </h2>
        </div>

        <div className="mt-28 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.steps.items.map((step, index) => (
            <article className="relative" key={step.title}>
              <div className="grid aspect-308/250 place-items-center overflow-hidden rounded-lg border border-(--realx-border) bg-white">
                <img
                  src={step.image}
                  alt={step.alt}
                  width={step.width}
                  height={step.height}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="mt-2 grid size-5 place-items-center rounded bg-[#f3f3f3] text-[11px] font-semibold text-[#777]">
                {index + 1}
              </span>
              <h3 className="mt-3 text-xs font-semibold text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-[#555]">
                <RealXText text={step.body} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
