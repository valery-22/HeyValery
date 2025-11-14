
import type { Metadata } from "next"
import { PageLayout } from "valery/components/page-layout"
import { ProjectsSection } from "valery/components/projects-section"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Valery Hoyos Arrieta's portfolio of scalable web applications, automation tools, and intelligent systems. Real-world software engineering projects with measurable impact using TypeScript, Python, React, Next.js, and FastAPI.",
  openGraph: {
    title: "Projects by Valery Hoyos Arrieta",
    description: "Scalable web applications, automation tools, and intelligent systems built with modern technologies",
    url: "https://valeryhoyos.com/projects",
  },
  alternates: {
    canonical: "https://valeryhoyos.com/projects",
  },
}

export default function ProjectsPage() {
  return (
    <PageLayout>
      <ProjectsSection />
    </PageLayout>
  )
}
