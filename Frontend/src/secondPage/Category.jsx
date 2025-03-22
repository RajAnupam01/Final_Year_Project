import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from "../components/Footer"

function Category({ courses, addToCart, addToFav}) {
  return (
     <>
     <Navbar></Navbar>
     <Course courses={courses} addToCart={addToCart} addToFav={addToFav} />
     <Footer></Footer>
     </>
  )
}

export default Category