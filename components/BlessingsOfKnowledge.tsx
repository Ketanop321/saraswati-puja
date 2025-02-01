"use client"

import { motion } from "framer-motion"

export default function BlessingsOfKnowledge() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-yellow-100 p-4 text-center"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.h2 className="text-2xl font-bold text-yellow-800 font-rozha-one" whileHover={{ scale: 1.1 }}>
        Blessings of Knowledge
      </motion.h2>
      <motion.p
        className="mt-2 text-yellow-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        May Goddess Saraswati bless you with wisdom and creativity
      </motion.p>
    </motion.div>
  )
}

