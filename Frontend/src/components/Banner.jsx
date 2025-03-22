import React from 'react';
import { Typewriter } from "react-simple-typewriter";

function Banner() {

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser).name : "Guest";

  return (
    <div className='px-4'>
      <div
        className="hero min-h-screen sm:h-auto"
        style={{
          backgroundImage: "url(https://w0.peakpx.com/wallpaper/316/433/HD-wallpaper-books-library-shelves-lighting.jpg)", backgroundRepeat: "no-repeat"
        }}>
        <div className="hero-overlay bg-opacity-75 "></div>
        <div className="hero-content text-neutral-content text-center pt-24 pb-10 sm:pt-2 sm:pb-2">
          <div className='sm:space-y-20 space-y-12'>
            <h1 className="mb-5 text-4xl  sm:text-6xl  font-bold leading-tight sm:leading-snug">
              <Typewriter
                words={["Explore a vast collection of books across all genres. From bestsellers to timeless classics."]}
                loop={2}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </h1>
            <p className="mb-5 text-xl  sm:text-3xl  md:text-2lg leading-tight text-center">
              Discover a world of imagination, knowledge, and adventure with our curated selection of books. Whether you love thrilling mysteries, heartwarming romances, inspiring self-help guides, or timeless classics, there's something for every reader.
            </p>
                <button className="btn-two">{[`Hello ${user}`]}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
