import React from 'react'
import Hero from '../components/Main/Hero'
import Base from '../components/Misc/Base'
import ContactForm from '../components/Misc/ContactForm'
import Footer from '../components/Misc/Footer'
import Navbar from '../components/Misc/Navbar'
import Slider from '../components/Misc/Slider'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Slider/>
    <Base/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Main