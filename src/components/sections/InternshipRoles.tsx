import { ArrowUpRight } from 'lucide-react'

import { internshipsPageContent } from '@/content/internships'
import { supportEmail } from '@/content/siteConfig'

type InternshipRole = (typeof internshipsPageContent.roles)[number]

export function InternshipRoles() {
  return (
    <section className="bg-[#f7f7f5] px-5 py-16 sm:px-7 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[var(--realx-green-strong)]">
            Join Us
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-6xl">
            {internshipsPageContent.joinTitle}
          </h2>
          <p className="mt-8 text-sm font-semibold uppercase text-[var(--realx-green-strong)]">
            {internshipsPageContent.rolesTitle}
          </p>
          <p className="mt-4 text-lg text-[#4c4c4c]">
            {internshipsPageContent.rolesIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {internshipsPageContent.roles.map((role) => (
            <InternshipRoleCard role={role} key={role.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

function InternshipRoleCard({ role }: { role: InternshipRole }) {
  return (
    <article className="rounded-3xl bg-white p-7">
      <p className="text-sm font-semibold uppercase text-[var(--realx-green-strong)]">
        {role.team}
      </p>
      <h3 className="mt-5 text-3xl font-semibold tracking-tight text-black">
        {role.title}
      </h3>
      <p className="mt-3 text-[#4c4c4c]">{role.location}</p>
      <a
        href={`mailto:${supportEmail}?subject=${encodeURIComponent(role.subject)}`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:bg-neutral-900"
      >
        Apply Now
        <ArrowUpRight className="size-5" strokeWidth={2.25} />
      </a>
    </article>
  )
}
