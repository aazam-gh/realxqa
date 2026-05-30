import { Layout } from '@/components/layout/Layout'
import { SupportContact } from '@/components/sections/SupportContact'
import { SupportFaqs } from '@/components/sections/SupportFaqs'
import { SupportHero } from '@/components/sections/SupportHero'

export function SupportPage() {
  return (
    <Layout>
      <SupportHero />
      <SupportFaqs />
      <SupportContact />
    </Layout>
  )
}
