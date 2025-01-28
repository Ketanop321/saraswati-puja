import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SliderItem {
  image: string;
  author: string;
  title: string;
  topic: string;
  description: string;
}

const items: SliderItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1624456735729-03594a40c5fb',
    author: 'SARASWATI',
    title: 'DIVINE WISDOM',
    topic: 'KNOWLEDGE',
    description: 'Goddess Saraswati, the embodiment of knowledge, music, art, wisdom, and learning. She represents the free flow of wisdom and consciousness.'
  },
  {
    image: 'https://images.unsplash.com/photo-1623244307563-f9ade3df8383',
    author: 'CULTURE',
    title: 'SACRED RITUALS',
    topic: 'TRADITION',
    description: 'The ancient traditions and rituals that connect us to our cultural heritage, passed down through generations.'
  },
  {
    image: 'https://images.unsplash.com/photo-1621506821957-1b50ab7787a4',
    author: 'CELEBRATION',
    title: 'FESTIVE SPIRIT',
    topic: 'DEVOTION',
    description: 'A celebration of learning and creativity, where students and artists seek blessings for their educational and artistic pursuits.'
  }
];

export const ImageSlider = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const currentIndex = useRef(0);

  const showSlider = (type: 'next' | 'prev') => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const list = carousel.querySelector('.list') as HTMLElement;
    const thumbnailBorder = carousel.querySelector('.thumbnail') as HTMLElement;
    
    if (type === 'next') {
      const firstItem = list.firstElementChild as HTMLElement;
      const firstThumbnail = thumbnailBorder.firstElementChild as HTMLElement;
      
      gsap.to(firstItem, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          list.appendChild(firstItem);
          thumbnailBorder.appendChild(firstThumbnail);
          gsap.fromTo(firstItem, 
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5 }
          );
        }
      });
    } else {
      const lastItem = list.lastElementChild as HTMLElement;
      const lastThumbnail = thumbnailBorder.lastElementChild as HTMLElement;
      
      list.prepend(lastItem);
      thumbnailBorder.prepend(lastThumbnail);
      
      gsap.fromTo(lastItem,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );
    }

    // Animate content
    const currentItem = list.children[0] as HTMLElement;
    const content = currentItem.querySelector('.content') as HTMLElement;
    
    gsap.fromTo(content.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    );

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      showSlider('next');
    }, 7000);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      showSlider('next');
    }, 7000);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div ref={carouselRef} className="relative h-screen overflow-hidden">
      <div className="list relative h-full">
        {items.map((item, index) => (
          <div key={index} className="absolute inset-0">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="content absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6">
              <div className="author text-xl tracking-widest font-bold text-white">
                {item.author}
              </div>
              <div className="title text-6xl font-bold text-white mt-4">
                {item.title}
              </div>
              <div className="topic text-6xl font-bold text-yellow-500 mt-2">
                {item.topic}
              </div>
              <div className="description text-lg text-white mt-6 max-w-2xl">
                {item.description}
              </div>
              <div className="buttons mt-8 flex gap-4">
                <button className="px-8 py-3 bg-white text-yellow-900 font-semibold tracking-wider hover:bg-yellow-100 transition-colors">
                  LEARN MORE
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold tracking-wider hover:bg-white/10 transition-colors">
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
        {items.map((item, index) => (
          <div key={index} className="w-36 h-52 relative rounded-lg overflow-hidden cursor-pointer"
               onClick={() => {
                 const diff = index - currentIndex.current;
                 if (diff > 0) {
                   for (let i = 0; i < diff; i++) showSlider('next');
                 } else if (diff < 0) {
                   for (let i = 0; i < Math.abs(diff); i++) showSlider('prev');
                 }
                 currentIndex.current = index;
               }}>
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-4 text-white">
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="text-xs mt-1 opacity-80">{item.topic}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-1/4 right-1/2 flex gap-4">
        <button 
          onClick={() => showSlider('prev')}
          className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white hover:text-yellow-900 transition-colors flex items-center justify-center"
        >
          ←
        </button>
        <button 
          onClick={() => showSlider('next')}
          className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white hover:text-yellow-900 transition-colors flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
};