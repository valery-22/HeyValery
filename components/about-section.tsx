"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

import { Code, Lightbulb, Users, Globe } from "lucide-react"
import { Card, CardContent } from "./ui/card"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden bg-linear-to-b from-background to-background/60"
    >
      {/* Premium Spotlights */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[160px] opacity-20" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary-accent/20 rounded-full blur-[160px] opacity-20" />
      </div>

      <div className="mx-auto max-w-6xl">

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-white to-white/50">
            About Me
          </h2>

          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            A software engineer who genuinely enjoys building intelligent, scalable systems.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Glowing border */}
            <div className="absolute inset-0 w-[90%] h-[90%] rounded-3xl bg-linear-to-br from-primary/20 to-secondary-accent/20 blur-3xl opacity-30" />

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.97 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl"
            >
              <Image
                src="/images/aboutMePicture.png"
                alt="Valery Hoyos"
                width={480}
                height={580}
                className="object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I&apos;m a Full Stack Software Engineer and AI/ML Engineer experienced across the entire
              product development lifecycle—from prototyping machine learning models and vector search
              systems to architecting full-stack web platforms using TypeScript, Python, React, Next.js,
              FastAPI, PyTorch, LangChain, and modern vector databases.
            </p>

            <p>
              My work spans designing APIs, building scalable backend systems, creating intuitive
              interfaces, and ensuring maintainability through clean architecture. I&apos;ve collaborated with
              teams across North America and Europe, building production-ready systems that solve real
              business problems.
            </p>

            <p>
              Outside of work, I love traveling across Europe and Latin America. Those experiences deeply
              influence how I think about product, user experience, and human-centered engineering.
            </p>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 my-24">
          {[
            {
              icon: <Code className="h-7 w-7 text-primary" />,
              title: "Clean Code Advocate",
              desc: "Readable, maintainable, future-proof engineering.",
              delay: 0.1
            },
            {
              icon: <Lightbulb className="h-7 w-7 text-secondary-accent" />,
              title: "Problem Solver",
              desc: "Turning complexity into simple, elegant solutions.",
              delay: 0.2
            },
            {
              icon: <Users className="h-7 w-7 text-accent" />,
              title: "Team Collaborator",
              desc: "Strong communication, clarity, and engineering empathy.",
              delay: 0.3
            },
            {
              icon: <Globe className="h-7 w-7 text-primary" />,
              title: "Global Mobility",
              desc: "Open to relocation & visa sponsorship worldwide.",
              delay: 0.4
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 shadow-xl rounded-2xl">
                <CardContent className="pt-8 pb-6 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto text-lg leading-relaxed text-muted-foreground space-y-6"
        >
          <p>
            I’ve built ML systems that improved accuracy by 60%, automated workflows that reduced manual
            work by 70%, and full-stack features that boosted user engagement by 45%. But what matters most
            to me is engineering clarity: writing code others can understand, extend, and trust.
          </p>

          <p>
            I’m now looking for opportunities where I can contribute to ambitious teams working on
            AI/ML-driven products, scalable systems, and meaningful user experiences—anywhere in the world.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
