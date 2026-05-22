import { createFileRoute } from '@tanstack/react-router'

import { PlaceholderPage } from '@/components/layout/PlaceholderPage'

export const Route = createFileRoute('/support')({
  component: SupportPage,
})

function SupportPage() {
  return <PlaceholderPage title="Support" />
}
