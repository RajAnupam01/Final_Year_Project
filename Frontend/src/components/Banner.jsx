import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
     <div className='px-4'>
      <div
        className="hero min-h-screen sm:h-auto pt-20 p-4"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJvb2tzfGVufDB8fDB8fHww)", backgroundRepeat: "no-repeat"
        }}>
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className='space-y-12'>
            <h1 className="mb-5 text-6xl md:text-5xl sm:text-3xl font-bold leading-tight sm:leading-snug">
            Explore a vast collection of books across all genres. From bestsellers to timeless classics.
            </h1>
            <p className="mb-5 text-2xl md:text-xl sm:text-lg">
            Discover a world of imagination, knowledge, and adventure with our curated selection of books. Whether you love thrilling mysteries, heartwarming romances, inspiring self-help guides, or timeless classics, there's something for every reader.
            </p>
            <button className="btn btn-primary"><Link className='text-xl' to='/Category'>Get Started</Link></button>
          </div>
        </div>
      </div>
     </div>
  );
}

export default Banner;
