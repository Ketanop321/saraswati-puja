"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/images/IMG-20250113-WA0009.jpg", alt: "Saraswati Idol" },
  { src: "/images/IMG-20250113-WA0010.jpg", alt: "Cultural Performance" },
  { src: "/images/IMG-20250113-WA0011.jpg", alt: "Puja Ceremony" },
  { src: "/images/IMG-20250113-WA0012.jpg", alt: "Prasad Distribution" },
  { src: "/images/IMG-20250113-WA0013.jpg", alt: "Prasad Distribution" },
  { src: "/images/IMG-20250113-WA0014.jpg", alt: "Prasad Distribution" },
  { src: "/images/IMG-20250113-WA0015.jpg", alt: "Prasad Distribution" },
  { src: "/images/IMG-20250113-WA0016.jpg", alt: "Prasad Distribution" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    )
  }

  return (
    <div className="p-8 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg">
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg border-8 border-double border-amber-800 shadow-2xl bg-amber-50">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-amber-900 m-2"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-amber-900 m-2"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-amber-900 m-2"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-amber-900 m-2"></div>

        {/* Navigation buttons */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 text-amber-900" />
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 text-amber-900" />
        </button>

        {/* Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="p-2"
            />
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-amber-900 w-6"
                  : "bg-amber-900/40 hover:bg-amber-900/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel