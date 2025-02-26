import React from 'react'
import {Route,Routes} from "react-router-dom"
import Landingpage from './FirstPage/landingpage'
import Category from './secondPage/Category'
import Contact from './ThirdPage/Contact'
import About from './FourPage/About'
import Login from './components/Login'
import Signup from './components/SignUp'

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element = {<Landingpage></Landingpage>}></Route>
      <Route path='/Category' element = {<Category></Category>}></Route>
      <Route path='/Contact' element = {<Contact></Contact>}></Route>
      <Route path='/About' element = {<About></About>}></Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
     </Routes>
    </>
  )
}

export default App