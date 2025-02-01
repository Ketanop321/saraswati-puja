import "./globals.css"
import { Inter, Rozha_One } from "next/font/google"
import CustomCursor from "../components/CustomCursor"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const rozhaOne = Rozha_One({ weight: "400", subsets: ["latin"], variable: "--font-rozha-one" })

export const metadata = {
  title: "Saraswati Puja Celebration",
  description: "Celebrate the festival of knowledge and wisdom",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rozhaOne.variable} font-sans bg-gradient-to-b from-yellow-100 to-white`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

