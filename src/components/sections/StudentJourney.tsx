import { homeContent } from '@/content/home'
import { RealXDownloadPrompt } from '@/components/ui/RealXDownloadPrompt'

export function StudentJourney() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-24 text-center text-black sm:px-7 sm:py-32">
      <div className="mx-auto flex max-w-[632px] flex-col items-center">
        <img
          src="/images/brand/app-icon.png"
          alt=""
          aria-hidden="true"
          width="3328"
          height="3328"
          loading="lazy"
          className="size-16 rounded-2xl"
        />
        <h2 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          {homeContent.journey.title}
        </h2>
        <p className="mt-5 max-w-[420px] text-sm font-semibold leading-relaxed text-[#555] sm:text-base">
          {homeContent.journey.body}
        </p>
        <RealXDownloadPrompt className="mt-8" />
      </div>
    </section>
  )
}
