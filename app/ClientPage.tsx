"use client"

import Link from "next/link"
import { Code, Compass, Cpu, Layers, Zap } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { StatsCounter } from "@/components/stats-counter"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function ClientPage() {
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
              {/* <Code className="h-6 w-6" /> */}
              <img src={"/assets/aeroverse-logo.png"} alt="Logo" className="h-10 w-15" />
              <span>Aeroverse DEV</span>
            </Link>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex gap-6"
          >
            {["services", "projects", "stats", "contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <Link href={`#${item}`} className="text-sm font-medium hover:text-primary">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </motion.header>
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <div id="stats" className="bg-muted py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatsCounter value={120} label="Projects Completed" icon={<Layers className="h-6 w-6" />} />
              <StatsCounter value={45} label="Happy Clients" icon={<Zap className="h-6 w-6" />} />
              <StatsCounter value={8} label="Years Experience" icon={<Compass className="h-6 w-6" />} />
              <StatsCounter value={15} label="Team Members" icon={<Cpu className="h-6 w-6" />} />
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t py-6 md:py-10"
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 font-semibold"
          >
            {/* <Code className="h-5 w-5" /> */}
            <img src={"/assets/aeroverse-logo.png"} alt="Logo" className="h-10 w-15" />
            <span>AeroverseDEV</span>
          </motion.div>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} AeroverseDEV. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {["Privacy", "Terms", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item === "Contact" ? "#contact" : "#"}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
