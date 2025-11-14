"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardHeader, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Logo } from "./logo"
import { ExternalLink, Play, X, Sparkles } from "lucide-react"

import Image from "next/image"

const freelanceProjects = [
  {
    id: 1,
    title: "AI-Powered Customer Support Chatbot",
    client: "E-commerce SaaS",
    description:
      "Built intelligent chatbot with RAG (Retrieval-Augmented Generation) that answers customer questions using company knowledge base. Reduced support tickets by 65%.",
    tech: ["Python", "LangChain", "OpenAI", "FAISS", "React", "FastAPI"],
    results: ["65% reduction in support tickets", "4.8/5 customer satisfaction", "Sub-1s response time"],
    service: "Available: Custom AI chatbots, RAG systems, Customer support automation",
    image: "/freelance-ai-chatbot.jpg",
    category: "AI",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Real-Time Analytics Dashboard",
    client: "Fintech Startup",
    description:
      "Developed comprehensive analytics platform with real-time data visualization, custom metrics, and automated reporting. Processes 1M+ events/day.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "D3.js", "AWS"],
    results: ["1M+ events processed daily", "Real-time data updates", "Custom KPI tracking"],
    service: "Available: Analytics dashboards, Data visualization, Real-time systems",
    image: "/freelance-analytics-dashboard.jpg",
    category: "Full-Stack",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Automated Content Generation System",
    client: "Marketing Agency",
    description:
      "Created AI system that generates SEO-optimized content, social media posts, and ad copy. Reduced content creation time from 4 hours to 15 minutes per piece.",
    tech: ["Python", "OpenAI GPT-4", "LangChain", "React", "PostgreSQL"],
    results: ["16x faster content creation", "95% client approval rate", "SEO score improvement by 40%"],
    service: "Available: AI content generation, SEO automation, Marketing tools",
    image: "/freelance-content-generation.jpg",
    category: "AI",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Multi-Tenant SaaS Platform",
    client: "Healthcare Tech",
    description:
      "Built secure multi-tenant platform for healthcare providers with HIPAA compliance, patient management, and billing. Serves 50+ clinics.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe", "TailwindCSS"],
    results: ["50+ active clinics", "HIPAA compliant", "99.9% uptime", "Automated billing system"],
    service: "Available: SaaS platforms, Multi-tenant architecture, Healthcare software",
    image: "/freelance-saas-platform.jpg",
    category: "Full-Stack",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Computer Vision Defect Detection",
    client: "Manufacturing Company",
    description:
      "Developed ML system for automated quality control using computer vision. Detects product defects with 97% accuracy, replacing manual inspection.",
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "Docker"],
    results: ["97% defect detection accuracy", "80% faster than manual inspection", "Real-time processing"],
    service: "Available: Computer vision systems, Quality control automation, ML deployment",
    image: "/freelance-computer-vision.jpg",
    category: "AI",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Inventory Management System",
    client: "Retail Chain",
    description:
      "Created comprehensive inventory system with predictive restocking, real-time tracking, and automated ordering. Reduced stockouts by 85%.",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "XGBoost", "Docker"],
    results: ["85% reduction in stockouts", "Automated reordering", "ML-powered demand forecasting"],
    service: "Available: Inventory systems, Predictive analytics, E-commerce solutions",
    image: "/freelance-inventory-system.jpg",
    category: "Full-Stack",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

const categories = ["All", "AI", "Full-Stack"]

export function WorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? freelanceProjects : freelanceProjects.filter((p) => p.category === selectedCategory)

  return (
    <section id="work" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-center">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Freelance Work
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty text-center">
            Real client projects — similar services available for your business
          </p>

          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${
                    selectedCategory === category
                      ? "bg-primary shadow-lg shadow-primary/25"
                      : "hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group border-2 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          size="sm"
                          className="gap-2 bg-primary hover:bg-primary/90 shadow-lg"
                          onClick={() => setSelectedVideo(project.video)}
                        >
                          <Play className="h-4 w-4" />
                          Watch Demo
                        </Button>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-black/80 text-white border-white/20 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs mb-2">
                        {project.client}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-balance group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                    <div className="space-y-2 mb-4">
                      <p className="text-xs font-semibold text-foreground">Key Results:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mb-4 p-2.5 bg-primary/5 border border-primary/20 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-foreground font-medium leading-snug">{project.service}</p>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-full gap-2 hover:bg-accent/10 hover:text-accent"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View Demo
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-white hover:bg-white/10 rounded-full w-12 h-12"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10"
            >
              <Logo size="md" />
              <span className="text-white font-semibold text-lg">Client Project Demo</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={selectedVideo}
                  title="Project Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
