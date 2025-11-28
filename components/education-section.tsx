"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    degree: "B.S. in Computer Science",
    institution: "Politecnico Grancolombiano",
    icon: GraduationCap,
  },
]

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: Award,
  },
  {
    name: "Google Cloud AI Fundamentals",
    issuer: "Google Cloud",
    icon: Award,
  },
  {
    name: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    icon: Award,
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Education & Certifications</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-balance">{item.degree}</CardTitle>
                          <CardDescription>{item.institution}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <cert.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-balance">{cert.name}</CardTitle>
                            <CardDescription>{cert.issuer}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
