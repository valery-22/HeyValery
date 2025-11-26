"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Zap, Target } from "lucide-react"

const impacts = [
  {
    icon: TrendingUp,
    metric: "+45%",
    description: "Helped increase client acquisition by automating repetitive tasks with AI-powered tools.",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-500/20",
  },
  {
    icon: Zap,
    metric: "70%",
    description: "Reduced data processing time by building smarter pipelines that handle tasks automatically.",
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-100 dark:bg-pink-500/20",
  },
  {
    icon: Target,
    metric: "+60%",
    description: "Improved search accuracy using LLM semantic search, helping users find relevant information faster.",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-100 dark:bg-teal-500/20",
  },
]

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="impact" className="py-24 px-6 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background Highlights */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Some Things I’ve Built
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            These are a few examples of work I’ve done that made a noticeable difference for users and teams.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => {
              const Icon = impact.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 ${impact.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-8 w-8 ${impact.color}`} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-3 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    {impact.metric}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
