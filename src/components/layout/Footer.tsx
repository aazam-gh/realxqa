import { Link } from '@tanstack/react-router'

import { siteConfig } from '@/content/site'

export function Footer() {
  return (
    <footer className="bg-black px-5 py-12 text-white sm:px-7">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
            {siteConfig.footerHeadline}
          </h2>
          <p className="mt-5 text-sm text-white/60">{siteConfig.copyright}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
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
    </footer>
  )
}
