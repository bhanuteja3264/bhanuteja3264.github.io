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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/70 to-pink-50/60 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/20"></div>
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-30 dark:opacity-10 pointer-events-none"></div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <Link href="/#projects">
          <Button
            variant="outline"
            className="mb-8 border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.4)] dark:shadow-[0_0_20px_rgba(59,130,246,0.5)] bg-white/90 backdrop-blur-sm dark:bg-slate-800/90">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500" />

            {project.imageSrc && (
              <div className="relative w-full h-64 md:h-80">
                <Image src={project.imageSrc} alt={project.title} fill className="object-cover" />
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

            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-medium mb-3">Project Overview</h3>
                <ul className="list-disc list-inside space-y-3">
                  {project.description.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-xl font-medium mb-3">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {project.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div>
                  <h3 className="text-xl font-medium mb-3">Challenges & Solutions</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {project.challenges.map((challenge: string, i: number) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>

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