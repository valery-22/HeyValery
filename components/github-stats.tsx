"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { GitBranch, Star, GitCommit, Code2 } from "lucide-react"
import { Card, CardContent } from "./ui/card"

export function GitHubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [stats, setStats] = useState({
    repos: 0,
    contributions: 0,
    stars: 0,
    commits: 0,
  })

  // Animate numbers counting up
  useEffect(() => {
    if (!isInView) return

    const targetStats = {
      repos: 42,
      contributions: 1247,
      stars: 156,
      commits: 2854,
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const interval = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        repos: Math.floor(targetStats.repos * progress),
        contributions: Math.floor(targetStats.contributions * progress),
        stars: Math.floor(targetStats.stars * progress),
        commits: Math.floor(targetStats.commits * progress),
      })

      if (currentStep >= steps) {
        setStats(targetStats)
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isInView])

  const statItems = [
    { icon: Code2, label: "Public Repos", value: stats.repos, color: "text-primary" },
    { icon: GitCommit, label: "Contributions", value: stats.contributions, color: "text-accent" },
    { icon: Star, label: "Stars Earned", value: stats.stars, color: "text-secondary-accent" },
    { icon: GitBranch, label: "Commits", value: stats.commits, color: "text-primary" },
  ]

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statItems.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="pt-6 text-center">
                      <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                      <div className="text-3xl font-bold mb-1">{stat.value.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
