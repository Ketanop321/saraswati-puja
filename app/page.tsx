import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LoadingAnimation from "../components/LoadingAnimation"
import Carousel from "../components/Carousel"
import SaraswatiStatue from "../components/SaraswatiStatue"
import BlessingsOfKnowledge from "../components/BlessingsOfKnowledge"
import dynamic from 'next/dynamic'

// Dynamically import the 3D component to prevent initial load blocking
const SaraswatiStatueDynamic = dynamic(
  () => import('../components/SaraswatiStatue'),
  {
    loading: () => (
      <div className="w-full h-[800px] flex items-center justify-center">
        <div className="animate-pulse">Loading 3D View...</div>
      </div>
    ),
    ssr: false // Disable server-side rendering for the 3D component
  }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-white">
      <LoadingAnimation />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-yellow-800 mb-8 text-center font-rozha-one">
          Welcome to Saraswati Puja
        </h1>
        <Carousel />
        <SaraswatiStatueDynamic />
        <BlessingsOfKnowledge />
      </div>
      <Footer />
    </main>
  )
}