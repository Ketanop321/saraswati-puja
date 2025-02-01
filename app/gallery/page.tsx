import Gallery3D from "../../components/Gallery3D"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import BlessingsOfKnowledge from "../../components/BlessingsOfKnowledge"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-yellow-800 mb-8 text-center font-rozha-one">Saraswati Puja Gallery</h1>
        <Gallery3D />
      </div>
      <BlessingsOfKnowledge />
      <Footer />
    </main>
  )
}

