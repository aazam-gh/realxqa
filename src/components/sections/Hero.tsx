import { HeroPhonePreview } from '@/components/sections/HeroPhonePreview'
import { RealXDownloadPrompt } from '@/components/ui/RealXDownloadPrompt'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden rounded-t-2xl bg-white px-6 pt-12 text-center sm:rounded-t-3xl sm:px-8 sm:pt-16 lg:pt-20"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl flex-col items-center">
        <p className="mb-7 text-xs font-bold uppercase text-(--realx-muted) sm:mb-8 sm:text-sm">
          Only for students
        </p>

        <h1
          aria-label="Save more. Earn more."
          className="flex flex-col items-center gap-y-0 [font-family:var(--font-realx-hanson)] text-5xl font-black tracking-normal uppercase sm:text-6xl md:text-7xl [&>span]:leading-none"
        >
          <span className="text-(--realx-green)">Save</span>
          <span className="skew-x-[-8deg] text-black">More.</span>
          <span className="text-(--realx-green)">Earn</span>
          <span className="skew-x-[-8deg] text-black">More.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#4c4c4c] sm:text-xl">
          Discover student-exclusive deals, earn loyalty points, and unlock
          rewards on everyday purchases like food, transport, and more
        </p>

        <RealXDownloadPrompt className="mt-7" />

        <HeroPhonePreview />
      </div>
    </section>
  )
}
