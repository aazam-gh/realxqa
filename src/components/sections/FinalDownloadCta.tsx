import { DollarSign, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { homeContent } from '@/content/home'
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
      className="ml-3 inline-flex size-9 shrink-0 translate-y-[-0.08em] items-center justify-center rounded-2xl bg-[#f2f2f2] align-middle text-(--realx-green) sm:size-12 lg:ml-4 lg:size-13"
    >
      <Icon className="size-5 sm:size-6 lg:size-7" strokeWidth={2} />
    </span>
  )
}

function FinalCtaTitle() {
  return (
    <h2
      className="final-cta-title mt-5 max-w-190 text-4xl font-semibold leading-[0.98] tracking-tight text-black sm:text-5xl lg:text-[58px]"
      aria-label={homeContent.finalCta.title}
    >
      Download real<span className="text-(--realx-green)">X</span> and start
      saving and earning
      <FinalCtaIcon icon={DollarSign} /> rewards on every purchase{' '}
      <span className="inline-flex items-center whitespace-nowrap">
        <span className="text-(--realx-green)">every day.</span>
        <FinalCtaIcon icon={Zap} />
      </span>
    </h2>
  )
}

export function FinalDownloadCta({
  actionHref,
  actionLabel = 'Download realX',
}: FinalDownloadCtaProps) {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 text-center sm:px-7 sm:py-20 lg:py-24">
      <div className="final-cta-grid mx-auto flex max-w-4xl flex-col items-center">
        <p className="text-xs font-semibold text-[#555]">
          {homeContent.finalCta.pretitle}
        </p>
        <FinalCtaTitle />
        <RealXDownloadPrompt
          caption={homeContent.finalCta.eyebrow}
          className="final-cta-prompt mt-8"
          href={actionHref}
          label={actionLabel}
        />
      </div>
    </section>
  )
}
