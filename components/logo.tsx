"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const sizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const isDark = mounted && theme === "dark"

  return (
    <motion.div
      className={`${sizes[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <motion.path
          d="M 25 20 Q 20 8, 30 15 L 35 25 Z"
          fill={isDark ? "url(#logo-gradient-dark)" : "url(#logo-gradient-light)"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.path
          d="M 26 20 Q 24 14, 29 18 L 32 24 Z"
          fill={isDark ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.2)"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        <motion.path
          d="M 75 20 Q 80 8, 70 15 L 65 25 Z"
          fill={isDark ? "url(#logo-gradient-dark)" : "url(#logo-gradient-light)"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.path
          d="M 74 20 Q 76 14, 71 18 L 68 24 Z"
          fill={isDark ? "rgba(236, 72, 153, 0.3)" : "rgba(236, 72, 153, 0.2)"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke={isDark ? "url(#logo-gradient-dark)" : "url(#logo-gradient-light)"}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            filter: isDark
              ? "drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))"
              : "drop-shadow(0 0 6px rgba(139, 92, 246, 0.3))",
          }}
        />

        <motion.path
          d="M 32 35 L 50 65 L 68 35"
          stroke={isDark ? "url(#logo-gradient-dark)" : "url(#logo-gradient-light)"}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          style={{
            filter: isDark
              ? "drop-shadow(0 0 6px rgba(236, 72, 153, 0.4))"
              : "drop-shadow(0 0 4px rgba(236, 72, 153, 0.3))",
          }}
        />

        <motion.line
          x1="12"
          y1="48"
          x2="30"
          y2="46"
          stroke={isDark ? "url(#logo-gradient-dark)" : "url(#logo-gradient-light)"}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.line
          x1="12"
          y1="54"
          x2="30"
          y2="54"
          stroke={isDark ? "url(#logo-gradient-dark)" : "url(#logo-gradient-light)"}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />
        <motion.line
          x1="88"
          y1="48"
          x2="70"
          y2="46"
          stroke={isDark ? "url(#logo-gradient-dark)" : "url(#logo-gradient-light)"}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.line
          x1="88"
          y1="54"
          x2="70"
          y2="54"
          stroke={isDark ? "url(#logo-gradient-dark)" : "url(#logo-gradient-light)"}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />

        <motion.circle
          cx="50"
          cy="70"
          r="2.5"
          fill={isDark ? "url(#logo-gradient-dark)" : "url(#logo-gradient-light)"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          style={{
            filter: isDark
              ? "drop-shadow(0 0 4px rgba(20, 184, 166, 0.6))"
              : "drop-shadow(0 0 3px rgba(20, 184, 166, 0.4))",
          }}
        />

        <motion.circle
          cx="42"
          cy="48"
          r="2"
          fill={isDark ? "#8b5cf6" : "#7c3aed"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
        />
        <motion.circle
          cx="58"
          cy="48"
          r="2"
          fill={isDark ? "#ec4899" : "#db2777"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
        />

        <defs>
          <linearGradient id="logo-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>

          <linearGradient id="logo-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
