"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <p className="text-muted-foreground">
                I'm a Computer Science and Business Systems student at VNR Vignana Jyothi Institute of Engineering and
                Technology in Hyderabad, India. Currently, I'm working as a Web Development Intern at Khushi Health &
                Happiness.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about creating efficient, user-friendly web applications and have experience with various
                technologies including React, JavaScript, and data analysis tools.
              </p>
            </div>

            <div className="space-y-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <div>
                <h3 className="font-medium">Education</h3>
                <p className="text-muted-foreground">
                  Bachelor of Technology in Computer Science and Business Systems
                  <br />
                  VNR Vignana Jyothi Institute of Engineering and Technology
                  <br />
                  Nov 2022 – Apr 2026 | CGPA: 8.87
                </p>
              </div>

              <div>
                <h3 className="font-medium">Contact</h3>
                <p className="text-muted-foreground">
                  📞 +91 99490 10340
                  <br />📧 bhanutejaybt.2004@gmail.com
                  <br />🌐 linkedin.com/in/bhanutejay
                  <br />💻 github.com/bhanuteja3264
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
