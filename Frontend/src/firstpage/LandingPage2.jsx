import React from 'react'
import Navbar2 from '../components/Navbar2'
import Banner from '../components/Banner'
import Feature from '../components/Feature'
import TestCourse from '../components/TestCourse'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import TestimonialSlider from '../components/TestimonialSlider'

function LandingPage2() {
  return (
    <>
    <Navbar2></Navbar2>
    <Banner></Banner>
      <Feature></Feature>
      <TestimonialSlider></TestimonialSlider>
      <TestCourse></TestCourse>
      <FAQ/>
      <Footer></Footer>
  </>
  )
}

export default LandingPage2