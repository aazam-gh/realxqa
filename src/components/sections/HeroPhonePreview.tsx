type HeroPhonePreviewProps = {
  className?: string
  fetchPriority?: 'auto' | 'high' | 'low'
  loading?: 'eager' | 'lazy'
}

export function HeroPhonePreview({
  className = 'mt-12 w-[min(78vw,417px)] sm:mt-16',
  fetchPriority = 'high',
  loading = 'eager',
}: HeroPhonePreviewProps) {
  return (
    <img
      src="/images/hero/hero-phone.png"
      alt="realX app home screen on an iPhone"
      width="1920"
      height="1440"
      loading={loading}
      fetchPriority={fetchPriority}
      className={className}
    />
  )
}
