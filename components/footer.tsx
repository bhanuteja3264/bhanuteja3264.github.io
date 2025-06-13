"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg">Bhanu Teja Yerram</h3>
            <p className="text-muted-foreground text-sm">Computer Science & Business Systems Student</p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://linkedin.com/in/bhanutejay"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/bhanuteja3264"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:bhanutejaybt.2004@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="tel:+919949010340" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Bhanu Teja Yerram</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
