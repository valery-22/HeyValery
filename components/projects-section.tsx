"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { ExternalLink, Github, Play, X, Sparkles } from "lucide-react"
import { Logo } from "./logo"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Multi-Modal AI Document Intelligence — PyTorch, LangChain, Vector DB",
    description:
      "Advanced RAG system with multi-modal document processing (text, images, tables). Handles PDF, DOCX, and scanned documents with 94% accuracy.",
    problem: "Enterprise team needed to extract and query information from 50k+ mixed-format documents",
    approach:
      "Built end-to-end RAG pipeline using PyTorch for OCR, LangChain for orchestration, FAISS for vector search, and GPT-4 for intelligent retrieval",
    results: [
      "94% accuracy on complex document queries",
      "Processes 10k+ docs/day with sub-2s response time",
      "Handles PDFs, images, tables, and handwritten notes",
      "Reduced manual document review by 80%",
    ],
    role: "AI/ML Engineer & Full-Stack Developer",
    service: "Available for: Custom RAG systems, Document intelligence, Vector search implementation",
    image: "/ai-document-intelligence-system.jpg",
    tech: ["Python", "PyTorch", "LangChain", "FAISS", "OpenAI", "FastAPI", "React", "PostgreSQL"],
    impact: "94% accuracy, 80% time saved",
    category: "AI",
    github: "https://github.com/valery-22/Multi-Modal-AI-Document-Intelligence",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Water Quality Prediction System — XGBoost, Next.js, PostGIS",
    description:
      "Real-time water quality forecasting using ML regression models and IoT sensor data with interactive map visualization.",
    problem: "Manual water quality testing took 24-48 hours, delaying critical decisions",
    approach: "Built ML pipeline with XGBoost for predictions, PostGIS for spatial data, and real-time IoT ingestion",
    results: [
      "Real-time predictions vs 24-48hr manual testing",
      "92% accuracy on quality metrics",
      "Interactive map dashboard",
    ],
    role: "AI/ML Engineer & Full-Stack Developer",
    service: "Available for: Predictive analytics, IoT integration, ML model deployment",
    image: "/water-quality-monitoring-dashboard-with-maps.jpg",
    tech: ["Next.js", "XGBoost", "PostgreSQL", "PostGIS", "Mapbox", "Python"],
    impact: "Real-time vs 24-48hr testing",
    category: "AI",
    github: "https://github.com/valery-22/water-quality-ai",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Retail Forecast Automation — Python, FastAPI, PostgreSQL",
    description:
      "Automated demand forecasting system that improved retail inventory accuracy by 22% using time-series ML models.",
    problem: "Manual forecasting led to 30% stockouts and overstock waste",
    approach: "Built automated pipeline with Prophet time-series models, feature engineering, and API deployment",
    results: ["22% forecast accuracy improvement", "Reduced stockouts by 30%", "5-day POC to production in 3 weeks"],
    role: "Backend Engineer & Data Scientist",
    service: "Available for: Demand forecasting, Time-series modeling, API development",
    image: "/ai-automation-dashboard.png",
    tech: ["Python", "FastAPI", "Prophet", "PostgreSQL", "Docker"],
    impact: "22% accuracy improvement",
    category: "Automation",
    github: "https://github.com/valery-22/Retail-Demand-Forecasting",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Smart Automation Pipeline — Python, AWS, Docker",
    description:
      "End-to-end automation system for data processing and workflow orchestration. Reduced manual work by 70% across teams.",
    problem: "Teams spent 20+ hours/week on manual data processing and reporting",
    approach: "Built automated ETL pipeline with AWS Lambda, Step Functions, and Docker containers",
    results: ["70% reduction in manual work", "Automated 15+ workflows", "Sub-2min processing time"],
    role: "Backend Engineer & DevOps",
    service: "Available for: Workflow automation, ETL pipelines, AWS serverless architecture",
    image: "/automation-workflow-dashboard.png",
    tech: ["Python", "FastAPI", "AWS Lambda", "Docker", "PostgreSQL"],
    impact: "70% less manual work",
    category: "Automation",
    github: "https://github.com/valeryhoyos",
    demo: "https://demo.com",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

const categories = ["All", "AI", "SaaS", "Automation"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-center">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty text-center">
            Real-world solutions with measurable business impact — similar services available for hire
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

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group border-2 hover:border-primary/30 bg-card/50 backdrop-blur-sm cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                        <Button
                          size="sm"
                          className="gap-2 bg-primary hover:bg-primary/90 shadow-lg"
                          onClick={() => setSelectedVideo(project.video)}
                        >
                          <Play className="h-4 w-4" />
                          Watch Demo
                        </Button>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <Badge className="bg-black/80 text-white border-white/20 backdrop-blur-sm">
                          {project.impact}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 text-lg text-balance group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">{project.description}</p>

                    <div className="space-y-3 mb-4 text-sm">
                      <div>
                        <span className="font-semibold text-foreground">Problem:</span>
                        <p className="text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Approach:</span>
                        <p className="text-muted-foreground">{project.approach}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Results:</span>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {project.results.map((result, i) => (
                            <li key={i}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/5 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mb-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-foreground font-medium">{project.service}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="gap-2 hover:bg-primary/10 hover:text-primary"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild className="gap-2 hover:bg-accent/10 hover:text-accent">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
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
              <span className="text-white font-semibold text-lg">Project Demo</span>
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

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-sm font-medium">Live Demo</span>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Full Project Walkthrough</Badge>
                </div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-white/60 text-sm mt-4"
            >
              Click outside or press ESC to close
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
