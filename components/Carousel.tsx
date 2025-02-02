"use client"

import React, { useState, useEffect } from "react"
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

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
        {/* Navigation arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image slides */}
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                  sizes="(max-width: 1536px) 100vw, 1536px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 transform gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;