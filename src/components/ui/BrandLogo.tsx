type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <img
      src="/images/brand/realx-wordmark.png"
      alt="realX"
      className={className}
      width="238"
      height="84"
    />
  )
}
