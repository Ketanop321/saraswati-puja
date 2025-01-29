import React, { useEffect, useRef, useState } from 'react';
import "../components/ImageSlider.css";




const ImageSlider = () => {
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setPrev] = useState(false);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);
  const runTimeOutRef = useRef(null);
  const runNextAutoRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  // Array of image paths
  const imagePaths = [
    '/models/IMG-20250113-WA0009.jpg',
    '/models/IMG-20250113-WA0010.jpg',
    '/models/IMG-20250113-WA0011.jpg',
    '/models/IMG-20250113-WA0012.jpg',
    '/models/IMG-20250113-WA0013.jpg',
    '/models/IMG-20250113-WA0014.jpg',
    '/models/IMG-20250113-WA0015.jpg',
    '/models/IMG-20250113-WA0016.jpg'
  ];

  const showSlider = (type) => {
    const sliderItemsDom = sliderRef.current.querySelectorAll('.item');
    const thumbnailItemsDom = thumbnailBorderRef.current.querySelectorAll('.item');

    if (type === 'next') {
      sliderRef.current.appendChild(sliderItemsDom[0]);
      thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
      setIsNext(true);
      setPrev(false);
    } else {
      sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      setIsNext(false);
      setPrev(true);
    }

    clearTimeout(runTimeOutRef.current);
    runTimeOutRef.current = setTimeout(() => {
      setIsNext(false);
      setPrev(false);
    }, timeRunning);

    clearTimeout(runNextAutoRef.current);
    runNextAutoRef.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);
  };

  useEffect(() => {
    // Initial auto-next setup
    runNextAutoRef.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    // Move first thumbnail to end on mount
    const thumbnailItems = thumbnailBorderRef.current.querySelectorAll('.item');
    thumbnailBorderRef.current.appendChild(thumbnailItems[0]);

    // Cleanup
    return () => {
      clearTimeout(runTimeOutRef.current);
      clearTimeout(runNextAutoRef.current);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="">Home</a>
          <a href="">Contacts</a>
          <a href="">Info</a>
        </nav>
      </header>

      <div className={`carousel ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`} ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          {imagePaths.map((path, index) => (
            <div key={`slide-${index}`} className="item">
              <img src={path} alt={`Slide ${index + 1}`} />
              <div className="content">
                <div className="author">LUNDEV</div>
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">ANIMAL</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, 
                  itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut 
                  doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, 
                  exercitationem eum aperiam illo illum laudantium?
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailBorderRef}>
          {imagePaths.map((path, index) => (
            <div key={`thumb-${index}`} className="item">
              <img src={path} alt={`Thumbnail ${index + 1}`} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button onClick={() => showSlider('prev')}>&lt;</button>
          <button onClick={() => showSlider('next')}>&gt;</button>
        </div>

        <div className="time" ref={timeRef}></div>
      </div>
    </>
  );
};

export default ImageSlider;