import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-yellow-900 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-8 mb-6">
            <a 
              href="#" 
              className="text-yellow-200 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="h-7 w-7" />
            </a>
            <a 
              href="#" 
              className="text-yellow-200 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="h-7 w-7" />
            </a>
            <a 
              href="#" 
              className="text-yellow-200 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="h-7 w-7" />
            </a>
            <a 
              href="#" 
              className="text-yellow-200 hover:text-white transition-colors duration-200"
              aria-label="YouTube"
            >
              <FaYoutube className="h-7 w-7" />
            </a>
          </div>
          <div className="border-t border-yellow-700 w-32 my-4"></div>
          <div className="text-center text-yellow-200">
            <p className="text-sm md:text-base">&copy; 2023 CIMAGE Saraswati Puja. All rights reserved.</p>
            <p className="text-xs mt-2 opacity-80">Designed with ❤️ for devotees of Maa Saraswati</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

