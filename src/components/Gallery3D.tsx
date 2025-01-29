"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import styles from "./Gallery3D.module.css"
import { init } from "../../lib/gallery3d"

const Gallery3D: React.FC = () => {
  const screenRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const urlInfoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (screenRef.current && barRef.current && urlInfoRef.current) {
      init(screenRef.current, barRef.current, urlInfoRef.current)
    }
  }, [])

  return (
    <div className={styles.body}>
      <div id="screen" ref={screenRef} className={styles.screen}>
        <div id="command" className={styles.command}>
          <h2 className="text-2xl font-bold mb-2 font-rozha-one">Saraswati Puja Memories</h2>
          <p className="text-sm">Explore our collection of beautiful moments from past celebrations.</p>
          <div id="bar" ref={barRef} className={styles.bar}></div>
        </div>
        <div id="urlInfo" ref={urlInfoRef} className={styles.urlInfo}></div>
      </div>
    </div>
  )
}

export default Gallery3D

