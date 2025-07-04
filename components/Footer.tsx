import React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

export default React.memo(function Footer() {
  return (
    <footer className="bg-yellow-900 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-8 mb-6">
            <a 
              href="https://www.facebook.com/cimage/" 
              className="text-yellow-200 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="h-7 w-7" />
            </a>
            <a 
              href="https://x.com/cimagecollege/status/1479346646785818627" 
              className="text-yellow-200 hover:text-white transition-colors duration-200"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-7 w-7" />
            </a>
            <a 
              href="https://www.instagram.com/cimagecollege/" 
              className="text-yellow-200 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-7 w-7" />
            </a>
            <a 
              href="https://www.youtube.com/@cimage2" 
              className="text-yellow-200 hover:text-white transition-colors duration-200"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="h-7 w-7" />
            </a>
          </div>
          <div className="border-t border-yellow-700 w-32 my-4"></div>
          <div className="text-center text-yellow-200">
            <p className="text-sm md:text-base">&copy; 2026 CIMAGE Saraswati Puja. All rights reserved.</p>
            <p className="text-xs mt-2 opacity-80">Designed with ❤️ for devotees of Maa Saraswati</p>
          </div>
        </div>
      </div>
    </footer>
  )
})
