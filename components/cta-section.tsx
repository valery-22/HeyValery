"use client"

import { Card, CardContent } from "./ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Card className="border-2 border-primary/20 bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-secondary-accent" />

            <CardContent className="pt-12 pb-12 px-8 md:px-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center"
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Let&apos;s build something.</h2>
              <p className="text-lg text-muted-foreground mb-4 text-pretty max-w-2xl mx-auto">
                Open to AI Engineer, AI Agent Developer, ML Engineer, and Full-Stack AI roles.
              </p>

              <p className="text-sm text-muted-foreground">
                Open to relocation • Visa sponsorship welcome • Remote-friendly
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
