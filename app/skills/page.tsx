import { SkillsSection } from "valery/components/skills-section"
import { PageLayout } from "valery/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and expertise of Valery Hoyos Arrieta: Full-Stack Development (TypeScript, Python, React, Next.js), Backend Engineering (FastAPI, Node.js, PostgreSQL), Cloud Architecture (AWS), Machine Learning, System Design, and Clean Architecture.",
  openGraph: {
    title: "Technical Skills - Valery Hoyos Arrieta",
    description: "Full-Stack Development, Backend Engineering, Cloud Architecture, and Machine Learning expertise",
    url: "https://valeryhoyos.com/skills",
  },
  alternates: {
    canonical: "https://valeryhoyos.com/skills",
  },
}

export default function SkillsPage() {
  return (
    <PageLayout>
      <SkillsSection />
    </PageLayout>
  )
}
