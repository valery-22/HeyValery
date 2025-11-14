import type { Metadata } from "next"
import { AboutSection } from "valery/components/about-section"
import { EducationSection } from "valery/components/education-section"
import { ImpactSection } from "valery/components/impact-section"
import { PageLayout } from "valery/components/page-layout"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Valery Hoyos Arrieta - Software Engineer specializing in full-stack development, clean architecture, and scalable systems. Background in TypeScript, Python, React, Next.js, and intelligent automation. Open to relocation and visa sponsorship worldwide.",
  openGraph: {
    title: "About Valery Hoyos Arrieta",
    description: "Software Engineer with expertise in building scalable web applications and intelligent systems",
    url: "https://valeryhoyos.com/about",
  },
  alternates: {
    canonical: "https://valeryhoyos.com/about",
  },
}

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutSection />
      <ImpactSection />
      <EducationSection />
    </PageLayout>
  )
}
