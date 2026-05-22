import { Link } from '@tanstack/react-router'

import { siteConfig } from '@/content/siteConfig'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { RealXText } from '@/components/ui/RealXText'

export function Footer() {
  return (
    <footer className="bg-black px-5 py-5 text-white sm:px-8 lg:px-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <BrandLogo className="h-auto w-20.5 sm:w-21.75" />
          <h2 className="text-sm font-normal text-white">
            {siteConfig.footerHeadline}
          </h2>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/75">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.to}>
                <Link className="transition hover:text-white" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-8 text-center text-[11px] text-white/60">
        <RealXText text={siteConfig.copyright} />
      </p>
    </footer>
  )
}
