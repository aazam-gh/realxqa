import { ArrowDownCircle } from 'lucide-react'

import { RealXText } from '@/components/ui/RealXText'
import { appStoreUrl, realXAppIcon } from '@/content/siteConfig'

type RealXDownloadButtonProps = {
  href?: string
  label: string
  variant?: 'header' | 'solid'
}

export function RealXDownloadButton({
  href = appStoreUrl,
  label,
  variant = 'solid',
}: RealXDownloadButtonProps) {
  const variantClass =
    variant === 'header'
      ? 'h-[42px] w-[178px] bg-[var(--realx-green)] px-2 text-[17px] text-white shadow-[0_10px_24px_-16px_rgba(24,184,82,0.8)] hover:bg-[#22c866]'
      : 'h-[43px] w-[212px] bg-black px-2 text-[17px] text-white shadow-[0_12px_28px_-18px_rgba(0,0,0,0.75)] hover:bg-[var(--realx-green)]'

  const className = `inline-grid grid-cols-[27px_1fr_20px] items-center gap-1.5 overflow-hidden rounded-xl font-normal leading-none whitespace-nowrap transition-colors duration-150 ease-out ${variantClass}`
  const solidHoverClass = variant === 'solid' ? ' group/realx-black-button' : ''
  const xHoverClass =
    variant === 'solid'
      ? 'transition-colors duration-150 ease-out group-hover/realx-black-button:text-black'
      : undefined
  const content = (
    <>
      <img
        src={realXAppIcon.src}
        srcSet={realXAppIcon.srcSet}
        sizes="27px"
        alt=""
        aria-hidden="true"
        className="size-[27px] rounded-lg"
        width={realXAppIcon.width}
        height={realXAppIcon.height}
      />
      <span className="min-w-0 text-center">
        <RealXText text={label} xClassName={xHoverClass} />
      </span>
      <ArrowDownCircle className="size-5 shrink-0" strokeWidth={1.5} />
    </>
  )

  return (
    <a
      className={`${className}${solidHoverClass}`}
      href={href}
      rel="noopener noreferrer"
    >
      {content}
    </a>
  )
}
