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

// Mobile widths follow the phones' rendered aspect ratios so the trio scales inside the padded hero column.
const phoneScreenClassNames = [
  'relative z-10 h-auto w-[30.5%] shrink-0 object-contain object-top min-[1100px]:h-[86%] min-[1100px]:w-auto',
  'relative z-30 h-auto w-[38.5%] shrink-0 object-contain object-top min-[1100px]:h-full min-[1100px]:w-auto',
  'relative z-10 h-auto w-[29%] shrink-0 object-contain object-top min-[1100px]:h-[86%] min-[1100px]:w-auto',
] as const

export function RealXPhoneTrio({
  className = '',
  fetchPriority = 'auto',
  loading = 'lazy',
}: RealXPhoneTrioProps) {
  return (
    <div
      className={`flex aspect-[5/4] w-full max-w-[400px] min-w-0 items-start justify-center gap-x-0.5 overflow-visible min-[760px]:gap-x-1 min-[1100px]:h-[450px] min-[1100px]:max-w-none min-[1100px]:w-[615px] min-[1100px]:gap-x-8 xl:h-[560px] xl:w-[766px] xl:gap-x-10 ${className}`}
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
          className={phoneScreenClassNames[index]}
        />
      ))}
    </div>
  )
}
