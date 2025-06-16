// DO NOT put 'use client' here

import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import ProjectDetailClient from "./ProjectDetailClient"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  // This is now a server component, but renders your client component:
  return <ProjectDetailClient project={project} />
}
