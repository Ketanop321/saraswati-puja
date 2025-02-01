"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-yellow-100 to-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      <motion.h1
        className="text-6xl font-bold text-yellow-800 font-rozha-one"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {["C", "I", "M", "A", "G", "E"].map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  )
}

