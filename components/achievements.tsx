"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Code, Trophy } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "Google Cybersecurity Specialization",
    description:
      "Earned a certification in the Google Cybersecurity Specialization, mastering network defense techniques and threat mitigation processes.",
  },
  {
    icon: Code,
    title: "MERN Fullstack Certified Engineer",
    description:
      "Achieved the MERN Fullstack Certified Engineer credential, completing over 100 hours of hands-on projects in MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    icon: Trophy,
    title: "Coding Competitions",
    description:
      "Ranked in the top 5% on the Smart Interviews coding platform and secured 1st rank in the Krithoathon coding contest among 350 participants.",
  },
  {
    icon: Award,
    title: "Hackathon Winner",
    description:
      "Won ₹10,000 in the Campus Automation Hackathon by GDSC, VNRVJIET, and achieved 34th rank out of 1,500 participants in the KIMO Tech Competition, VNRVJIET.",
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/70 to-pink-50/60 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/20"></div>
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-30 dark:opacity-10 pointer-events-none"></div>

      {/* Animated background elements */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <SectionHeader title="Achievements" description="My notable accomplishments and recognitions." />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
                <CardContent className="pt-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
