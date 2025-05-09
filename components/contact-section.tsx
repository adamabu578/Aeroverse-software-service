"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  }

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
      },
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
      },
    }),
    focus: {
      scale: 1.01,
      transition: { duration: 0.2 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.5 },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.97,
      transition: { duration: 0.1 },
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
        duration: 0.6,
      },
    },
  }

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={titleVariants} className="text-3xl font-bold tracking-tight mb-4">
            Get in Touch
          </motion.h2>
          <motion.p variants={descriptionVariants} className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Contact us to discuss how we can help bring your ideas to life.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={formVariants} className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div custom={0} variants={inputVariants} className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <motion.div whileHover="focus" whileFocus="focus">
                        <Input id="name" placeholder="Your name" />
                      </motion.div>
                    </motion.div>
                    <motion.div custom={1} variants={inputVariants} className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <motion.div whileHover="focus" whileFocus="focus">
                        <Input id="email" type="email" placeholder="Your email" />
                      </motion.div>
                    </motion.div>
                  </div>
                  <motion.div custom={2} variants={inputVariants} className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <motion.div whileHover="focus" whileFocus="focus">
                      <Input id="subject" placeholder="Project inquiry" />
                    </motion.div>
                  </motion.div>
                  <motion.div custom={3} variants={inputVariants} className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <motion.div whileHover="focus" whileFocus="focus">
                      <Textarea id="message" placeholder="Tell us about your project" rows={5} />
                    </motion.div>
                  </motion.div>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={infoVariants} className="space-y-6">
            <motion.div custom={0} variants={cardVariants} whileHover="hover">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <motion.div variants={iconVariants}>
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-muted-foreground">123 kaduna zaria road</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div custom={1} variants={cardVariants} whileHover="hover">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <motion.div variants={iconVariants}>
                    <Mail className="h-6 w-6 text-primary mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">info@aeroversedev.com</p>
                    <p className="text-muted-foreground">support@aeroverse.com</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div custom={2} variants={cardVariants} whileHover="hover">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <motion.div variants={iconVariants}>
                    <Phone className="h-6 w-6 text-primary mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-muted-foreground">+2347036352800</p>
                    <p className="text-muted-foreground">+2348146704074</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
