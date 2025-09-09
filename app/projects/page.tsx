import Link from 'next/link'
import { getProjects } from './utils'

export const metadata = {
  title: 'Projects',
  description: 'Launched products and case studies.',
}

export default function Page() {
  const projects = getProjects()

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <ul className="space-y-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link className="hover:underline" href={`/projects/${p.slug}`}>
              {p.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

