import { Layout } from '@/components/layout/Layout'
import { FinalDownloadCta } from '@/components/sections/FinalDownloadCta'
import { GettingStartedSteps } from '@/components/sections/GettingStartedSteps'
import { SavingsFeatures } from '@/components/sections/SavingsFeatures'
import { StudentPartners } from '@/components/sections/StudentPartners'
import { downloadPageContent } from '@/content/download'
import { appStoreUrl } from '@/content/siteConfig'

export function DownloadPage() {
  return (
    <Layout>
      <h1 className="sr-only">{downloadPageContent.title}</h1>
      <FinalDownloadCta actionHref={appStoreUrl} actionLabel="Open App Store" />
      <StudentPartners />
      <GettingStartedSteps />
      <SavingsFeatures />
    </Layout>
  )
}
