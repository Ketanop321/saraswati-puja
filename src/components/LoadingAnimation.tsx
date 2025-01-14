import React, { useEffect, useState } from 'react';

export const LoadingAnimation = () => {
  const [text, setText] = useState('');
  const fullText = 'CIMAGE';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-white z-50">
      <h1 className="text-6xl md:text-8xl font-sanskrit text-yellow-800">
        {text}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};