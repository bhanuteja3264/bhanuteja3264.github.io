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
          description="My professional journey and contributions in career guidance and technology."
        />

        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <motion.div variants={item}>
            <Card className="mb-8 overflow-hidden border-none shadow-lg">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle>Career Guidance & Mental Wellness Intern</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    Mar 2025 – Present
                  </Badge>
                </div>
                <p className="text-muted-foreground">Tingle, Bangalore, India</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Designed and implemented a psychometric test to assess students’ abilities and interests for personalized career guidance.
                  </li>
                  <li>
                    Created informative YouTube content to promote mental wellness and awareness about career planning, reaching students from various colleges.
                  </li>
                  <li>
                    Organized outreach initiatives to engage students across institutions, encouraging participation in career exploration activities.
                  </li>
                  <li>
                    Planned and conceptualized the structure for a dedicated website focused on career guidance and student mental health support.
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
