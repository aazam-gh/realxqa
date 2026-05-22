import { createFileRoute } from '@tanstack/react-router'

import { privacyPolicyContent } from '@/content/legal'
import { LegalPage } from '@/pages/LegalPage'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyRoute,
})

function PrivacyPolicyRoute() {
  return <LegalPage content={privacyPolicyContent} />
}
