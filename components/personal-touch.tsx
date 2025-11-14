"use client"

import { motion } from "framer-motion"
import { Heart, Coffee, Code, Sparkles } from "lucide-react"
import { Card } from "./ui/card"

export function PersonalTouch() {
  const interests = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "I believe beautiful code is maintainable code",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description: "Best debugging happens with a good cup of coffee",
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Cat Lover",
      description: "My code reviews are almost as thorough as my cat's grooming",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Sparkles,
      title: "Lifelong Learner",
      description: "Always exploring the latest in AI and web technologies",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Beyond the Code</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            A glimpse into what makes me tick as a developer and human
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden group">
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${interest.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${interest.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-lg">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 border-2 border-primary/20 bg-linear-to-br from-primary/5 to-accent/5 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-primary/10 via-accent/10 to-primary/10"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-muted-foreground italic text-pretty leading-relaxed">
                I&apos;m looking for a team where I can grow, contribute meaningfully, and
                build products that make a real difference. Let&apos;s create something extraordinary together.
              </p>
              <p className="mt-4 font-semibold text-primary">-Valery</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
