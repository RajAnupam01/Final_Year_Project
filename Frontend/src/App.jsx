import React from 'react'
import { Route,Routes} from "react-router-dom"
import Landingpage from './FirstPage/landingpage'
import Category from './secondPage/Category'
import Contact from './ThirdPage/Contact'
import About from './FourPage/About'
import Catalouge from './FifthPage/Catalouge'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <>

     <Routes>

      <Route path='/' element = {<Signup/>}></Route>
      <Route path='/Signup'element = {<Signup></Signup>}></Route>
      <Route path='/Login' element = {<Login/>}></Route>
      <Route path='/Landingpage' element = {<Landingpage></Landingpage>}></Route>
      <Route path='/Category' element = {<Category></Category>}></Route>
      <Route path='/Contact' element = {<Contact></Contact>}></Route>
      <Route path='/About' element = {<About></About>}></Route>
      <Route path='/Catalouge' element={<Catalouge></Catalouge>}></Route>
     </Routes>
  
    </>
  )
}

export default App