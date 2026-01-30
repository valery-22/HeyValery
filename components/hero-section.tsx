"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Terminal, Code2, FileText } from "lucide-react"
import { AnimatedBackground } from "./animated-background"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"
import { useRef, useState, useEffect, useMemo } from "react"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const [displayedText, setDisplayedText] = useState("")
  const [currentCommand, setCurrentCommand] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const commands = useMemo(
    () => [
      { command: "whoami", output: "Valery Hoyos Arrieta" },
      { command: "cat role.txt", output: "Software Engineer ·AI Enginer · Model Training Specialist" },
      {
        command: "cat impact.txt",
        output: "$2.4M+ revenue generated through AI systems\n8 production ML models deployed\n40% average cost reduction for clients",
      },
      {
        command: "cat expertise.txt",
        output:
          "Frontend, Model Training: PyTorch, TensorFlow, Custom LLM Fine-tuning\nMLOps: Weights & Biases, MLflow, Model Monitoring\nProduction: FastAPI, AWS SageMaker, Kubernetes\nSpecialty: RAG Systems, Vector Search, Document AI",
      },
      {
        command: "cat availability.txt",
        output: "Contract work\nStatus: Available for high-impact projects\nTimezone: UTC-5 (flexible for global teams)",
      },
    ],
    [],
  )

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentCommand >= commands.length) {
      setTimeout(() => {
        setCurrentCommand(0)
        setDisplayedText("")
      }, 2000)
      return
    }

    const fullText = `$ ${commands[currentCommand].command}\n${commands[currentCommand].output}`
    let index = 0

    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentCommand((prev) => prev + 1)
          setDisplayedText("")
        }, 1500)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [currentCommand, commands])

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 gradient-bg relative overflow-hidden"
    >
      <AnimatedBackground />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs text-muted-foreground font-mono uppercase tracking-wider"
            >
            Sofware Engineer & AI Specialist
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-card/80 backdrop-blur-xl border-2 border-border rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 ml-4 text-sm text-muted-foreground font-mono">
                  <Terminal className="h-4 w-4" />
                  <span>valery@portfolio:~</span>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8 font-mono text-xs sm:text-sm space-y-4 min-h-[350px] sm:min-h-[400px]">
                {commands.slice(0, currentCommand).map((cmd, index) => (
                  <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                    <div className="text-primary">$ {cmd.command}</div>
                    <div className="text-foreground pl-2 whitespace-pre-wrap leading-relaxed">{cmd.output}</div>
                  </motion.div>
                ))}
                {currentCommand < commands.length && (
                  <div className="space-y-1">
                    <div className="text-primary whitespace-pre-wrap leading-relaxed">
                      {displayedText}
                      {showCursor && <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />}
                    </div>
                  </div>
                )}
                {currentCommand >= commands.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-primary"
                  >
                    <span>$</span>
                    {showCursor && <span className="inline-block w-2 h-4 bg-primary animate-pulse" />}
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                Available for contracts
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/valery-hoyos-software/", label: "View LinkedIn Profile" },
                { icon: Github, href: "https://github.com/valery-22", label: "Visit GitHub Profile" },
                { icon: FileText, href: "/resume.pdf", label: "Download Resume PDF" },
                { icon: Mail, href: "valery.hoyos.dev@gmail.com", label: "Send Email" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full h-12 w-12 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all bg-transparent"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 h-12 px-8"
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-2 hover:bg-primary/5 bg-transparent"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:flex flex-col gap-6"
          >
            <motion.div
              className="relative rounded-xl overflow-hidden bg-card/80 backdrop-blur-xl border-2 border-border shadow-2xl group"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono ml-4">intro.mp4</span>
                </div>
              </div>

              <div className="aspect-video relative bg-linear-to-br from-primary/10 via-accent/10 to-secondary-accent/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/mOlZ4-XkEss"
                  title="Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -2 }}
              className="bg-card/80 backdrop-blur-xl border-2 border-border rounded-xl overflow-hidden shadow-xl"
            >
              <div className="bg-muted/50 border-b border-border px-4 py-2 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-mono">status.json</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-1">
                <div className="text-muted-foreground">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">contract</span> = {"{"}
                </div>
                <div className="text-muted-foreground pl-4">
                  rate: <span className="text-green-400">&quot;$2,000/week&quot;</span>,
                </div>
                <div className="text-muted-foreground pl-4">
                  availability: <span className="text-orange-400">true</span>,
                </div>
                <div className="text-muted-foreground pl-4">
                  minEngagement: <span className="text-green-400">&quot;4 weeks&quot;</span>,
                </div>
                <div className="text-muted-foreground pl-4">
                  deliverables: <span className="text-green-400">&quot;Production ML systems&quot;</span>,
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-8 -left-8 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll down"
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
