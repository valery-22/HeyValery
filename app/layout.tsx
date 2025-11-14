import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "valery/components/theme-provider"
import { Suspense } from "react"
import { LoadingScreen } from "valery/components/loading-screen"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://valeryhoyos.com"),
  title: {
    default: "Valery Hoyos Arrieta | Software Engineer",
    template: "Software Engineer | Valery Hoyos Arrieta",
  },
  description:
    "Valery Hoyos Arrieta - Software Engineer specializing in production-grade AI systems, RAG pipelines, semantic search, and intelligent automation. Expert in Python, TypeScript, React, Next.js, FastAPI, PyTorch, and LangChain. Available for freelance projects and full-time opportunities worldwide with visa sponsorship.",
  keywords: [
    "Valery Hoyos",
    "Valery H",
    "Valery software Engineer",
    "Valery Hoyos Arrieta",
    "AI Engineer",
    "Software Developer",
    "Machine Learning Engineer",
    "Full-Stack AI Developer",
    "RAG Systems Expert",
    "Semantic Search Developer",
    "Document Intelligence",
    "AI Automation",
    "Vector Databases",
    "LangChain Developer",
    "PyTorch Engineer",
    "Python AI Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Expert",
    "FastAPI Developer",
    "Computer Vision Engineer",
    "NLP Specialist",
    "Remote AI Engineer",
    "Freelance AI Developer",
    "Visa Sponsorship",
    "POC Development",
    "MVP Development",
    "Production AI Systems",
    "Real-time Intelligence",
    "AI Search Systems",
  ],
  authors: [{ name: "Valery Hoyos Arrieta", url: "https://valeryhoyos.com" }],
  creator: "Valery Hoyos Arrieta",
  publisher: "Valery Hoyos Arrieta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valeryhoyos.com",
    title: "Valery Hoyos Arrieta | Software Developer & AI Engineer ",
    description:
      "Expert AI Engineer building production-grade systems for search, automation, and real-time intelligence. Specialized in RAG, semantic search, and full-stack AI applications. Available worldwide with visa sponsorship.",
    siteName: "Valery Hoyos Arrieta - Software Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valery Hoyos Arrieta - Software Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valery Hoyos Arrieta | Software Developer & AI Engineer",
    description:
      "Building production-grade AI systems for search, automation, and intelligence. RAG expert. Available worldwide.",
    creator: "@valeryhoyos",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://valeryhoyos.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Favicon links for full browser + PWA support */}
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://valeryhoyos.com" />

        {/* ✅ JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Valery Hoyos Arrieta",
              alternateName: "Valery Hoyos",
              url: "https://valeryhoyos.com",
              image: "https://valeryhoyos.com/profile-photo.jpg",
              jobTitle: "Software Engineer / AI Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Independent",
              },
              description:
                "Software Engineeer with expertise in building production-grade AI systems, RAG pipelines, semantic search, and intelligent automation. Proficient in Python, PyTorch, LangChain, TypeScript, React, Next.js, and FastAPI. Available for freelance projects and full-time opportunities worldwide with visa sponsorship.",
              sameAs: [
                "https://github.com/valery-22",
                "https://www.linkedin.com/in/valery-hoyos-software/",
                "https://x.com/ValeryH28187",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "RAG Systems",
                "Document Intelligence",
                "Vector Databases",
                "LangChain",
                "PyTorch",
                "Computer Vision",
                "NLP",
                "Semantic Search",
                "Software Engineering",
                "Full-Stack Development",
                "Python",
                "TypeScript",
                "React",
                "Next.js",
                "FastAPI",
                "PostgreSQL",
                "AWS",
                "Docker",
                "System Design",
                "Clean Architecture",
                "Automation Systems",
                "POC Development",
                "MVP Development",
                "Production AI Systems",
                "Real-time Intelligence",
                "AI Search Systems",
              ],
              knowsLanguage: ["English", "Spanish"],
              seeks: {
                "@type": "JobPosting",
                title: "Software Developer / AI Engineer",
                description:
                  "Open to freelance projects, contract work, and full-time opportunities. Available for relocation and visa sponsorship worldwide. Specializing in AI systems, RAG pipelines, and full-stack development.",
              },
              offers: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Engineering & Software Development Services",
                  description:
                    "Custom AI systems, RAG implementation, semantic search, document intelligence, automation pipelines, full-stack AI web applications, POC/MVP development",
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <LoadingScreen />
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
