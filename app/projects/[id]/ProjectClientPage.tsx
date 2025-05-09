"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Code, Globe, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// This would typically come from a database or API
const projects = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
    fullDescription:
      "We developed a comprehensive e-commerce solution for a retail client looking to expand their online presence. The platform includes advanced inventory management, secure payment processing with multiple gateways, customer analytics dashboard, and a responsive design optimized for mobile shopping. The solution resulted in a 45% increase in online sales within the first quarter after launch.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    client: "RetailCorp Inc.",
    duration: "4 months",
    team: "6 developers, 2 designers, 1 project manager",
    features: [
      "Product catalog with advanced filtering",
      "Secure checkout with multiple payment options",
      "Inventory management system",
      "Customer accounts and order history",
      "Analytics dashboard for business insights",
      "Mobile-responsive design",
    ],
  },
  "healthcare-app": {
    title: "Healthcare Mobile App",
    description:
      "A mobile application for healthcare providers to manage patient records, appointments, and communications.",
    fullDescription:
      "We created a HIPAA-compliant mobile application for a network of healthcare clinics to streamline their patient management processes. The app allows healthcare providers to securely access patient records, manage appointments, and communicate with patients through a secure messaging system. The solution has improved appointment attendance rates by 30% and reduced administrative workload by 25%.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React Native", "Firebase", "Express", "Socket.io"],
    client: "MediCare Network",
    duration: "6 months",
    team: "4 developers, 1 designer, 1 project manager, 1 security specialist",
    features: [
      "Secure patient records management",
      "Appointment scheduling and reminders",
      "HIPAA-compliant messaging system",
      "Prescription management",
      "Lab results viewing",
      "Telemedicine integration",
    ],
  },
  "fintech-dashboard": {
    title: "FinTech Dashboard",
    description:
      "An analytics dashboard for financial institutions to monitor transactions, detect fraud, and generate reports.",
    fullDescription:
      "We developed a sophisticated analytics dashboard for a financial services company to monitor transactions, detect potential fraud, and generate comprehensive reports. The dashboard provides real-time insights into financial activities, with customizable alerts and visualization tools. The implementation has helped the client identify fraudulent activities 60% faster and improved reporting efficiency by 40%.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    client: "FinSecure Solutions",
    duration: "5 months",
    team: "5 developers, 1 data scientist, 1 designer, 1 project manager",
    features: [
      "Real-time transaction monitoring",
      "Fraud detection algorithms",
      "Customizable reporting tools",
      "Interactive data visualizations",
      "Regulatory compliance tracking",
      "Secure API integrations with banking systems",
    ],
  },
  "logistics-system": {
    title: "Logistics Management System",
    description: "A comprehensive system for tracking shipments, managing inventory, and optimizing delivery routes.",
    fullDescription:
      "We built an end-to-end logistics management system for a transportation company to optimize their operations. The system includes real-time shipment tracking, inventory management, and route optimization using advanced algorithms. The implementation has reduced delivery times by 20% and lowered fuel costs by 15% through more efficient routing.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Angular", "Node.js", "Redis", "Google Maps API"],
    client: "Global Logistics Inc.",
    duration: "7 months",
    team: "7 developers, 1 designer, 1 project manager, 1 logistics specialist",
    features: [
      "Real-time shipment tracking",
      "Inventory management system",
      "Route optimization algorithms",
      "Driver mobile application",
      "Customer notification system",
      "Analytics and reporting dashboard",
    ],
  },
  "education-platform": {
    title: "Online Learning Platform",
    description:
      "An interactive platform for online courses, featuring video lessons, quizzes, and student progress tracking.",
    fullDescription:
      "We developed a comprehensive online learning platform for an educational institution to expand their digital offerings. The platform features video lessons, interactive quizzes, progress tracking, and a community forum for student discussions. The solution has enabled the client to reach 300% more students and increase course completion rates by 45%.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
    client: "EduTech Academy",
    duration: "6 months",
    team: "5 developers, 2 designers, 1 project manager, 1 educational consultant",
    features: [
      "Video lesson hosting and streaming",
      "Interactive quiz system",
      "Student progress tracking",
      "Community discussion forums",
      "Certificate generation",
      "Instructor dashboard for content management",
    ],
  },
  "iot-monitoring": {
    title: "IoT Monitoring Solution",
    description:
      "A real-time monitoring system for industrial IoT devices with alerts, data visualization, and predictive maintenance.",
    fullDescription:
      "We created a sophisticated IoT monitoring solution for a manufacturing client to track their industrial equipment performance. The system collects data from sensors, provides real-time monitoring, sends alerts for anomalies, and uses machine learning for predictive maintenance recommendations. The implementation has reduced equipment downtime by 35% and maintenance costs by 25%.",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "GraphQL", "MQTT", "TimescaleDB"],
    client: "Industrial Innovations Corp.",
    duration: "8 months",
    team: "6 developers, 1 data scientist, 1 designer, 1 project manager, 1 IoT specialist",
    features: [
      "Real-time device monitoring",
      "Anomaly detection and alerts",
      "Data visualization dashboards",
      "Predictive maintenance algorithms",
      "Historical data analysis",
      "Remote device configuration",
    ],
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function ProjectClientPage({ params }: PageProps) {
  const project = projects[params.id as keyof typeof projects]

  // Set the document title manually since we can't use generateMetadata in a client component
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | DevStudio Projects`
    } else {
      document.title = "Project Not Found"
    }
  }, [project])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 * i, duration: 0.5 },
    }),
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  }

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container py-20 text-center"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Project Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          The project you're looking for doesn't exist or has been removed.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild>
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Code className="h-6 w-6" />
              <span>DevStudio</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" asChild>
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <motion.main variants={containerVariants} initial="hidden" animate="visible" className="flex-1">
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    >
                      <Badge variant="secondary">{tag}</Badge>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xl text-muted-foreground">{project.description}</p>
              </motion.div>

              <motion.div variants={imageVariants} className="relative aspect-video overflow-hidden rounded-lg">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground">{project.fullDescription}</p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <motion.li key={index} custom={index} variants={featureVariants} className="flex items-start">
                      <div className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div variants={cardVariants} whileHover="hover" className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Client</p>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                  </motion.div>

                  <Separator />

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-muted-foreground">{project.duration}</p>
                    </div>
                  </motion.div>

                  <Separator />

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Team</p>
                      <p className="text-muted-foreground">{project.team}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover" className="rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Interested in a similar project?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us to discuss how we can help bring your ideas to life with a custom solution tailored to your
                  needs.
                </p>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild className="w-full">
                    <Link href="/#contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="border-t py-6 md:py-10"
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <Code className="h-5 w-5" />
            <span>DevStudio</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DevStudio. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item === "Contact" ? "/#contact" : "#"}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
