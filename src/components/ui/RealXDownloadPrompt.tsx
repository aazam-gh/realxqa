import { RealXDownloadButton } from '@/components/ui/RealXDownloadButton'

type RealXDownloadPromptProps = {
  className?: string
}

export function RealXDownloadPrompt({ className = '' }: RealXDownloadPromptProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <RealXDownloadButton to="/download" label="Download realX" />
      <p className="flex items-center gap-3 text-base text-[#4c4c4c] sm:text-lg">
        <span
          aria-hidden="true"
          className="grid size-5 place-items-center rounded-full border border-current text-xs leading-none"
        >
          ↓
        </span>
        Join Qatar&apos;s student community
      </p>
    </div>
  )
}
