import '@/styles/globals/variables.css'
import '@/styles/globals/reset.css'
import '@/styles/globals/base.css'
import '@/styles/vendor/burger.css'
import '@/styles/vendor/slider.css'

import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--inter-font'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${inter.className}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
