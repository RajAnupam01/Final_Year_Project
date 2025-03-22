import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './firstPage/LandingPage';
import LandingPage2 from './firstPage/LandingPage2';
import Category from './secondPage/Category';
import Category2 from './secondPage/Category2';
import Contact from './ThirdPage/Contact';
import About from './FourPage/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './SixthPage/Dashboard';
import Catalouge from './FifthPage/Catalouge';
import { myData } from './Data';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (book) => setCart([...cart, book]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  
  const [fav,setFav] = useState([]);

  const addToFav = (book) => setFav([...fav,book]);
  const removeFromFav = (index) => setFav(fav.filter((_, j) => j !== index));


  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/LandingPage' element={<LandingPage />} />
      <Route path='/LandingPage2' element={<LandingPage2 />} />
      <Route path='/Category' element={<Category courses={myData} addToCart={addToCart} addToFav={addToFav} />} />
      <Route path='/Category2' element={<Category2 />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/About' element={<About />} />
      <Route path='/Catalouge' element={<Catalouge cart={cart} removeFromCart={removeFromCart} fav={fav} removeFromFav={removeFromFav} />} />
      <Route path='/Dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
