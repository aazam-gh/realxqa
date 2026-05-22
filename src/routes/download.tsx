import { createFileRoute } from '@tanstack/react-router'

import { PlaceholderPage } from '@/components/layout/PlaceholderPage'

export const Route = createFileRoute('/download')({
  component: DownloadPage,
})

function DownloadPage() {
  return <PlaceholderPage title="Download realX" />
}
