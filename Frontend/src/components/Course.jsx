import React, { useState } from 'react';
import Card from './Card';
import { myData } from '../Data';

function Course({ addToCart, addToFav}) {


  return (
    <div className='px-4'>
      {/* Horror Section */}
      <div className='flex flex-col mt-10 sm:p-20 p-10  bg-yellow-100
      '>
        <h1 className='text-5xl font-bold text-center mb-12'>Horror Section</h1>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-y-10'>
          {myData.filter(book => book.category === "horrorBooks").map((book, index) => (
           <Card key={index} {...book} addToCart={addToCart} addToFav={addToFav} />
          ))}
        </div>
      </div>

      {/* Non-Fiction Section */}
      <div className='flex flex-col mt-10 sm:p-20 p-10 bg-yellow-100'>
        <h1 className='text-5xl font-bold text-center mb-12'>Non-Fiction</h1>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-y-10'>
          {myData.filter(book => book.category === "nonFictionBooks").map((book, index) => (
            <Card key={index} {...book} addToCart={addToCart} addToFav={addToFav} />
          ))}
        </div>
      </div>

      {/* Comics Section */}
      <div className='flex flex-col mt-10 sm:p-20 p-10 bg-yellow-100'>
        <h1 className='text-5xl font-bold text-center mb-12'>Comics</h1>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-y-10'>
          {myData.filter(book => book.category === "comicsBooks").map((book, index) => (
            <Card key={index} {...book} addToCart={addToCart} addToFav={addToFav} />
          ))}
        </div>
      </div>

      {/* Sci-Fi Section */}
      <div className='flex flex-col mt-10 sm:p-20 p-10 bg-yellow-100'>
        <h1 className='text-5xl font-bold text-center mb-12'>Sci-Fi</h1>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-y-10'>
          {myData.filter(book => book.category === "sciFiBooks").map((book, index) => (
            <Card key={index} {...book} addToCart={addToCart} addToFav={addToFav} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;

