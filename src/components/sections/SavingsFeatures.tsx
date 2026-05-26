import { Check, Percent, Ticket, Zap } from 'lucide-react'

import { homeContent } from '@/content/home'

import './SavingsFeatures.css'

const badgeIcons = {
  check: { Icon: Check, size: 13, strokeWidth: 2.6 },
  percent: { Icon: Percent, size: 12, strokeWidth: 2.4 },
  ticket: { Icon: Ticket, size: 13, strokeWidth: 2.4 },
  zap: { Icon: Zap, size: 12, strokeWidth: 2.6 },
}

export function SavingsFeatures() {
  return (
    <section className="bg-(--realx-green) px-5 py-14 sm:px-7 sm:py-20 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-xl font-semibold text-white/80 sm:text-2xl lg:text-[30px]">
            {homeContent.savings.eyebrow}
          </p>
          <h2 className="mt-5 text-[38px] font-semibold leading-[1.02] tracking-tight text-white sm:text-[50px] lg:text-[58px]">
            {homeContent.savings.title}
            <br />
            <span className="text-white/65">{homeContent.savings.body}</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {homeContent.savings.features.map((feature) => {
            const badgeIcon = badgeIcons[feature.badge.icon]
            const BadgeIcon = badgeIcon.Icon

            return (
              <article className="realx-feature-card" key={feature.title}>
                <div className="realx-feature-card__media relative grid aspect-[469/461] items-end justify-items-center overflow-hidden rounded-[22px] bg-[#f4f4f4] px-7 pt-10">
                  <span
                    aria-hidden="true"
                    className={`realx-feature-card__badge realx-feature-card__badge--${feature.badge.variant} realx-feature-card__badge--has-icon`}
                  >
                    <span
                      aria-hidden="true"
                      className={`realx-feature-card__badge-icon realx-feature-card__badge-icon--${feature.badge.icon}`}
                    >
                      <BadgeIcon
                        size={badgeIcon.size}
                        strokeWidth={badgeIcon.strokeWidth}
                      />
                    </span>
                    {feature.badge.label}
                  </span>
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    width={feature.width}
                    height={feature.height}
                    loading="lazy"
                    className="realx-feature-card__image h-[112%] w-auto max-w-none object-contain"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent via-[#f4f4f4]/65 to-[#f4f4f4]"
                  />
                </div>
                <div className="px-1 pt-5">
                  <h3 className="text-lg font-normal leading-tight text-white lg:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base leading-[1.22] text-white/70">
                    {feature.body}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
