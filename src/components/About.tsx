import React from 'react';

export function About() {
  return (
    <section className="min-h-screen bg-yellow-50/90 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-sanskrit text-yellow-800 mb-8">About Saraswati Puja</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-yellow-900">
              Saraswati Puja, also known as Basant Panchami, is a festival that celebrates
              the goddess of knowledge, music, art, wisdom, and learning.
            </p>
            <p className="text-yellow-900">
              The celebration typically falls in late January or early February, marking
              the beginning of spring and the season of learning.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-sanskrit text-yellow-800 mb-4">Significance</h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-900">
                <li>Blessing of knowledge and wisdom</li>
                <li>Beginning of learning endeavors</li>
                <li>Celebration of arts and culture</li>
                <li>Spring season welcome</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-sanskrit text-yellow-800 mb-4">Traditions</h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-900">
                <li>Wearing yellow attire</li>
                <li>Offering yellow flowers</li>
                <li>Special prayers for students</li>
                <li>Cultural performances</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-sanskrit text-yellow-800 mb-4">Celebrations</h3>
              <p className="text-yellow-900">
                The day is marked by special prayers, cultural programs, and the blessing
                of books and instruments. Students seek blessings for their academic pursuits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}