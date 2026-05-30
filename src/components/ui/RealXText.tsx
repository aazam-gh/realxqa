type RealXTextProps = {
  text: string
  xClassName?: string
}

export function RealXText({ text, xClassName }: RealXTextProps) {
  const parts = text.split('realX')

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 && (
            <>
              real
              <span
                className={`text-(--realx-green)${xClassName ? ` ${xClassName}` : ''}`}
              >
                X
              </span>
            </>
          )}
          {part}
        </span>
      ))}
    </>
  )
}
