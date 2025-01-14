import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-yellow-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {[
              { Icon: Facebook, href: '#' },
              { Icon: Twitter, href: '#' },
              { Icon: Instagram, href: '#' },
              { Icon: Youtube, href: '#' }
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-yellow-800 hover:text-yellow-600 transition-colors duration-200
                         transform hover:scale-110"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="text-yellow-800 text-sm text-center">
            © {new Date().getFullYear()} Saraswati Puja Celebration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};