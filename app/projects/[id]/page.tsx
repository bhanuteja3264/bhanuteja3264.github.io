<<<<<<< HEAD
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

type Props = {
  params: { id: string }
}

// Generate all static paths for export
export async function generateStaticParams() {
  return projects.map(project => ({ id: project.id }))
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find(p => p.id === params.id)

  if (!project) return notFound()

  return (
    <div className="min-h-screen py-20 relative">
      {/* Background Gradients */}
=======
"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

// Import the projects data
import { projects } from "@/data/projects"

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projects.find((p) => p.id === id)

    if (foundProject) {
      setProject(foundProject)
    }

    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Button onClick={() => router.push("/#projects")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 relative">
>>>>>>> 8f87b45b7eac1264148a3f8ee76157ff0ffec532
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/70 to-pink-50/60 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/20"></div>
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-30 dark:opacity-10 pointer-events-none"></div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
<<<<<<< HEAD
        <Link href="/#projects">
          <Button
            variant="outline"
            className="mb-8 border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>
=======
        <Button
          variant="outline"
          onClick={() => router.push("/#projects")}
          className="mb-8 border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
>>>>>>> 8f87b45b7eac1264148a3f8ee76157ff0ffec532

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.4)] dark:shadow-[0_0_20px_rgba(59,130,246,0.5)] bg-white/90 backdrop-blur-sm dark:bg-slate-800/90">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500" />

            {project.imageSrc && (
              <div className="relative w-full h-64 md:h-80">
<<<<<<< HEAD
                <Image src={project.imageSrc} alt={project.title} fill className="object-cover" />
=======
                <Image src={project.imageSrc || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
>>>>>>> 8f87b45b7eac1264148a3f8ee76157ff0ffec532
              </div>
            )}

            <CardHeader>
              <CardTitle className="text-3xl">{project.title}</CardTitle>
              <CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech: string) => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
<<<<<<< HEAD

            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-medium mb-3">Project Overview</h3>
                <ul className="list-disc list-inside space-y-3">
=======
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">Project Overview</h3>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
>>>>>>> 8f87b45b7eac1264148a3f8ee76157ff0ffec532
                  {project.description.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-xl font-medium mb-3">Key Features</h3>
<<<<<<< HEAD
                  <ul className="list-disc list-inside space-y-2">
=======
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
>>>>>>> 8f87b45b7eac1264148a3f8ee76157ff0ffec532
                    {project.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div>
                  <h3 className="text-xl font-medium mb-3">Challenges & Solutions</h3>
<<<<<<< HEAD
                  <ul className="list-disc list-inside space-y-2">
=======
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
>>>>>>> 8f87b45b7eac1264148a3f8ee76157ff0ffec532
                    {project.challenges.map((challenge: string, i: number) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
<<<<<<< HEAD

=======
>>>>>>> 8f87b45b7eac1264148a3f8ee76157ff0ffec532
            <CardFooter className="flex flex-wrap gap-4 border-t pt-6">
              <Link href={project.githubUrl} target="_blank">
                <Button className="gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <Github className="h-4 w-4" /> View on GitHub
                </Button>
              </Link>
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank">
                  <Button
                    variant="outline"
                    className="gap-2 border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
