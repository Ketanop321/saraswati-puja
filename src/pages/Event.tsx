import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"


export default function EventsPage() {
  const events = [
    {
      title: "Saraswati Puja Celebration",
      date: "February 16, 2024",
      description: "Join us for the annual Saraswati Puja celebration.",
    },
    {
      title: "Cultural Program",
      date: "February 17, 2024",
      description: "Enjoy performances by local artists and students.",
    },
    {
      title: "Knowledge Sharing Session",
      date: "February 18, 2024",
      description: "Learn about the significance of Saraswati Puja and its traditions.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-yellow-800 mb-8 text-center font-rozha-one">Upcoming Events</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
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

