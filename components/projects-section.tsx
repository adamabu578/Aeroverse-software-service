"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: "Tech Gadgets-platform",
    title: "Tech Gadgets-platform",
    description:
      "Modern, responsive ecommerce web application designed for discovering, comparing, and purchasing the latest technology gadgets—including smartphones, smartwatches, laptops, audio devices, accessories, and more.",
    image: "/assets/banitech.png",
    tags: ["Next.js", "taiwlind css", "shad cn UI",],
    link: "https://banitechtoks-webapp.vercel.app/",
  },
  {
    id: "glovo-webapp",
    title: "glovo web-app",
    description:
      "A food delivery eCommerce web app is a digital platform that allows users to browse nearby restaurants or vendors, select food items, place orders, and have them delivered to their doorstep in real-time.",
    image: "/assets/glovo.png",
    tags: ["Next js", "tailwind css", "shad cn UI", "Socket.io"],
    link: "/projects/healthcare-app",
  },
  {
    id: "smatpay-web-app",
    title: "smatpay Web App",
    description:
      "A VTU (Virtual Top-Up) web app is an online platform that allows users to buy airtime, data bundles, pay electricity and TV bills, and fund wallets.",
    image: "/assets/smatpay-web.png",
    tags: ["React", "vite", "tailwind css",],
    link: "https://smatpay.vercel.app/",
  },
  {
    id: "Aeroverse Laundry-platform",
    title: "Aeroverse Laundry-platform",
    description: "A simple laundry web app is an online platform that allows users to schedule laundry pickup and delivery, select laundry services (e.g., wash & fold, dry cleaning, ironing), and make payments — all through a clean and user-friendly interface.",
    image: "/assets/aeroverse.png",
    tags: ["Next js", "tailwind css", "shad cn",],
    link: "https://aeroverse-laundry.vercel.app/",
  },
  {
    id: "smatpay-waitlist", 
    title: "smatpay-waitlist",
    description:
      "A waitlist web app is a platform that lets users sign up early for a product or service launch, often showing their position in line and encouraging referrals to move up the list.",
    image: "/assets/waitlist.png",
    tags: ["Next js", "tailwind css", "shad cn UI", "framer motion"],
    link: "https://smatpay-waitlist.vercel.app/",
  },
  {
    id: "smatpay-vtu-dashboard",
    title: "smatpay-vtu-dashboard",
    description:
      "A real-time monitoring system for industrial IoT devices with alerts, data visualization, and predictive maintenance.",
    image: "/assets/dashboard.png",
    tags: ["Next js", "tailwind css", "shad Cn UI", "TimescaleDB"],
    link: "/projects/iot-monitoring",
  },
]

export function ProjectsSection() {
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={titleVariants} className="text-3xl font-bold tracking-tight mb-4">
            Our Projects
          </motion.h2>
          <motion.p variants={descriptionVariants} className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered to clients across various industries.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
