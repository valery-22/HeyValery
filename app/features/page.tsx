import { FeaturesSection } from "valery/components/features-section"
import { PageLayout } from "valery/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features",
  description:
    "Discover the key capabilities and expertise of Valery Hoyos: AI integration, full-stack development, scalable architecture, and intelligent automation.",
  openGraph: {
    title: "Features & Capabilities",
    description: "AI integration, full-stack development, and scalable architecture expertise",
    url: "https://valeryhoyos.com/features",
  },
}

export default function FeaturesPage() {
  return (
    <PageLayout>
      <FeaturesSection />
    </PageLayout>
  )
}
