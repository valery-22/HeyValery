import type { Metadata } from "next"
import { WorkSection } from "valery/components/work-section"
import { PageLayout } from "valery/components/page-layout"

export const metadata: Metadata = {
  title: "Freelance Work | Valery Hoyos Arrieta - AI & Software Engineer",
  description:
    "Real freelance projects by Valery Hoyos Arrieta showcasing AI engineering and full-stack development expertise. AI chatbots, analytics platforms, SaaS systems, and ML solutions.",
  keywords: [
    "freelance work",
    "AI projects",
    "full-stack development",
    "machine learning projects",
    "client work",
    "software engineer portfolio",
    "AI engineer portfolio",
  ],
  openGraph: {
    title: "Freelance Work | Valery Hoyos Arrieta",
    description: "Real client projects showcasing AI and full-stack engineering expertise",
    url: "https://valeryhoyos.com/work",
    type: "website",
    images: [
      {
        url: "https://valeryhoyos.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valery Hoyos Arrieta - Freelance Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Work | Valery Hoyos Arrieta",
    description: "Real client projects showcasing AI and full-stack engineering expertise",
    images: ["https://valeryhoyos.com/og-image.jpg"],
  },
}

export default function WorkPage() {
  return (
    <PageLayout>
      <WorkSection />
    </PageLayout>
  )
}
