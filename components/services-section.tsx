"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Globe, Layout, Smartphone, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Backend Systems",
    description: "Robust and scalable backend solutions with secure APIs and efficient database design.",
  },
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "User-centered design that enhances usability and creates engaging digital experiences.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Custom Software",
    description: "Tailored software solutions designed to address your specific business challenges.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "DevOps & Cloud",
    description: "Streamlined deployment processes and cloud infrastructure management for optimal performance.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="services" className="py-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={titleVariants} className="text-3xl font-bold tracking-tight mb-4">
            Our Services
          </motion.h2>
          <motion.p variants={descriptionVariants} className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of software development services to help your business thrive in the digital
            landscape.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="h-full transition-all">
                <CardHeader>
                  <motion.div variants={iconVariants} className="mb-2">
                    {service.icon}
                  </motion.div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
