"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import SectionHeader from "./section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <SectionHeader
          title="Work Experience"
          description="My professional journey and contributions in the tech industry."
        />

        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <motion.div variants={item}>
            <Card className="mb-8 overflow-hidden border-none shadow-lg">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle>Web Development Intern</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    Aug 2024 – Present
                  </Badge>
                </div>
                <p className="text-muted-foreground">Khushi Health & Happiness, Hyderabad, India</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Led the redesign of user interface responsiveness on a fitness rewards platform, improving
                    engagement among 100+ active users; new design increased daily interactions by 30%.
                  </li>
                  <li>
                    Analyzed performance data to optimize core features using HTML, CSS, JavaScript, and ReactJS,
                    resulting in a 25% reduction in platform load times and a notable boost in user satisfaction.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to refine coding standards, reducing bugs by 40% during
                    testing cycles and improving the overall efficiency of platform updates.
                  </li>
                  <li>
                    Effectively communicated design changes and updates to the management team, ensuring alignment with
                    user needs and project goals.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
