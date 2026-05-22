import { DollarSign, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { homeContent } from '@/content/home'
import { HeroPhonePreview } from '@/components/sections/HeroPhonePreview'
import { RealXDownloadPrompt } from '@/components/ui/RealXDownloadPrompt'

type FinalDownloadCtaProps = {
  actionHref?: string
  actionLabel?: string
}

type FinalCtaIconProps = {
  icon: LucideIcon
}

function FinalCtaIcon({ icon: Icon }: FinalCtaIconProps) {
  return (
    <span
      aria-hidden="true"
      className="ml-3 inline-flex size-9 translate-y-[-0.08em] items-center justify-center rounded-2xl bg-[#f2f2f2] align-middle text-(--realx-green) sm:size-12 lg:ml-4 lg:size-13"
    >
      <Icon className="size-5 sm:size-6 lg:size-7" strokeWidth={2} />
    </span>
  )
}

function FinalCtaTitle() {
  return (
    <h2
      className="final-cta-title order-2 mt-5 max-w-190 text-4xl font-semibold leading-[0.98] tracking-tight text-black sm:text-5xl md:max-w-80 md:text-[36px] min-[900px]:max-[1279px]:max-w-[27.5rem] min-[900px]:max-[1279px]:text-[46px] xl:max-w-155 xl:text-[58px]"
      aria-label={homeContent.finalCta.title}
    >
      Download real<span className="text-(--realx-green)">X</span> and start
      saving and earning
      <FinalCtaIcon icon={DollarSign} /> rewards on every purchase{' '}
      <span className="text-(--realx-green)">every day.</span>
      <FinalCtaIcon icon={Zap} />
    </h2>
  )
}

function FinalCtaPhone() {
  return (
    <div className="final-cta-frame h-48.75 w-screen max-w-180 overflow-hidden sm:h-70 sm:max-w-200 md:h-85 md:w-[58vw] md:max-w-140 min-[900px]:max-[1279px]:h-[400px] min-[900px]:max-[1279px]:w-[52vw] min-[900px]:max-[1279px]:max-w-[680px] xl:h-110 xl:w-[56vw] xl:max-w-205">
      <HeroPhonePreview
        className="final-cta-phone mx-auto w-full origin-top mask-[linear-gradient(to_bottom,#000_0%,#000_42%,rgba(0,0,0,0.35)_50%,transparent_62%,transparent_100%)] mask-size-[100%_100%] md:scale-[1.16] min-[900px]:max-[1279px]:-translate-y-8 min-[900px]:max-[1279px]:scale-[1.04] min-[900px]:max-[1279px]:mask-[linear-gradient(to_bottom,#000_0%,#000_38%,rgba(0,0,0,0.22)_48%,transparent_56%,transparent_100%)] xl:mx-0 xl:-translate-y-8 xl:scale-100 xl:mask-[linear-gradient(to_bottom,#000_0%,#000_38%,rgba(0,0,0,0.2)_47%,transparent_56%,transparent_100%)]"
        fetchPriority="auto"
        loading="lazy"
      />
    </div>
  )
}

export function FinalDownloadCta({
  actionHref,
  actionLabel = 'Download realX',
}: FinalDownloadCtaProps) {
  return (
    <section className="overflow-hidden bg-white px-5 pb-8 pt-10 text-center sm:px-7 sm:py-20 lg:py-8">
      <div className="final-cta-grid mx-auto flex max-w-6xl flex-col items-center md:grid md:grid-cols-[minmax(0,0.72fr)_minmax(420px,1fr)] md:items-start md:gap-3 md:text-left min-[900px]:max-[1279px]:grid-cols-[minmax(0,0.86fr)_minmax(500px,1fr)] min-[900px]:max-[1279px]:gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(520px,1fr)] xl:gap-8">
        <div className="flex flex-col items-center md:items-start">
          <p className="order-1 text-xs font-semibold text-[#555]">
            {homeContent.finalCta.pretitle}
          </p>
          <FinalCtaTitle />
        </div>

        <div className="final-cta-media order-3 mt-3 flex flex-col items-center md:order-2 md:ml-8 md:mt-0 md:justify-self-start xl:ml-0">
          <FinalCtaPhone />
          <RealXDownloadPrompt
            caption={homeContent.finalCta.eyebrow}
            className="final-cta-prompt mt-2 min-[900px]:max-[1279px]:origin-center min-[900px]:max-[1279px]:scale-105 xl:origin-center xl:scale-105"
            href={actionHref}
            label={actionLabel}
          />
        </div>
      </div>
    </section>
  )
}
