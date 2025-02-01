import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-yellow-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-yellow-800 hover:text-yellow-900">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-yellow-800 hover:text-yellow-900">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-yellow-800 hover:text-yellow-900">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-yellow-800 hover:text-yellow-900">
            <span className="sr-only">YouTube</span>
            <FaYoutube className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 text-center text-yellow-800">
          <p>&copy; 2023 CIMAGE Saraswati Puja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

