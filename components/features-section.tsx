"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card"
import { Brain, Code2, Sparkles, Zap, Database, Rocket } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Building intelligent systems with LangChain, OpenAI, and custom ML models that deliver measurable business impact.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description:
      "End-to-end development with Next.js, React, Node.js, and modern frameworks for scalable, production-ready applications.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Sparkles,
    title: "Creative Problem Solving",
    description:
      "Transforming complex challenges into elegant solutions with a focus on user experience and technical excellence.",
    gradient: "from-pink-500/20 to-orange-500/20",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Architecting high-performance systems that scale efficiently, with proven results in reducing load times and improving UX.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description:
      "Designing robust database schemas and data pipelines with PostgreSQL, MongoDB, and modern ORMs for reliable data management.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description:
      "Quickly iterating from concept to MVP with modern tooling, cutting development time while maintaining code quality.",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What I Bring to the Table</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A unique blend of technical expertise, creative thinking, and a passion for building intelligent systems
            that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
