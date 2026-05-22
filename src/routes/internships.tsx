import { createFileRoute } from '@tanstack/react-router'

import { InternshipsPage } from '@/pages/InternshipsPage'

export const Route = createFileRoute('/internships')({
  component: InternshipsRoute,
})

function InternshipsRoute() {
  return <InternshipsPage />
}
