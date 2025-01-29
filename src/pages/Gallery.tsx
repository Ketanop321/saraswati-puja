import Gallery3D from "../components/Gallery3D"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
 
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-yellow-800 mb-8 text-center font-rozha-one">Saraswati Puja Gallery</h1>
        <Gallery3D />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600
                      text-white py-3 px-4 text-center transform animate-pulse">
        <p className="font-sanskrit text-lg">
          ॐ Blessings of Knowledge ॐ
        </p>
      </div>    
        <Footer />
    </main>
  )
}
