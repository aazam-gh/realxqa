import { ArrowDownCircle } from 'lucide-react'

type RealXDownloadButtonProps = {
  href: string
  label: string
  variant?: 'header' | 'solid'
}

export function RealXDownloadButton({
  href,
  label,
  variant = 'solid',
}: RealXDownloadButtonProps) {
  const variantClass =
    variant === 'header'
      ? 'bg-[var(--realx-green)] px-3 py-2 text-sm text-white hover:bg-[var(--realx-green-strong)] sm:px-5 sm:text-lg'
      : 'bg-black px-4 py-3 text-base text-white hover:bg-neutral-900 sm:px-5 sm:text-xl'

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full font-medium transition ${variantClass}`}
    >
      <img
        src="/images/brand/app-icon.png"
        alt=""
        aria-hidden="true"
        className="size-9 rounded-xl sm:size-11"
        width="48"
        height="48"
      />
      <span>{label}</span>
      <ArrowDownCircle className="size-5 shrink-0 sm:size-6" strokeWidth={2.25} />
    </a>
  )
}
