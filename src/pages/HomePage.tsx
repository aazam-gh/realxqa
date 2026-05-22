import { Layout } from '@/components/layout/Layout'
import { FinalDownloadCta } from '@/components/sections/FinalDownloadCta'
import { GettingStartedSteps } from '@/components/sections/GettingStartedSteps'
import { Hero } from '@/components/sections/Hero'
import { HomeFaq } from '@/components/sections/HomeFaq'
import { SavingsFeatures } from '@/components/sections/SavingsFeatures'
import { StudentJourney } from '@/components/sections/StudentJourney'
import { StudentPartners } from '@/components/sections/StudentPartners'

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <StudentPartners />
      <SavingsFeatures />
      <StudentJourney />
      <GettingStartedSteps />
      <HomeFaq />
      <FinalDownloadCta />
    </Layout>
  )
}
