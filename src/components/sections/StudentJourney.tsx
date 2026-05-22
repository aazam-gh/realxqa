import { homeContent } from '@/content/home'
import { RealXDownloadPrompt } from '@/components/ui/RealXDownloadPrompt'
import { realXAppIcon } from '@/content/siteConfig'

export function StudentJourney() {
  return (
    <section className="bg-[#f5f5f5] px-5 py-16 text-center text-black sm:px-7 sm:py-24">
      <div className="mx-auto flex max-w-[632px] flex-col items-center">
        <img
          src={realXAppIcon.src}
          srcSet={realXAppIcon.srcSet}
          sizes="64px"
          alt=""
          aria-hidden="true"
          width={realXAppIcon.width}
          height={realXAppIcon.height}
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
