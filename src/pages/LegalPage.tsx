import { Layout } from '@/components/layout/Layout'
import { LegalArticle } from '@/components/sections/LegalArticle'
import type { LegalContent } from '@/content/legal'

type LegalPageProps = {
  content: LegalContent
}

export function LegalPage({ content }: LegalPageProps) {
  return (
    <Layout>
      <LegalArticle content={content} />
    </Layout>
  )
}
