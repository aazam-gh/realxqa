import { RealXDownloadPrompt } from '@/components/ui/RealXDownloadPrompt'
import { RealXPhoneTrio } from '@/components/ui/RealXPhoneTrio'

function HeroPhoneShowcase() {
  return (
    <div className="flex w-full flex-col items-center min-[760px]:w-fit min-[760px]:self-start min-[760px]:justify-self-end">
      <RealXPhoneTrio fetchPriority="high" loading="eager" />
      <RealXDownloadPrompt
        className="mt-4 origin-center min-[760px]:hidden"
        label="Download realX"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden rounded-t-2xl bg-white px-4 pt-10 text-center sm:rounded-t-3xl sm:px-8 min-[760px]:pt-6 min-[760px]:text-left min-[1100px]:pt-8 lg:px-16 xl:pt-10"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-0 pb-10 sm:pb-12 min-[760px]:grid-cols-[minmax(0,1fr)_minmax(340px,380px)] min-[760px]:items-start min-[760px]:gap-6 min-[760px]:pb-8 min-[1100px]:grid-cols-[minmax(0,1fr)_minmax(520px,1fr)] min-[1100px]:gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(560px,0.9fr)] xl:gap-12">
        <div className="flex w-full flex-col items-center text-center min-[760px]:items-start min-[760px]:text-left">
          <h1
            aria-label="Save more. Earn more."
            className="flex flex-col items-center gap-y-0.5 text-[56px] font-black tracking-[-0.02em] uppercase leading-[0.9] sm:text-[64px] min-[760px]:items-start min-[1100px]:text-[70px] xl:text-[76px]"
          >
            <span className="contents">
              <span className="block [font-family:var(--font-realx-hanson)] leading-none text-(--realx-green)">
                Save
              </span>
              <span className="relative flex w-fit items-baseline leading-none text-black">
                <span className="block skew-x-[-8deg] [font-family:var(--font-realx-hanson)] leading-none">
                  More
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-[-0.2em] bottom-[0.05em] [font-family:var(--font-realx-sans)] text-[1.18em] font-normal leading-none"
                >
                  .
                </span>
              </span>
            </span>
            <span className="contents">
              <span className="block [font-family:var(--font-realx-hanson)] leading-none text-(--realx-green)">
                Earn
              </span>
              <span className="relative flex w-fit items-baseline leading-none text-black">
                <span className="block skew-x-[-8deg] [font-family:var(--font-realx-hanson)] leading-none">
                  More
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-[-0.2em] bottom-[0.05em] [font-family:var(--font-realx-sans)] text-[1.18em] font-normal leading-none"
                >
                  .
                </span>
              </span>
            </span>
          </h1>

          <p className="my-7 hidden max-w-[390px] text-[21px] leading-[25px] tracking-[-0.01em] text-black/75 min-[1100px]:block min-[1100px]:text-left xl:max-w-[430px]">
            Discover student-exclusive deals, earn loyalty points, and unlock
            rewards on everyday purchases like food, transport, and more
          </p>
          <RealXDownloadPrompt
            className="mt-5 hidden min-[760px]:flex min-[760px]:items-start min-[1100px]:mt-1 xl:mt-2"
            label="Download realX"
          />
        </div>
        <HeroPhoneShowcase />
      </div>
    </section>
  )
}
