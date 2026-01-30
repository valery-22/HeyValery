"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Code, Lightbulb, Users, Globe } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 px-6 bg-muted/30 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-center text-foreground">
            About Me
          </h2>
          <p className="text-base text-muted-foreground mb-12 text-center text-pretty max-w-2xl mx-auto">
            Building intelligent systems that solve real problems
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-xl aspect-square">
                <img
                  src="your-photo.jpeg"
                  alt="Valery Hoyos Arrieta - AI Engineer and Full-Stack Software Developer specializing in RAG systems and intelligent automation"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  I’m a software engineer who builds end-to-end products,
                  from intuitive user interfaces to scalable backends and 
                  production AI systems. I’ve worked across frontend, full stack,
                  and AI projects, shipping real-world software with measurable impact.

                  I’m comfortable with React and TypeScript on the frontend, Python and 
                  Node on the backend,
                  and machine learning when it adds real value. I focus on building practical, 
                  reliable systems that perform well at scale.
                </p>

                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  My expertise centers on the full ML lifecycle: data
                  preparation, model training with PyTorch/TensorFlow,
                  evaluation frameworks, and production deployment via AWS
                  SageMaker and Kubernetes. I&apos;ve reduced client infrastructure
                  costs by 40% on average while improving model performance
                  metrics by 25-60%.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/20 to-secondary-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">Clean Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, well-documented code
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-secondary-accent/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-secondary-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">Problem Solver</h3>
                  <p className="text-sm text-muted-foreground">
                    Breaking down complex challenges systematically
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">Team Focused</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborating effectively with cross-functional teams
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">
                    Globally Available
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Open to worldwide opportunities
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground mb-6 text-pretty">
              My work has delivered measurable results, from AI systems that
              increased user engagement by 45% to automation that reduced manual
              work by 70%. But beyond metrics, I focus on building sustainable
              solutions that teams can maintain and extend over time.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              I&apos;m excited to continue growing as a software engineer,
              tackling new challenges, and contributing to impactful projects.
              Let&apos;s build something great together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
