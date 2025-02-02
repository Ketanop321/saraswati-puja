'use client'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import BlessingsOfKnowledge from "../../components/BlessingsOfKnowledge"  
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Info } from 'lucide-react';

const CollegeGallery = () => {
  // College events data with actual event details and images
  const events = [
    {
      id: 1,
      title: "Annual Cultural Festival",
      images: {
        front: "images/IMG-20250113-WA0009.jpg",
        back: "images/IMG-20250113-WA0010.jpg"
      },
      date: "March 15, 2024",
      venue: "Main Auditorium",
      description: "A vibrant celebration showcasing student talents through music, dance, and theatrical performances.",
      highlights: [
        "Inter-college dance competition",
        "Music band performances",
        "Fashion show"
      ]
    },
    {
      id: 2,
      title: "Tech Symposium 2024",
      images: {
        front: "/images/IMG-20250113-WA0011.jpg",
        back: "/images/IMG-20250113-WA0012.jpg"
      },
      date: "April 5, 2024",
      venue: "Engineering Block",
      description: "Annual technical festival featuring cutting-edge project exhibitions and workshops.",
      highlights: [
        "Project showcase",
        "Robotics competition",
        "Coding challenges"
      ]
    },
    {
      id: 3,
      title: "Sports Meet",
      images: {
        front: "/images/IMG-20250113-WA0013.jpg",
        back: "/images/IMG-20250113-WA0014.jpg"
      },
      date: "February 20, 2024",
      venue: "College Stadium",
      description: "Annual sports event bringing together athletes from all departments.",
      highlights: [
        "Track and field events",
        "Basketball tournament",
        "Cricket championship"
      ]
    },
    {
      id: 4,
      title: "Graduation Day",
      images: {
        front: "/images/IMG-20250113-WA0015.jpg",
        back: "/images/IMG-20250113-WA0016.jpg"
      },
      date: "May 30, 2024",
      venue: "College Ground",
      description: "Celebrating the achievements of our graduating batch.",
      highlights: [
        "Degree distribution",
        "Honor roll ceremony",
        "Guest speeches"
      ]
    },
    {
      id: 5,
      title: "Alumni Meet",
      images: {
        front: "/images/IMG-20250113-WA0009.jpg",
        back: "/images/IMG-20250113-WA0010.jpg"
      },
      date: "January 15, 2024",
      venue: "Conference Hall",
      description: "Annual gathering connecting current students with successful alumni.",
      highlights: [
        "Networking sessions",
        "Success stories",
        "Career guidance"
      ]
    },
    {
      id: 6,
      title: "Science Exhibition",
      images: {
        front: "/images/IMG-20250113-WA0011.jpg",
        back: "/images/IMG-20250113-WA0012.jpg"
      },
      date: "March 1, 2024",
      venue: "Science Block",
      description: "Showcasing innovative scientific projects and experiments.",
      highlights: [
        "Live demonstrations",
        "Research presentations",
        "Interactive exhibits"
      ]
    }
  ];

  return (
    <>
     <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-12">
      {/* Header Section */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-3">
            Saraswati puja  Gallery
          </h1>
          <p className="text-gray-600 text-center text-lg">
            Explore Our puja Events and Activities
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
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
      </div>
    </div>

      <BlessingsOfKnowledge />
          <Footer />
    </>
  );
};

export default CollegeGallery;