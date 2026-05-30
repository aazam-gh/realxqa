import { useEffect, useRef, useState } from 'react'
import { Check, Percent, Ticket, Zap } from 'lucide-react'

import { homeContent } from '@/content/home'

import './SavingsFeatures.css'

const badgeIcons = {
  check: { Icon: Check, size: 13, strokeWidth: 2.6 },
  percent: { Icon: Percent, size: 12, strokeWidth: 2.4 },
  ticket: { Icon: Ticket, size: 13, strokeWidth: 2.4 },
  zap: { Icon: Zap, size: 12, strokeWidth: 2.6 },
}

const mobileMotionQuery =
  '((hover: none) and (max-width: 639px)), ((pointer: coarse) and (max-width: 639px))'

function getActiveFeatureIndex(cards: Array<HTMLElement | null>) {
  const bandTop = window.innerHeight * 0.42
  const bandBottom = window.innerHeight * 0.58

  const activeIndex = cards.findIndex((card) => {
    if (!card) {
      return false
    }

    const rect = card.getBoundingClientRect()

    return rect.top <= bandBottom && rect.bottom >= bandTop
  })

  return activeIndex === -1 ? null : activeIndex
}

export function SavingsFeatures() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number | null>(
    null,
  )
  const cardRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileMotionQuery)
    let observer: IntersectionObserver | undefined

    const updateActiveFeature = () => {
      setActiveFeatureIndex(
        mediaQuery.matches ? getActiveFeatureIndex(cardRefs.current) : null,
      )
    }

    const connectObserver = () => {
      observer?.disconnect()

      if (!mediaQuery.matches) {
        setActiveFeatureIndex(null)
        return
      }

      observer = new IntersectionObserver(updateActiveFeature, {
        rootMargin: '-36% 0px -36% 0px',
        threshold: 0,
      })

      cardRefs.current.forEach((card) => {
        if (card) {
          observer?.observe(card)
        }
      })

      updateActiveFeature()
    }

    connectObserver()
    mediaQuery.addEventListener('change', connectObserver)

    return () => {
      mediaQuery.removeEventListener('change', connectObserver)
      observer?.disconnect()
    }
  }, [])

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
          {homeContent.savings.features.map((feature, index) => {
            const badgeIcon = badgeIcons[feature.badge.icon]
            const BadgeIcon = badgeIcon.Icon

            return (
              <article
                className="realx-feature-card"
                data-mobile-active={
                  activeFeatureIndex === index ? 'true' : undefined
                }
                key={feature.title}
                ref={(node) => {
                  cardRefs.current[index] = node
                }}
              >
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
