import { createFileRoute } from '@tanstack/react-router'

import { SupportPage } from '@/pages/SupportPage'

export const Route = createFileRoute('/support')({
  component: SupportRoute,
})

function SupportRoute() {
  return <SupportPage />
}
