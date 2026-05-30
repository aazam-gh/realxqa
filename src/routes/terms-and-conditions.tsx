import { createFileRoute } from '@tanstack/react-router'

import { termsContent } from '@/content/legal'
import { LegalPage } from '@/pages/LegalPage'

export const Route = createFileRoute('/terms-and-conditions')({
  component: TermsAndConditionsRoute,
})

function TermsAndConditionsRoute() {
  return <LegalPage content={termsContent} />
}
