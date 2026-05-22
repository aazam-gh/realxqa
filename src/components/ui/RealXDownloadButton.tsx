import { Link } from '@tanstack/react-router'
import { ArrowDownCircle } from 'lucide-react'

import { RealXText } from '@/components/ui/RealXText'
import { realXAppIcon } from '@/content/siteConfig'

type RealXDownloadButtonProps = {
  label: string
  variant?: 'header' | 'solid'
} & (
  | {
      href: string
      to?: never
    }
  | {
      href?: never
      to?: '/download'
    }
)

export function RealXDownloadButton({
  href,
  to,
  label,
  variant = 'solid',
}: RealXDownloadButtonProps) {
  const variantClass =
    variant === 'header'
      ? 'min-w-[169px] bg-[var(--realx-green)] px-4 py-2 text-xs text-white hover:bg-[var(--realx-green-strong)] sm:min-w-[180px]'
      : 'min-w-[130px] bg-black px-3 py-2 text-[11px] text-white hover:bg-neutral-900 sm:min-w-[210px] sm:px-4 sm:text-xs'

  const className = `inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition ${variantClass}`
  const content = (
    <>
      <img
        src={realXAppIcon.src}
        srcSet={realXAppIcon.srcSet}
        sizes="28px"
        alt=""
        aria-hidden="true"
        className="size-7 rounded-lg"
        width={realXAppIcon.width}
        height={realXAppIcon.height}
      />
      <span>
        <RealXText text={label} />
      </span>
      <ArrowDownCircle className="size-4 shrink-0" strokeWidth={2.25} />
    </>
  )

  if (href !== undefined) {
    return (
      <a className={className} href={href} rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Link to={to ?? '/download'} className={className}>
      {content}
    </Link>
  )
}
