"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 },
    },
  }

  const tagVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
      },
    }),
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.4 },
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

  const arrowVariants = {
    hover: {
      x: 5,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  }

  return (
    <motion.div variants={itemVariants}>
      <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-lg">
        <motion.div className="relative h-48 overflow-hidden" whileHover="hover">
          <motion.div variants={imageVariants} className="h-full w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </motion.div>
        </motion.div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, i) => (
              <motion.div key={tag} custom={i} variants={tagVariants}>
                <Badge variant="secondary">{tag}</Badge>
              </motion.div>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="text-base">{project.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="w-full">
            <Button asChild variant="outline" className="w-full">
              <Link href={project.link} className="flex items-center justify-center">
                View Project Details
                <motion.div variants={arrowVariants}>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
