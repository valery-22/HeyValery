"use client"

import type { ReactNode } from "react"
import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { Toaster } from "./ui/toaster"
import { motion } from "framer-motion"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="pt-20"
      >
        {children}
      </motion.div>
      <Footer />
      <Toaster />
    </main>
  )
}
