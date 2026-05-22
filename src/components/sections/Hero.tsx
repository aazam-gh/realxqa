import { RealXDownloadButton } from '@/components/ui/RealXDownloadButton'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden rounded-t-2xl bg-white px-5 pt-12 text-center sm:rounded-t-3xl sm:px-8 sm:pt-16 lg:pt-24"
    >
      <div className="mx-auto flex max-w-156 flex-col items-center pb-8 sm:pb-10">
        <p className="mb-7 text-sm font-medium tracking-[-0.01em] text-black/50 uppercase min-[1200px]:text-base">
          Only for students
        </p>

        <h1
          aria-label="Save more. Earn more."
          className="flex flex-col items-center gap-y-0.5 text-[56px] font-black tracking-[-0.02em] uppercase leading-[0.9] min-[810px]:text-[63px]"
        >
          <span className="contents min-[810px]:flex min-[810px]:items-baseline min-[810px]:justify-center min-[810px]:gap-x-3">
            <span className="block [font-family:var(--font-realx-hanson)] leading-none text-(--realx-green)">
              Save
            </span>
            <span className="relative flex w-fit items-baseline leading-none text-black min-[810px]:inline-flex">
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
          <span className="contents min-[810px]:flex min-[810px]:items-baseline min-[810px]:justify-center min-[810px]:gap-x-3">
            <span className="block [font-family:var(--font-realx-hanson)] leading-none text-(--realx-green) min-[810px]:skew-x-[-8deg]">
              Earn
            </span>
            <span className="relative flex w-fit items-baseline leading-none text-black min-[810px]:inline-flex">
              <span className="block skew-x-[-8deg] [font-family:var(--font-realx-hanson)] leading-none min-[810px]:skew-x-0">
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

        <p className="my-7 max-w-[358px] text-[18px] leading-[23px] tracking-[-0.01em] text-black/75 min-[810px]:max-w-[400px] min-[810px]:text-[21px]">
          Discover student-exclusive deals, earn loyalty points, and unlock
          rewards on everyday purchases like food, transport, and more
        </p>

        <RealXDownloadButton label="Download realX" />
      </div>
    </section>
  )
}
