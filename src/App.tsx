import React, { useState, useEffect } from 'react';
import { LoadingAnimation } from './components/LoadingAnimation';
import { Navbar } from './components/Navbar';
import { ImageSlider } from './components/ImageSlider';
import Scene3D from './components/Scene3D';
import { Footer } from './components/Footer';
import { Music, Book, Feather } from 'lucide-react';
 
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen">
        <ImageSlider />
      </section>

      {/* 3D Scene Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Scene3D />
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                🌸
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="py-12 bg-yellow-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Music, title: 'Divine Music', desc: 'The celestial sound of Veena' },
              { icon: Book, title: 'Knowledge', desc: 'The essence of wisdom' },
              { icon: Feather, title: 'Artistic Grace', desc: 'The flow of creativity' }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg
                                        transform hover:scale-105 transition-transform duration-300">
                <Icon className="w-12 h-12 text-yellow-800 mb-4" />
                <h3 className="text-xl font-sanskrit text-yellow-900 mb-2">{title}</h3>
                <p className="text-yellow-700 text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600
                      text-white py-3 px-4 text-center transform animate-pulse">
        <p className="font-sanskrit text-lg">
          ॐ Blessings of Knowledge ॐ
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;