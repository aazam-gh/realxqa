import { Layout } from '@/components/layout/Layout'

type PlaceholderPageProps = {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <Layout>
      <section className="min-h-[70vh] bg-white px-5 py-16 sm:px-7">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-5xl">
            {title}
          </h1>
        </div>
      </section>
    </Layout>
  )
}
