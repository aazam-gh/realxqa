import { RealXDownloadButton } from '@/components/ui/RealXDownloadButton'

type RealXDownloadPromptProps = {
  className?: string
  caption?: string
  href?: string
  label?: string
}

export function RealXDownloadPrompt({
  caption = "Join Qatar's student community",
  className = '',
  href,
  label = 'Download realX',
}: RealXDownloadPromptProps) {
  return (
    <div className={`flex flex-col items-center gap-2.5 ${className}`}>
      <RealXDownloadButton href={href} label={label} />
      <p className="flex items-center gap-1.5 text-[11px] text-[#4c4c4c] sm:text-xs">
        <span
          aria-hidden="true"
          className="grid size-3.5 place-items-center rounded-full border border-current text-[8px] leading-none"
        >
          ↓
        </span>
        {caption}
      </p>
    </div>
  )
}
