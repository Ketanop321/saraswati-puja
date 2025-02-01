"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import styles from "./CustomCursor.module.css"

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const particles = particlesRef.current

    if (!cursor || !particles) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`

      // Create particle
      const particle = document.createElement("div")
      particle.className = styles.particle
      particle.style.left = `${e.clientX}px`
      particle.style.top = `${e.clientY}px`
      particles.appendChild(particle)

      // Remove particle after animation
      setTimeout(() => {
        particle.remove()
      }, 1000)
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor}></div>
      <div ref={particlesRef} className={styles.particles}></div>
    </>
  )
}

export default CustomCursor

