import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Details | Bhanu Teja Yerram",
  description: "Detailed information about Bhanu Teja Yerram's projects",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
