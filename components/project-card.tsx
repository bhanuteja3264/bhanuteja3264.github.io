"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronRight, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

interface ProjectCardProps {
  id: string
  title: string
  description: string[]
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  imageSrc?: string
  features?: string[]
  challenges?: string[]
  index: number
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageSrc,
  features,
  challenges,
  index,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card
          className="h-full flex flex-col overflow-hidden border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl 
          shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]
          hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
          transition-all duration-300 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 hover:translate-y-[-5px]"
        >
          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500" />

          {/* Image above title */}
          {imageSrc && (
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}

          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {description.slice(0, 2).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {description.length > 2 && (
              <div className="mt-2 text-right">
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary flex items-center gap-1"
                  onClick={() => setIsOpen(true)}
                >
                  Read more <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4 pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              ))}
              {technologies.length > 3 && (
                <Badge variant="outline" className="font-normal">
                  +{technologies.length - 3} more
                </Badge>
              )}
            </div>
            <div className="flex gap-2 w-full">
              <Link href={githubUrl} target="_blank" className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </Link>
              {liveUrl && (
                <Link href={liveUrl} target="_blank" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Project Details Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            {imageSrc && (
              <div className="relative w-full h-56 mb-4 overflow-hidden rounded-md">
                <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </div>
            )}
            <DialogTitle className="text-2xl">{title}</DialogTitle>
            <DialogDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Project Overview</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {features && features.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {challenges && challenges.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Challenges & Solutions</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <DialogFooter className="flex flex-wrap gap-4 sm:justify-between">
            <div className="flex gap-2">
              <Link href={githubUrl} target="_blank">
                <Button className="gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </Link>
              {liveUrl && (
                <Link href={liveUrl} target="_blank">
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Button>
                </Link>
              )}
            </div>
            <DialogClose asChild>
              <Button variant="outline" className="gap-2">
                <X className="h-4 w-4" /> Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
