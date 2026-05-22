import { siteConfig } from '@/content/site'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { RealXDownloadButton } from '@/components/ui/RealXDownloadButton'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black px-5 py-5 text-white sm:px-7 sm:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href={siteConfig.homeHref} aria-label="realX home">
          <BrandLogo className="h-auto w-32 sm:w-44" />
        </a>

        <RealXDownloadButton
          href={siteConfig.appHref}
          label={siteConfig.headerCta}
          variant="header"
        />
      </div>
    </header>
  )
}
