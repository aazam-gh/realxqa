type PhoneScreen = {
  alt: string
  height: number
  src: string
  width: number
}

type RealXPhoneTrioProps = {
  className?: string
  fetchPriority?: 'auto' | 'high' | 'low'
  loading?: 'eager' | 'lazy'
}

export const realXPhoneScreens = {
  xcard: {
    src: '/images/hero/hero-phone-xcard.png',
    alt: 'realX XCard wallet screen on an angled iPhone',
    width: 624,
    height: 1481,
  },
  home: {
    src: '/images/hero/hero-phone-home.png',
    alt: 'realX app home screen on an iPhone',
    width: 706,
    height: 1466,
  },
  food: {
    src: '/images/hero/hero-phone-food.png',
    alt: 'realX food deals screen on an angled iPhone',
    width: 677,
    height: 1528,
  },
} as const satisfies Record<string, PhoneScreen>

const phoneTrio = [
  realXPhoneScreens.food,
  realXPhoneScreens.home,
  realXPhoneScreens.xcard,
] as const

export function RealXPhoneTrio({
  className = '',
  fetchPriority = 'auto',
  loading = 'lazy',
}: RealXPhoneTrioProps) {
  return (
    <div
      className={`flex h-[79vw] max-h-[320px] w-[min(400px,100vw)] items-start justify-center gap-x-1 overflow-visible min-[1100px]:h-[450px] min-[1100px]:max-h-none min-[1100px]:w-[615px] min-[1100px]:max-w-none min-[1100px]:gap-x-8 xl:h-[560px] xl:w-[766px] xl:gap-x-10 ${className}`}
    >
      {phoneTrio.map((screen, index) => (
        <img
          key={screen.src}
          src={screen.src}
          alt={screen.alt}
          width={screen.width}
          height={screen.height}
          loading={loading}
          fetchPriority={fetchPriority}
          className={
            index === 1
              ? 'relative z-30 h-full w-auto shrink-0 object-contain object-top'
              : 'relative z-10 h-[86%] w-auto shrink-0 object-contain object-top'
          }
        />
      ))}
    </div>
  )
}
