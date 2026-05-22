import { createFileRoute } from '@tanstack/react-router'

import { PlaceholderPage } from '@/components/layout/PlaceholderPage'

export const Route = createFileRoute('/internships')({
  component: InternshipsPage,
})

function InternshipsPage() {
  return <PlaceholderPage title="Internships" />
}
