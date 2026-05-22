type RealXTextProps = {
  text: string
}

export function RealXText({ text }: RealXTextProps) {
  const parts = text.split('realX')

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {index > 0 && (
            <>
              real<span className="text-(--realx-green)">X</span>
            </>
          )}
          {part}
        </span>
      ))}
    </>
  )
}
