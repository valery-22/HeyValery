"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "./ui/badge"
import { Code2, Brain, Server, Wrench, Cloud, Boxes } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
    lightBg:
      "bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-purple-500/20 dark:via-purple-400/10 dark:to-transparent",
    borderColor: "border-purple-300 dark:border-purple-500/30 hover:border-purple-400 dark:hover:border-purple-500/50",
    badgeColor:
      "bg-purple-200 text-purple-800 dark:bg-purple-500/20 dark:text-purple-300 hover:bg-purple-300 dark:hover:bg-purple-500/30 border-purple-300 dark:border-purple-500/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-100 dark:bg-background/50",
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenAI API",
      "LangChain",
      "XGBoost",
      "FAISS",
      "Hugging Face",
      "RAG",
      "Vector DBs",
    ],
    lightBg:
      "bg-gradient-to-br from-pink-100 via-pink-50 to-white dark:from-pink-500/20 dark:via-pink-400/10 dark:to-transparent",
    borderColor: "border-pink-300 dark:border-pink-500/30 hover:border-pink-400 dark:hover:border-pink-500/50",
    badgeColor:
      "bg-pink-200 text-pink-800 dark:bg-pink-500/20 dark:text-pink-300 hover:bg-pink-300 dark:hover:bg-pink-500/30 border-pink-300 dark:border-pink-500/30",
    iconColor: "text-pink-600 dark:text-pink-400",
    iconBg: "bg-pink-100 dark:bg-background/50",
  },
  {
    title: "Frontend",
    icon: Boxes,
    skills: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    lightBg:
      "bg-gradient-to-br from-teal-100 via-teal-50 to-white dark:from-teal-500/20 dark:via-teal-400/10 dark:to-transparent",
    borderColor: "border-teal-300 dark:border-teal-500/30 hover:border-teal-400 dark:hover:border-teal-500/50",
    badgeColor:
      "bg-teal-200 text-teal-800 dark:bg-teal-500/20 dark:text-teal-300 hover:bg-teal-300 dark:hover:bg-teal-500/30 border-teal-300 dark:border-teal-500/30",
    iconColor: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-100 dark:bg-background/50",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "FastAPI", "Express.js", "REST APIs"],
    lightBg:
      "bg-gradient-to-br from-indigo-100 via-indigo-50 to-white dark:from-purple-500/20 dark:via-purple-400/10 dark:to-transparent",
    borderColor: "border-indigo-300 dark:border-purple-500/30 hover:border-indigo-400 dark:hover:border-purple-500/50",
    badgeColor:
      "bg-indigo-200 text-indigo-800 dark:bg-purple-500/20 dark:text-purple-300 hover:bg-indigo-300 dark:hover:bg-purple-500/30 border-indigo-300 dark:border-purple-500/30",
    iconColor: "text-indigo-600 dark:text-purple-400",
    iconBg: "bg-indigo-100 dark:bg-background/50",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Firebase", "Docker", "Git", "CI/CD"],
    lightBg:
      "bg-gradient-to-br from-rose-100 via-rose-50 to-white dark:from-pink-500/20 dark:via-pink-400/10 dark:to-transparent",
    borderColor: "border-rose-300 dark:border-pink-500/30 hover:border-rose-400 dark:hover:border-pink-500/50",
    badgeColor:
      "bg-rose-200 text-rose-800 dark:bg-pink-500/20 dark:text-pink-300 hover:bg-rose-300 dark:hover:bg-pink-500/30 border-rose-300 dark:border-pink-500/30",
    iconColor: "text-rose-600 dark:text-pink-400",
    iconBg: "bg-rose-100 dark:bg-background/50",
  },
  {
    title: "Databases",
    icon: Wrench,
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Redis"],
    lightBg:
      "bg-gradient-to-br from-amber-100 via-amber-50 to-white dark:from-amber-500/20 dark:via-amber-400/10 dark:to-transparent",
    borderColor: "border-amber-300 dark:border-amber-500/30 hover:border-amber-400 dark:hover:border-amber-500/50",
    badgeColor:
      "bg-amber-200 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300 hover:bg-amber-300 dark:hover:bg-amber-500/30 border-amber-300 dark:border-amber-500/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-100 dark:bg-background/50",
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-center">Technical Skills</h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty text-center">
            Full-stack expertise with deep AI specialization
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`space-y-4 p-6 rounded-2xl ${category.lightBg} border ${category.borderColor} transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.iconBg} ${category.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`text-sm font-medium ${category.badgeColor} border transition-all duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
