import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import Sidebar from '../components/Sidebar';

function Catalouge({ cart, removeFromCart, fav, removeFromFav }) {
  const [activeTab, setActiveTab] = useState('cart');

  return (
    <div>
      <Navbar />
      <div className='flex flex-col sm:flex-row min-h-screen px-4'>

        {/* Sidebar Component */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Section */}
        <div className='w-full order-2 sm:w-4/5 p-8'>
          <Cart cart={cart} removeFromCart={removeFromCart} fav={fav} removeFromFav={removeFromFav} view={activeTab}/>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Catalouge;


