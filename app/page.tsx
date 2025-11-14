
import type { Metadata } from "next"
import { AchievementsSection } from "valery/components/achievements-section"
import { CTASection } from "valery/components/cta-section"
import { Footer } from "valery/components/footer"
import { GitHubStats } from "valery/components/github-stats"
import { HeroSection } from "valery/components/hero-section"
import { Navigation } from "valery/components/navigation"
import { PersonalTouch } from "valery/components/personal-touch"
import { TestimonialSection } from "valery/components/testimonial-section"
import { Toaster } from "valery/components/ui/sonner"

export const metadata: Metadata = {
  title: "Valery Hoyos Arrieta | AI & Full-Stack Software Engineer",
  description:
    "Award-winning Software Engineer specializing in AI/ML systems, RAG pipelines, and scalable web applications. 5-day POC delivery. Open to worldwide opportunities with visa sponsorship.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "RAG Systems",
    "Vector Databases",
    "Python Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Expert",
    "FastAPI",
    "LangChain",
    "PyTorch",
    "Document Intelligence",
    "Semantic Search",
    "Open to Relocation",
    "Visa Sponsorship",
    "Remote Work",
    "FAANG",
    "Hackathon Winner",
    "POC Development",
    "AI Automation",
    "Web Development",
    "Cloud Architecture",
  ],
  openGraph: {
    title: "Valery Hoyos Arrieta | Full-Stack & AI Software Engineer",
    description:
      "Award-winning engineer building AI-driven systems. 5-day POC delivery. Hackathon runner-up.  Open to worldwide opportunities.",
    url: "https://valeryhoyos.com",
    images: [
      {
        url: "https://valeryhoyos.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valery Hoyos Arrieta - Full-Stack & AI Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valery Hoyos Arrieta | Full-Stack & AI Software Engineer",
    description: "Award-winning engineer building AI-driven systems. 5-day POC delivery.",
    images: ["https://valeryhoyos.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://valeryhoyos.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <GitHubStats />
      <AchievementsSection />
      <PersonalTouch />
      <TestimonialSection />
      <CTASection />
      <Footer />
      <Toaster />
    </main>
  )
}
