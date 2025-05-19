"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { Badge } from "@/components/ui/badge"
import { FaCode, FaUsers, FaJava, FaReact, FaPython, FaGithub, FaGit, FaBootstrap, FaChartBar } from "react-icons/fa"
import {
  SiCplusplus,
  SiC,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiGooglecloud,
  SiFramer,
  SiReact,
  SiTableau,
} from "react-icons/si"
import { TbSql } from "react-icons/tb"
import { DiScrum } from "react-icons/di"

// Updated skills based on user's GitHub and provided list
const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: TbSql },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "ReactJS", icon: FaReact },
      { name: "Shadcn/ui", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: FaGit },
      { name: "GitHub", icon: FaGithub },
      { name: "Tableau", icon: SiTableau },
      { name: "Power BI", icon: FaChartBar },
      { name: "Google Cloud Platform", icon: SiGooglecloud },
    ],
  },
  {
    name: "Development",
    skills: [
      { name: "SDLC", icon: FaCode },
      { name: "Agile", icon: FaUsers },
      { name: "Scrum", icon: DiScrum },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-100/30 to-pink-100/40 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/20 z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-30 dark:opacity-10 pointer-events-none"></div>

      {/* Animated background elements */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl"
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
        <SectionHeader title="Skills" description="My technical skills and proficiencies." />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-10"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={item} className="space-y-4">
              <h3 className="text-xl font-medium">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} whileHover={{ scale: 1.05 }} className="group">
                    <Badge
                      variant="outline"
                      className="px-3 py-2 text-sm flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm 
                      border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]
                      hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                      transition-all duration-300 group-hover:border-blue-400 dark:group-hover:border-blue-500"
                    >
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "mirror",
                          ease: "easeInOut",
                          repeatDelay: Math.random() * 5,
                        }}
                        className="text-lg text-primary"
                      >
                        <skill.icon />
                      </motion.span>
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
