"use client"

import { motion } from "framer-motion"

export default function BlessingsOfKnowledge() {
  return (
    <div className="relative w-full py-8 bg-yellow-100">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-yellow-800 font-rozha-one mb-3"
          whileHover={{ scale: 1.03 }}
        >
          Blessings of Knowledge
        </motion.h2>
        <motion.p
          className="text-yellow-700 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          May Goddess Saraswati bless you with wisdom and creativity
        </motion.p>
      </motion.div>
    </div>
  )
}

