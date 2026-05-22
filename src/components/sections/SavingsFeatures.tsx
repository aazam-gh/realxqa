import { homeContent } from '@/content/home'

export function SavingsFeatures() {
  return (
    <section className="bg-(--realx-green) px-5 py-20 sm:px-7 sm:py-36">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[624px] text-center">
          <p className="text-xs font-semibold text-white/80">
            {homeContent.savings.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {homeContent.savings.title}
            <br />
            {homeContent.savings.body}
          </h2>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.savings.features.map((feature) => (
            <article key={feature.title}>
              <div className="relative grid aspect-[308/250] place-items-end overflow-hidden rounded-lg bg-[#f5f5f5] px-5 pt-5">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  loading="lazy"
                  className="h-full w-auto object-contain"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent via-[#f5f5f5]/85 to-[#f5f5f5]"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-xs font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-white/80">
                  {feature.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
