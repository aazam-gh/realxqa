import { createFileRoute } from '@tanstack/react-router'

import { PlaceholderPage } from '@/components/layout/PlaceholderPage'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
})

function PrivacyPolicyPage() {
  return <PlaceholderPage title="Privacy Policy" />
}
