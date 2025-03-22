import React from 'react'

function Infro() {
  return (
    <div className='px-4'>
      <section className="bg-blue-900 text-white  flex items-center px-6 md:px-20 pt-28 sm:pt-48 pb-28 sm:pb-48">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full gap-10">
          <div className="md:w-3/5">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Our Bookstore</h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-lg sm:text-3xl  leading-relaxed">
              Our bookstore is dedicated to providing a vast collection of books across multiple genres. Whether you are a fiction lover, a non-fiction enthusiast, or a student searching for academic resources, we have something for everyone. Our passion for books drives us to curate the best selections for our customers.
            </p>
          </div>
          <div className="md:w-2/5 ">
            <div className="sm:pl-6">
              <img src="https://img.freepik.com/premium-photo/funny-illustrated-blue-fish-reading-book_183364-23668.jpg?ga=GA1.1.224097840.1739536351&semt=ais_hybrid" alt="" className='rounded-lg w-[700px] ' />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Infro