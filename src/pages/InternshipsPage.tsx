import { Layout } from '@/components/layout/Layout'
import { InternshipRoles } from '@/components/sections/InternshipRoles'
import { InternshipsHero } from '@/components/sections/InternshipsHero'
import { InternshipsStory } from '@/components/sections/InternshipsStory'

export function InternshipsPage() {
  return (
    <Layout>
      <InternshipsHero />
      <InternshipsStory />
      <InternshipRoles />
    </Layout>
  )
}
