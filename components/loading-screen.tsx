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

  const phases = ["Initializing systems", "Loading AI modules", "Compiling portfolio", "Ready to launch"]

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
    }, 25)

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
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-linear-to-br from-background via-background to-muted/20 overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full opacity-20 blur-3xl"
              style={{
                background: isDark
                  ? "radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)"
                  : "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full opacity-20 blur-3xl"
              style={{
                background: isDark
                  ? "radial-gradient(circle, rgba(16, 185, 129, 0.4), transparent 70%)"
                  : "radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent 70%)",
              }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Floating code symbols */}
            {[...Array(15)].map((_, i) => {
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
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    rotate: [0, 360],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="h-6 w-6 text-primary/20" />
                </motion.div>
              )
            })}

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(${isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.1)"} 1px, transparent 1px),
                  linear-gradient(90deg, ${isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.1)"} 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 px-4">
            <div className="relative">
              {/* Main glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(139, 92, 246, 0.6), transparent 70%)",
                  filter: "blur(60px)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: `3px solid ${isDark ? "rgba(139, 92, 246, 0.4)" : "rgba(139, 92, 246, 0.3)"}`,
                  width: "200px",
                  height: "200px",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"
                  style={{ boxShadow: "0 0 25px rgba(139, 92, 246, 1)" }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: `3px solid ${isDark ? "rgba(16, 185, 129, 0.4)" : "rgba(16, 185, 129, 0.3)"}`,
                  width: "170px",
                  height: "170px",
                  margin: "15px",
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div
                  className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-accent"
                  style={{ boxShadow: "0 0 25px rgba(16, 185, 129, 1)" }}
                />
              </motion.div>

              {/* Central icon */}
              <motion.div
                className="relative w-44 h-44 rounded-full flex items-center justify-center border-4 shadow-2xl bg-linear-to-br from-primary/20 via-accent/20 to-secondary-accent/20 backdrop-blur-xl"
                style={{
                  borderColor: isDark ? "rgba(139, 92, 246, 0.4)" : "rgba(139, 92, 246, 0.3)",
                  boxShadow: "0 0 80px rgba(139, 92, 246, 0.4)",
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Terminal className="h-20 w-20 text-primary" strokeWidth={1.5} />
                </motion.div>

                {/* Orbiting particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-accent"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: "-4px",
                      marginTop: "-4px",
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos((i * Math.PI * 2) / 8) * 60,
                      y: Math.sin((i * Math.PI * 2) / 8) * 60,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: (i * 3) / 8,
                    }}
                  />
                ))}

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            </div>

            {/* Name with gradient animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-2"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold tracking-tight"
                style={{
                  backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246), rgb(16, 185, 129), rgb(139, 92, 246))",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "200% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Valery Hoyos Arrieta
              </motion.h1>
              <motion.p
                className="text-sm text-muted-foreground font-medium tracking-wide"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                AI Engineer · Software Developer
              </motion.p>
            </motion.div>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-80 space-y-4"
            >
              <div className="flex items-center justify-between text-sm">
                <motion.span
                  key={phase}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-muted-foreground font-medium"
                >
                  {phases[phase]}
                </motion.span>
                <span className="text-primary font-bold font-mono">{progress}%</span>
              </div>

              <div className={`relative h-2 rounded-full overflow-hidden ${isDark ? "bg-muted/30" : "bg-muted/20"}`}>
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    background: "linear-gradient(90deg, rgb(139, 92, 246), rgb(16, 185, 129))",
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>

              <div className="flex justify-between items-center pt-2">
                {phases.map((_, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        phase >= index
                          ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                          : isDark
                            ? "bg-muted/40"
                            : "bg-muted/30"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
