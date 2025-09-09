import { SectionHeader } from 'app/components/SectionHeader'
import { SingleWork } from 'app/components/SingleWork'

const launchedSlugs = new Set(["fiabe-magiche", "f1livestats", "fabloo"]) // avoid duplication in Design Projects

const websites = [
  { name: 'studyaway.it', link: 'https://studyaway.it/' },
  { name: 'verteego.it', link: 'https://verteego.it/' },
  { name: 'bblux.co.uk', link: 'https://bblux.co.uk/' },
  { name: 'uconsulting.co.uk', link: 'https://uconsulting.co.uk/' },
  { name: 'attivazioneveloce.it', link: 'https://attivazioneveloce.it/' },
  { name: 'toniatramontano.com', link: 'https://toniatramontano.com/' },
  { name: 'sa-bo.it', link: 'https://sa-bo.it/' },
  { name: 'studiodentisticocarlomenzione.it', link: 'https://studiodentisticocarlomenzione.it/' },
  { name: 'autonoleggiosiva.it', link: 'https://autonoleggiosiva.it/' },
  { name: 'fabloo.it', link: 'https://fabloo.it/' },
  { name: 'lapupazzeria.it', link: 'https://lapupazzeria.it/' },
  { name: 'turrisunited.it', link: 'https://turrisunited.it/' },
]

export const metadata = {
  title: 'Works',
  description: 'All projects, case studies and websites I developed.',
}

export default function Page() {
  // Elenco completo dei lavori (Design + My Projects), nessun "websites developed" qui
  const works = [
    {
      project: 'Docsity', year: '2021', results: '+30% engagement, -20% bounce', roles: 'Product Design, Frontend',
      about: 'Redesign of the learning platform with improved IA, design system and modern frontend.',
      images: ['/images/projects/docsity-1-after.jpg','/images/projects/docsity-2-after.jpg','/images/projects/docsity-3-after.jpg']
    },
    {
      project: 'Coraly', year: '2022', results: 'Design System foundations', roles: 'Design Lead',
      about: 'Built a scalable DS covering components, theming and guidelines.',
      images: ['/images/projects/coraly-01.jpg','/images/projects/coraly-02.jpg','/images/projects/coraly-03.jpg']
    },
    {
      project: 'Rosmariano', year: '2020', results: 'Clearer structure and tone', roles: 'Design + Dev',
      about: 'Website redesign with clearer hierarchy and improved visuals.',
      images: ['/images/projects/rosmariano-01.jpg','/images/projects/rosmariano-02.jpg','/images/projects/rosmariano-03.jpg']
    },
    {
      project: 'Diagnostic Biochips', year: '2020', results: 'Product pages & visuals', roles: 'Design',
      about: 'UI and visual assets for product presentation.',
      images: ['/images/projects/logo-diagnosticbiochips.svg']
    },
    {
      project: 'VetrinaLive', year: '2020', results: '+25% conversion, -15% load time', roles: 'Product Design',
      about: 'E-commerce builder improvements with focus on onboarding and templates.',
      images: ['/images/projects/vetrinalive-01.jpg','/images/projects/vetrinalive-02.jpg','/images/projects/vetrinalive-03.jpg']
    },
    {
      project: 'F1 Live Stats', year: '2024', results: 'Live telemetry dashboard', roles: 'Product Design, Web',
      about: 'Real-time telemetry for Formula 1 sessions.',
      images: ['/images/projects/docsity-2-after.jpg']
    },
    {
      project: 'Fabloo', year: '2023', results: 'Agency management platform', roles: 'Product Design, Web',
      about: 'Bookings, teams and scheduling for animation agencies.',
      images: ['/images/projects/vetrinalive-01.jpg']
    },
    {
      project: 'Fiabe Magiche', year: '2025', results: 'AI‑powered stories', roles: 'Product Design, Mobile',
      about: 'Mobile app to generate bedtime stories with text, images and narration.',
      images: ['/images/projects/docsity-1-after.jpg']
    },
  ] as const

  return (
    <section className="prose h-full">
      <SectionHeader kicker="All" title="Works" subtitle="Design projects and my products" align="left" variant="underline" />
      <div className="mt-10 space-y-28">
        {works.map((w, idx) => (
          <SingleWork key={`${w.project}-${idx}`} {...w} />
        ))}
      </div>
    </section>
  )
}
