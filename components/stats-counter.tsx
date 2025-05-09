"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface StatsCounterProps {
  value: number
  label: string
  icon: ReactNode
}

export function StatsCounter({ value, label, icon }: StatsCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const spring = useSpring(0, springConfig)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value)
      setHasAnimated(true)
    }
  }, [isInView, value, spring, hasAnimated])

  const displayValue = useTransform(spring, (latest) => Math.floor(latest))

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
        duration: 0.6,
      },
    },
    hover: {
      rotate: 10,
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  }

  const numberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
      },
    },
  }

  const labelVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.6,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="flex flex-col items-center justify-center p-6 bg-background rounded-lg shadow-sm"
    >
      <motion.div variants={iconVariants} className="mb-4 p-3 rounded-full bg-primary/10">
        {icon}
      </motion.div>
      <motion.div variants={numberVariants} className="text-4xl font-bold mb-2">
        <motion.span>{displayValue}</motion.span>
      </motion.div>
      <motion.div variants={labelVariants} className="text-muted-foreground text-center">
        {label}
      </motion.div>
    </motion.div>
  )
}
