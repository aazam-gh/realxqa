import { homeContent } from '@/content/home'

type BuiltByLogosProps = {
  className?: string
}

export function BuiltByLogos({ className = '' }: BuiltByLogosProps) {
  return (
    <div
      className={`rounded-2xl bg-(--realx-green) px-5 py-8 text-center ${className}`}
    >
      <p className="text-[11px] font-semibold uppercase text-white/80">
        {homeContent.finalCta.trustedBy}
      </p>
      <div className="mx-auto mt-4 grid max-w-90 grid-cols-4 items-center gap-3 sm:max-w-107.5 sm:gap-4">
        {homeContent.finalCta.logos.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            className="max-h-8 w-full object-contain opacity-70 grayscale brightness-0 invert sm:max-h-9"
          />
        ))}
      </div>
    </div>
  )
}
