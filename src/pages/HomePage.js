import React from 'react'
import {
  About,
  Contact,
  Featured,
  Footer,
  Gallery,
  Header,
  Hero,
  Services,
} from '../components'
import { useGlobalContext } from '../context/Context'
const HomePage = () => {
  const { toggleNavbar } = useGlobalContext()
  return (
    <>
      <Header />
      <main id='home' onClick={toggleNavbar}>
        <Hero />
        <About />
        <Services />
        <Featured />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
