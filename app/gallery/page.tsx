'use client'
import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlessingsOfKnowledge from "../../components/BlessingsOfKnowledge";
import { motion } from 'framer-motion';
import { Calendar, MapPin, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const CollegeGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  // College events data with corrected image paths
  const events = [
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/IMG-20250113-WA0009.jpg",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/IMG-20250113-WA0010.jpg",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/IMG-20250113-WA0011.jpg",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image12.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image13.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image14.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image15.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image16.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image1.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image2.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image3.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image4.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image5.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image6.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image7.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image8.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image9.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image10.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image11.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image12.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image13.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image14.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image15.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image16.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image17.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image18.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image19.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image19.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image20.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image23.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image24.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image25.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image26.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image27.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image28.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image29.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image30.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image31.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 1,
      title: "Cultural Festival",
      images: {
        front: "/images/image31.png",
        back: "/images/image2.png"
      },
      date: "March 15, 2024",
      venue: "Cimage college patliputra",
      description: "An overview of the cultural performances during the puja celebrations.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
   
  ];

  // Pagination calculations
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-12">
        {/* Header Section */}
        <div className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-3">
              Saraswati Puja Gallery
            </h1>
            <p className="text-gray-600 text-center text-lg">
              Explore Our Puja Events and Activities
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group h-[400px] [perspective:1000px]"
              >
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0">
                    <img
                      src={event.images.front}
                      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      alt={event.title}
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-xl">
                      <div className="absolute bottom-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Info className="w-6 h-6 text-white/80" />
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white/90 px-6 py-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                          <span>{event.venue}</span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          {event.highlights.map((highlight, index) => (
                            <li key={index}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-12 flex justify-center items-center space-x-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-blue-100 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-blue-100 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <BlessingsOfKnowledge />
      <Footer />
    </>
  );
};

export default CollegeGallery;