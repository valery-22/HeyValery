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
      {/* Background Highlights */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[160px] opacity-20" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary-accent/20 rounded-full blur-[160px] opacity-20" />
      </div>

      <div className="mx-auto max-w-6xl">

        {/* Section Title */}
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
            I build thoughtful, scalable systems and bring ideas to life with clean, maintainable code.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 w-[90%] h-[90%] rounded-3xl bg-linear-to-br from-primary/20 to-secondary-accent/20 blur-3xl opacity-30" />

            <motion.div
              initial={{ scale: 0.97 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl"
            >
              <Image
                src="/your-photo.jpeg"
                alt="Valery Hoyos"
                width={480}
                height={580}
                className="object-cover"
              />
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
              I’m a Software Engineer who enjoys turning ideas into reliable, production-ready systems. 
              From prototyping machine learning models to building full-stack web platforms, I work across the tech stack using TypeScript, Python, React, Next.js, FastAPI, PyTorch, LangChain, and modern vector databases.
            </p>

            <p>
              I focus on crafting APIs, scalable backends, and intuitive frontends, always keeping maintainability and clarity in mind. 
              I’ve collaborated with teams across the US and Europe, delivering systems that solve real-world problems and drive measurable impact.
            </p>

            <p>
              When I’m not coding, I’m exploring new countries across Europe and Latin America. 
              Traveling gives me perspective on people, culture, and user experience insights I bring back to engineering and product design.
            </p>
          </motion.div>
        </div>

        {/* Features / Skills */}
        <div className="grid md:grid-cols-4 gap-8 my-24">
          {[
            { icon: <Code className="h-7 w-7 text-primary" />, title: "Clean Code", desc: "Readable, maintainable, future-proof engineering.", delay: 0.1 },
            { icon: <Lightbulb className="h-7 w-7 text-secondary-accent" />, title: "Problem Solving", desc: "Turning complex challenges into simple solutions.", delay: 0.2 },
            { icon: <Users className="h-7 w-7 text-accent" />, title: "Collaboration", desc: "Clear communication and team-focused development.", delay: 0.3 },
            { icon: <Globe className="h-7 w-7 text-primary" />, title: "Global Mobility", desc: "Open to remote work and relocation worldwide.", delay: 0.4 }
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

        {/* Final Statement / Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto text-lg leading-relaxed text-muted-foreground space-y-6"
        >
          <p>
            I’ve built ML systems that improved prediction accuracy by 60%, automated workflows to save teams 70% of manual effort, 
            and implemented full-stack features that increased user engagement by 45%. I care deeply about writing code that is understandable, reliable, and enjoyable for others to work with.
          </p>

          <p>
            I’m seeking opportunities where I can collaborate with ambitious teams, solve challenging problems, and create meaningful experiences for users anywhere in the world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
