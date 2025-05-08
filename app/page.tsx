"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Code2, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl space-y-6"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome to <span className="text-blue-400">CodeGPT Lab</span>
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-300">
          A smart coding assistant + code editor built with Next.js, Tailwind CSS, Framer Motion, and more.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            onClick={() => router.push("/editor")}
            className="gap-2"
            variant="secondary"
          >
            <Code2 size={18} /> Open Code Editor
          </Button>

          <Button
            onClick={() => router.push("/chat")}
            className="gap-2"
            variant="secondary"
          >
            <Bot size={18} /> Chat Assistant
          </Button>

          <Button
            onClick={() => router.push("/profile")}
            className="gap-2"
          >
            <User size={18} /> Profile
          </Button>
        </motion.div>

        <motion.p
          className="text-sm text-gray-400 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Made with ❤️ by Balram Tiwari
        </motion.p>
      </motion.div>
    </main>
  )
}
