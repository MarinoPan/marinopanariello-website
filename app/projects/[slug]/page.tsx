import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getProjects, ProjectMetadata } from 'app/projects/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const project = getProjects().find((p) => p.slug === params.slug)
  if (!project) return

  const { title, summary, image } = project.metadata as ProjectMetadata
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        { url: ogImage },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: [ogImage],
    },
  }
}

export default function ProjectPage({ params }) {
  const project = getProjects().find((p) => p.slug === params.slug)
  if (!project) notFound()

  const { title, role, stack, year } = project.metadata as ProjectMetadata

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">{title}</h1>
      <div className="mt-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400 flex gap-4 flex-wrap">
        {year && <span>Year: {year}</span>}
        {role && <span>Role: {role}</span>}
        {stack && <span>Stack: {stack}</span>}
      </div>
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
  )
}

