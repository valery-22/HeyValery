"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Star, TrendingUp, Sparkles, Code2, Zap } from "lucide-react"
import { Card, CardContent } from "./ui/card"


const achievements = [
  {
    icon: Sparkles,
    title: "5+ AI Systems Shipped",
    description: "RAG pipelines with FAISS/Pinecone, LLM apps (GPT-4, Claude), automation agents in production",
    year: "2024",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: TrendingUp,
    title: "22% Forecast Accuracy Boost",
    description: "XGBoost model for retail demand forecasting, reduced stockouts by 30%",
    year: "2024",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Sub-Second Retrieval at Scale",
    description: "Semantic search over 10k+ documents, deployed on AWS with 99.9% uptime",
    year: "2024",
    color: "from-secondary-accent to-orange-600",
    bgColor: "bg-secondary-accent/10",
  },
  {
    icon: Star,
    title: "4.8/5 Client & Team Rating",
    description: "Mentorship, fast delivery, clear communication across 6 freelance projects",
    year: "2024",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Users,
    title: "Mentored 50+ Students",
    description: "Teaching Python, web development, and AI fundamentals through workshops",
    year: "2023-2024",
    color: "from-accent to-teal-600",
    bgColor: "bg-accent/10",
  },
  {
    icon: Code2,
    title: "5-7 Day POC Delivery",
    description: "Rapid prototyping with MVP-to-production pipeline, 3 successful POCs delivered",
    year: "2024",
    color: "from-primary to-purple-600",
    bgColor: "bg-primary/10",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Achievements & Recognition</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Measurable impact from real-world AI and full-stack projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className={`p-3 rounded-xl ${achievement.bgColor} relative`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className={`h-6 w-6 text-foreground`} />
                        <motion.div
                          className={`absolute inset-0 rounded-xl bg-linear-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-lg">{achievement.title}</h3>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
