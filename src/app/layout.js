import NavBar from '@/components/navbar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Wizdom Harvester Blog',
  description: 'A space dedicated to my analyses and reflections on the books I have read, breaking down and examining the best ideas and teachings from each literary work.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <NavBar/>
            {children}
            <Footer/>
            </div>
        </div>
        </body>
    </html>
  )
}
