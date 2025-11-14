
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

import { Code, Lightbulb, Users, Globe } from "lucide-react"
import { Card, CardContent } from "./ui/card"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-center">About Me</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center text-pretty max-w-2xl mx-auto">
            A software engineer who genuinely enjoys solving problems and building things that work
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl aspect-square">
                
                
                {/* Gradient overlay with coffee tones */}
                <div className="absolute inset-0 bg-linear-to-t from-secondary-accent/20 to-transparent" />
              </div>
              {/* Decorative elements with coffee colors */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                  I&apos;m a Full-Stack Software Engineer and AI/ML Engineer who loves building intelligent web applications
                  that actually solve problems. My background is in Computer Science, and I&apos;ve spent the last few years
                  working on everything from SaaS platforms to automation tools to advanced AI systems using machine
                  learning and large language models.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                  My tech stack includes TypeScript, Python, React, Next.js, FastAPI, and modern AI frameworks like
                  PyTorch, LangChain, and various vector databases. I&apos;m comfortable working across the entire stack -
                  from training ML models and building intelligent systems to designing databases and creating
                  responsive user interfaces.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/20 to-secondary-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Clean Code Advocate</h3>
                  <p className="text-sm text-muted-foreground">
                    I believe good code should be readable, maintainable, and actually make sense.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-secondary-accent/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-secondary-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Problem Solver</h3>
                  <p className="text-sm text-muted-foreground">
                    I love the challenge of breaking down complex problems into simple solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Team Player</h3>
                  <p className="text-sm text-muted-foreground">
                    Great software is built by great teams working together
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Open to Relocation</h3>
                  <p className="text-sm text-muted-foreground">
                    Available for opportunities worldwide with visa sponsorship
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6 text-pretty">
              What I enjoy most is taking a complex problem, understanding what really needs to be solved, and then
              building something that works well and is maintainable. I&apos;ve worked on projects that leverage cutting-edge
              AI for document intelligence, increased user engagement by 45%, reduced manual work by 70%, and improved
              system accuracy by 60% - but more importantly, I&apos;ve learned how to write code that other developers can
              actually understand and work with.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Right now, I&apos;m looking for opportunities where I can work with talented engineers on challenging AI/ML and
              full-stack problems at scale. I&apos;m particularly interested in companies that value clean code, good
              engineering practices, and building products that users actually love. I&apos;m open to relocation and visa
              sponsorship opportunities worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
