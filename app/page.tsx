import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LoadingAnimation from "../components/LoadingAnimation"
import Carousel from "../components/Carousel"
import SaraswatiStatue from "../components/SaraswatiStatue"
import BlessingsOfKnowledge from "../components/BlessingsOfKnowledge"

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
        <SaraswatiStatue />
        <BlessingsOfKnowledge />
      </div>
      <Footer />
    </main>
  )
}

