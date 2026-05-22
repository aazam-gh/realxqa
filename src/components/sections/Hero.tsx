import { RealXDownloadButton } from '@/components/ui/RealXDownloadButton'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden rounded-t-2xl bg-white px-5 pt-12 text-center sm:rounded-t-3xl sm:px-8 sm:pt-16 lg:pt-24"
    >
      <div className="mx-auto flex max-w-156 flex-col items-center pb-8 sm:pb-10">
        <p className="mb-7 text-[10px] font-bold uppercase text-(--realx-muted) sm:text-xs">
          Only for students
        </p>

        <h1
          aria-label="Save more. Earn more."
          className="flex flex-col items-center gap-y-0.5 text-[44px] font-black uppercase leading-none tracking-normal sm:gap-y-1 sm:text-5xl md:gap-y-1.5 md:text-6xl lg:gap-y-0.5 lg:text-5xl"
        >
          <span className="contents lg:flex lg:items-baseline lg:justify-center lg:gap-x-3">
            <span className="block [font-family:var(--font-realx-hanson)] leading-none text-(--realx-green)">
              Save
            </span>
            <span className="relative flex w-fit items-baseline leading-none text-black lg:inline-flex">
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
          <span className="contents lg:flex lg:items-baseline lg:justify-center lg:gap-x-3">
            <span className="block [font-family:var(--font-realx-hanson)] leading-none text-(--realx-green)">
              Earn
            </span>
            <span className="relative flex w-fit items-baseline leading-none text-black lg:inline-flex">
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

        <p className="my-7 max-w-90 text-sm leading-snug text-[#4c4c4c] sm:text-base">
          Discover student-exclusive deals, earn loyalty points, and unlock
          rewards on everyday purchases like food, transport, and more
        </p>

        <RealXDownloadButton label="Download realX" />
      </div>
    </section>
  )
}
