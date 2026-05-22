import { Link } from '@tanstack/react-router'

import { siteConfig } from '@/content/siteConfig'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { RealXDownloadButton } from '@/components/ui/RealXDownloadButton'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black px-4 py-4 text-white lg:px-20">
      <div className="flex items-center justify-between gap-4">
        <Link to={siteConfig.homeTo} aria-label="realX home">
          <BrandLogo className="h-auto w-26.75" />
        </Link>

        <RealXDownloadButton
          href={siteConfig.downloadHref}
          label={siteConfig.headerCta}
          variant="header"
        />
      </div>
    </header>
  )
}
