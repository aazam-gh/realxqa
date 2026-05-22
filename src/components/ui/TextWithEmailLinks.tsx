import type { ReactNode } from 'react'

const emailPartPattern = /^[^\s@]+@[^\s@]+\.[^\s@.,:)]+$/
const emailSplitPattern = /([^\s@]+@[^\s@]+\.[^\s@.,:)]+)/g

type TextWithEmailLinksProps = {
  text: string
}

export function TextWithEmailLinks({
  text,
}: TextWithEmailLinksProps): ReactNode {
  return text.split(emailSplitPattern).map((part, index) =>
    emailPartPattern.test(part) ? (
      <a
        className="font-semibold text-black underline underline-offset-4 transition hover:text-[var(--realx-green)]"
        href={`mailto:${part}`}
        key={`${part}-${index}`}
      >
        {part}
      </a>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  )
}
