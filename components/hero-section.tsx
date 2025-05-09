"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-muted"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 left-1/4 h-56 w-56 rounded-full bg-primary/50 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-secondary/50 blur-3xl"
        />
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6"
          >
            <span className="text-primary">Innovative Software Solutions</span>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6"
            >
              Transforming Ideas into{" "}
              <motion.span
                animate={{
                  color: ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--primary))"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="text-primary"
              >
                Powerful Software
              </motion.span>
            </motion.h1>
            <Image
              src="/assets/laptop-guy.jpg" // Replace with your actual image path
              alt="Illustration"
              width={550}
              height={700}
              // className="object-contain"
               className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
            />
        
          </div>


          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8">
            We build custom software solutions that help businesses grow, innovate, and succeed in the digital world.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View Our Work
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
