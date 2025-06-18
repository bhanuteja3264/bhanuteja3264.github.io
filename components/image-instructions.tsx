"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function ImageInstructions() {
  return (
    <Alert className="mb-8 border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
      <Info className="h-4 w-4" />
      <AlertTitle>Adding Project Images</AlertTitle>
      <AlertDescription>
        <p className="mt-2">To add images to your projects, follow these steps:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Create a folder named "images" in your "public" directory</li>
          <li>Add your project screenshots or images to this folder</li>
          <li>Update the "imageSrc" property in the data/projects.ts file to point to your images</li>
          <li>Example: imageSrc: "/images/your-project-image.jpg"</li>
        </ol>
      </AlertDescription>
    </Alert>
  )
}
