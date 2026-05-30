import { Mail } from 'lucide-react'

import { supportEmail } from '@/content/siteConfig'
import { supportPageContent } from '@/content/support'

export function SupportContact() {
  return (
    <section className="bg-white px-5 py-16 sm:px-7">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-black p-8 text-white sm:p-12">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {supportPageContent.contact.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
          {supportPageContent.contact.body}
        </p>
        <a
          href={`mailto:${supportEmail}?subject=${encodeURIComponent(supportPageContent.contact.subject)}`}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 font-semibold text-black transition-colors duration-150 ease-out hover:bg-[#1cb0f6] hover:text-white"
        >
          <Mail className="size-5" strokeWidth={2.25} />
          {supportEmail}
        </a>
      </div>
    </section>
  )
}
