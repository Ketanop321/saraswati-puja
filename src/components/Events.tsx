import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Main Puja Ceremony',
    date: 'February 14, 2024',
    time: '7:00 AM - 11:00 AM',
    location: 'Main Temple Hall',
    description: 'Traditional Saraswati Puja with vedic mantras and offerings'
  },
  {
    title: 'Cultural Program',
    date: 'February 14, 2024',
    time: '4:00 PM - 7:00 PM',
    location: 'Community Center',
    description: 'Dance, music, and theatrical performances by students'
  },
  {
    title: 'Art Exhibition',
    date: 'February 14-15, 2024',
    time: '10:00 AM - 6:00 PM',
    location: 'Art Gallery',
    description: 'Exhibition of paintings and sculptures by local artists'
  }
];

export function Events() {
  return (
    <section className="min-h-screen bg-yellow-50/90 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-sanskrit text-yellow-800 mb-12">Upcoming Events</h1>
        
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-sanskrit text-yellow-800 mb-4">{event.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-yellow-900">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-yellow-900">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-yellow-900">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-yellow-700 mt-4">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}