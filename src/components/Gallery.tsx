import React, { useEffect, useRef, useState } from 'react';

const Diapo = ({
  index,
  img,
  x,
  y,
  z,
  onLoad,
  onClick,
  selected,
  camera,
  screenDimensions
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (img?.src && imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
        setDimensions({
          w: imageRef.current.width,
          h: imageRef.current.height
        });
        onLoad?.();
      };
    }
  }, [img?.src]);

  const calculateStyle = () => {
    if (!isLoaded && !img?.isFog) return {};

    const relX = x - camera.x;
    const relY = y - camera.y;
    let relZ = z - camera.z;

    if (relZ < 20) relZ += 5000;

    const p = camera.fov / relZ;
    const w = (dimensions.w || 300) * p;
    const h = (dimensions.h || 300) * p;

    return {
      position: 'absolute',
      left: `${Math.round(screenDimensions.nw + relX * p - w * 0.5)}px`,
      top: `${Math.round(screenDimensions.nh + relY * p - h * 0.5)}px`,
      width: `${Math.round(w)}px`,
      height: `${Math.round(h)}px`,
      zIndex: 25000 - Math.round(relZ),
      imageRendering: 'optimizeSpeed',
      cursor: 'pointer'
    };
  };

  if (img?.isFog) {
    return (
      <div 
        className="absolute bg-white opacity-10"
        style={calculateStyle()}
      />
    );
  }

  return (
    <img
      ref={imageRef}
      src={img?.src}
      alt={img?.title || ''}
      className={selected ? 'border border-dotted border-white' : ''}
      style={{
        ...calculateStyle(),
        left: isLoaded ? calculateStyle().left : '-9999px'
      }}
      onClick={onClick}
    />
  );
};

const Gallery3D = () => {
  const screenRef = useRef(null);
  const [camera, setCamera] = useState({
    x: 0,
    y: 0,
    z: -650,
    s: 0,
    fov: 500,
    tx: 0,
    ty: 0,
    tz: 0
  });
  const [screenDimensions, setScreenDimensions] = useState({ nw: 0, nh: 0 });
  const [selected, setSelected] = useState(null);
  
  const images = [
    {
      src: "/api/placeholder/400/320",
      url: "https://www.github.com/haunt99",
      title: "jump to random script",
      color: "#fff"
    },
    { src: "/IMG-20250113-WA0009.jpg" },
    { src: "/models/IMG-20250113-WA0010.jpg" },
    { src: "/models/IMG-20250113-WA0011.jpg" },
    { src: "/models/IMG-20250113-WA0012.jpg" },
    { src: "/models/IMG-20250113-WA0013.jpg" },
    { src: "/models/IMG-20250113-WA0014.jpg" },
    { src: "/models/IMG-20250113-WA0016.jpg" },
   
  ];

  const [diapos, setDiapos] = useState([]);

  useEffect(() => {
    const updateDimensions = () => {
      if (screenRef.current) {
        setScreenDimensions({
          nw: screenRef.current.offsetWidth * 0.5,
          nh: screenRef.current.offsetHeight * 0.5
        });
      }
    };

    // Initialize diapos
    const newDiapos = [];
    images.forEach((img, i) => {
      const x = 1000 * ((i % 4) - 1.5);
      const y = Math.round(Math.random() * 4000) - 2000;
      const z = i * (5000 / images.length);
      
      newDiapos.push({ img, x, y, z });

      // Add fog elements
      for (let j = 0; j < 3; j++) {
        newDiapos.push({
          img: { isFog: true },
          x: Math.round(Math.random() * 4000) - 2000,
          y: Math.round(Math.random() * 4000) - 2000,
          z: z + 100
        });
      }
    });
    setDiapos(newDiapos);

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const animate = () => {
      setCamera(prevCamera => {
        const newCamera = { ...prevCamera };
        
        if (newCamera.tx) {
          if (!newCamera.s) {
            newCamera.s = 1;
            newCamera.p = 0;
            newCamera.d = newCamera.tx - newCamera.x;
          }
          
          newCamera.p += newCamera.s;
          newCamera.x += newCamera.d * newCamera.p * 0.01;
          
          if (newCamera.p === 10) newCamera.s = -1;
          else if (newCamera.p === 0) {
            newCamera.s = 0;
            newCamera.tx = 0;
          }
        }
        
        return newCamera;
      });
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [camera]);

  const handleImageClick = (diapo) => {
    if (camera.s) return;

    setCamera(prev => ({
      ...prev,
      tz: diapo.z - camera.fov,
      tx: diapo.x,
      ty: diapo.y
    }));

    setSelected(diapo);
  };

  return (
    <div ref={screenRef} className="absolute w-full h-full bg-black overflow-hidden">
      <div className="absolute left-4 top-4 w-32 z-[30000] bg-black border-4 border-solid border-black">
        <h1 className="text-white">deliberate lies</h1>
        <div className="text-white">Defiant, stony, deliberate, their lies will not get in my way.</div>
        <div className="relative left-4 top-4 h-40">
          {images.map((img, i) => (
            <button
              key={i}
              className={`absolute w-5 h-5 cursor-pointer transition-colors
                ${selected?.img === img ? 'bg-red-500' : 'bg-gray-600'}`}
              style={{
                left: `${Math.round(24 * 1.2 * (i % 4))}px`,
                top: `${Math.round(24 * 1.2 * Math.floor(i / 4))}px`
              }}
              onClick={() => handleImageClick(diapos[i * 4])}
            />
          ))}
        </div>
      </div>

      {diapos.map((diapo, i) => (
        <Diapo
          key={i}
          {...diapo}
          camera={camera}
          screenDimensions={screenDimensions}
          selected={selected?.img === diapo.img}
          onClick={() => handleImageClick(diapo)}
        />
      ))}

      {selected?.img?.url && (
        <div 
          className="absolute z-[30000] pl-3 cursor-pointer"
          style={{
            visibility: 'visible',
            color: selected.img.color || '#fff'
          }}
          onClick={() => window.location.href = selected.img.url}
        >
          {selected.img.title || selected.img.url}
        </div>
      )}
    </div>
  );
};

export  {Gallery3D};