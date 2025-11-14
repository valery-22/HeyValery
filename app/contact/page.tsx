import { ContactSection } from "valery/components/contact-section"
import { PageLayout } from "valery/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Valery Hoyos Arrieta for software engineering opportunities, full-stack development projects, or collaboration on scalable web applications. Open to relocation and visa sponsorship opportunities worldwide.",
  openGraph: {
    title: "Contact Valery Hoyos Arrieta",
    description: "Get in touch for software engineering opportunities and collaboration. Open to worldwide relocation.",
    url: "https://valeryhoyos.com/contact",
  },
  alternates: {
    canonical: "https://valeryhoyos.com/contact",
  },
}

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactSection />
    </PageLayout>
  )
}
