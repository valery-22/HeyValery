/* eslint-disable react-hooks/purity */
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Terminal, Code2, Zap, Sparkles } from "lucide-react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const phases = ["Warming up...", "Loading modules...", "Preparing portfolio...", "Almost ready"]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1
        if (next >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        if (next === 25) setPhase(1)
        if (next === 50) setPhase(2)
        if (next === 75) setPhase(3)
        return next
      })
    }, 27)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2600)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-linear-to-br from-background via-background to-muted/20 overflow-hidden"
        >
          {/* BACKGROUND BLOBS */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
              style={{
                background: isDark
                  ? "rgba(139, 92, 246, 0.20)"
                  : "rgba(139, 92, 246, 0.18)",
              }}
              animate={{
                scale: [1, 1.05, 1],
                x: [0, 25, 0],
                y: [0, 20, 0],
                opacity: [0.17, 0.22, 0.17],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
              style={{
                background: isDark
                  ? "rgba(16, 185, 129, 0.20)"
                  : "rgba(16, 185, 129, 0.18)",
              }}
              animate={{
                scale: [1, 1.07, 1],
                x: [0, -25, 0],
                y: [0, -20, 0],
                opacity: [0.16, 0.22, 0.16],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* FLOATING ICONS (SOFTER + ORGANIC) */}
            {[...Array(12)].map((_, i) => {
              const symbols = [Terminal, Code2, Zap, Sparkles]
              const Icon = symbols[i % symbols.length]
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    x: [-4, 4, -4],
                    opacity: [0.10, 0.22, 0.10],
                    scale: [0.9, 1, 0.95],
                  }}
                  transition={{
                    duration: 9 + Math.random() * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                >
                  <Icon className="h-5 w-5 text-primary/20" strokeWidth={1} />
                </motion.div>
              )
            })}

            {/* SOFTER GRID */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `
                  linear-gradient(${isDark ? "rgba(139,92,246,0.14)" : "rgba(139,92,246,0.10)"} 1px, transparent 1px),
                  linear-gradient(90deg, ${isDark ? "rgba(139,92,246,0.14)" : "rgba(139,92,246,0.10)"} 1px, transparent 1px)
                `,
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-4">

            {/* CENTER ART — NO ROTATION, JUST BREATHING */}
            <motion.div className="relative">
              {/* soft glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "rgba(139, 92, 246, 0.45)",
                  filter: "blur(65px)",
                }}
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.4, 0.55, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* the circle */}
              <motion.div
                className="relative w-44 h-44 rounded-full flex items-center justify-center border-4 bg-linear-to-br from-primary/10 via-accent/10 to-secondary-accent/10 backdrop-blur-xl shadow-xl"
                style={{
                  borderColor: isDark
                    ? "rgba(139,92,246,0.35)"
                    : "rgba(139,92,246,0.28)",
                }}
                animate={{
                  scale: [0.98, 1, 0.98],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {/* terminal icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.85],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Terminal className="h-18 w-18 text-primary" strokeWidth={1.5} />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* NAME */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center space-y-2"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Valery Hoyos Arrieta
              </h1>
              <motion.p
                className="text-sm text-muted-foreground font-medium"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                AI Engineer · Software Developer
              </motion.p>
            </motion.div>

            {/* PROGRESS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-80 space-y-4"
            >
              <div className="flex items-center justify-between text-sm">
                <motion.span
                  key={phase}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-muted-foreground font-medium"
                >
                  {phases[phase]}
                </motion.span>
                <span className="text-primary font-bold font-mono">{progress}%</span>
              </div>

              {/* bar */}
              <div className="relative h-2 rounded-full overflow-hidden bg-muted/20">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(139,92,246,1), rgba(16,185,129,1))",
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.15 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

