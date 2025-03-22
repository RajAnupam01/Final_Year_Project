import React from 'react'
import Navbar from '../components/Navbar'
import Banner from "../components/Banner"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import TestimonialSlider from '../components/TestimonialSlider'
import FAQ from '../components/FAQ'
import TestCourse from '../components/TestCourse'


function Landingpage() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Feature></Feature>
      <TestimonialSlider></TestimonialSlider>
      <TestCourse></TestCourse>
      <FAQ/>
      <Footer></Footer>
    </>
  )
}

export default Landingpage