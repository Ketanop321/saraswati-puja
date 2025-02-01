"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-yellow-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-yellow-800 font-rozha-one">
              CIMAGE
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-800 hover:text-yellow-900 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

