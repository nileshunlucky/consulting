"use client"

import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Service from '@/Components/Service'
import Newsletter from '@/Components/Newsletter'

export default function Home() {
  return (
    <div>
    <Navbar/>
      <Hero/>
      <Service/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
