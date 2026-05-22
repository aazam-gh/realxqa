import { createFileRoute } from '@tanstack/react-router'

import { PlaceholderPage } from '@/components/layout/PlaceholderPage'

export const Route = createFileRoute('/terms-and-conditions')({
  component: TermsAndConditionsPage,
})

function TermsAndConditionsPage() {
  return <PlaceholderPage title="Terms and Conditions" />
}
