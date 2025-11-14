"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import { Quote, Star } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Valery's ability to translate complex AI concepts into practical, scalable solutions is exceptional. Her work on our automation platform exceeded all expectations.",
      author: "Tech Lead",
      role: "AI SaaS Company",
      rating: 5,
    },
    {
      quote:
        "What impressed me most was not just the technical excellence, but the attention to user experience and business impact. Every feature was thoughtfully designed.",
      author: "Product Manager",
      role: "Environmental Tech Startup",
      rating: 5,
    },
    {
      quote:
        "A rare combination of strong technical skills and excellent communication. Valery made complex ML models accessible to our entire team.",
      author: "Engineering Manager",
      role: "Data Analytics Platform",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What People Say</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Feedback from colleagues and collaborators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{testimonial.quote}</p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
