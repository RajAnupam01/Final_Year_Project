import React from 'react'
import Card from './Card'

function Course() {
  const horrorBooks = [
    { title: "Dracula", description: "Classic vampire horror novel", image: "https://images.cdn1.buscalibre.com/fit-in/360x360/3d/d7/3dd7b2d52c5f679fab109869c834a5a1.jpg", price:14},
    { title: "It", description: "Stephen King's terrifying masterpiece", image: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/159/526/159526209_d026be.jpg",price:12},
    { title: "The Shining", description: "A horror classic by Stephen King", image: "https://images.cdn2.buscalibre.com/fit-in/360x360/34/09/3409b9ca145cec736d6ed6b26d10e32e.jpg",price:15 },
    { title: "Frankenstein", description: "The birth of horror fiction", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Frankenstein%27s_monster_%28Boris_Karloff%29.jpg", price:12 }
  ];

  const nonFictionBooks = [
    { title: "Sapiens", description: "A brief history of humankind", image: "https://miro.medium.com/v2/resize:fit:592/0*RArKNBFL91CwGeWU", price:21 },
    { title: "Educated", description: "A memoir by Tara Westover", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEd5wOUZEXuR1NXG8yL0sgEBTssc9v0c3rg&s",price:22 },
    { title: "Atomic Habits", description: "Build good habits, break bad ones", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/352699100/PW/GV/HU/121408955/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-hardcover-book.jpg",price:25 },
    { title: "Becoming", description: "Michelle Obama's inspiring journey", image: "https://bookshaul.in/wp-content/uploads/2024/01/becoming.webp",price:22 }
  ];

  const comicsBooks = [
    { title: "Watchmen", description: "A legendary graphic novel", image: "https://m.media-amazon.com/images/I/61BvMZbTw9L._AC_UF1000,1000_QL80_.jpg",price:38 },
    { title: "Batman: The Killing Joke", description: "A dark story of Joker and Batman", image: "https://m.media-amazon.com/images/I/91EHlTozbBL._UF1000,1000_QL80_.jpg",price:35 },
    { title: "Spider-Man: Blue", description: "A heartfelt Spidey story", image: "https://i0.wp.com/comicbookdispatch.com/wp-content/uploads/2024/07/SPECSPIMEN2024006_Preview_page_1.jpeg?resize=720%2C1093&ssl=1",price:36},
    { title: "Maus", description: "A powerful Holocaust story in comic form", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559518970i/45007892.jpg",price:32 }
  ];

  const sciFiBooks = [
    { title: "Dune", description: "A sci-fi masterpiece by Frank Herbert", image: "https://trey-stone.com/wp-content/uploads/2019/05/11323604.jpg", price:44},
    { title: "The War of the Worlds", description: "H.G. Wells' alien invasion classic", image: "https://m.media-amazon.com/images/I/71UvrmCvReL._UF1000,1000_QL80_.jpg",price:41},
    { title: "Foundation", description: "Isaac Asimov’s sci-fi epic", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633674942i/59239482.jpg", price:42},
    { title: "Neuromancer", description: "The birth of cyberpunk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HPvUkUP-IXyUV6sW3JB6RmaYclJ-GznKdg&s",price:44 }
  ];



  return (
    <div className='px-4 '>

      <div className='flex flex-col mt-10 sm:p-20 p-10 bg-yellow-100'>
        <h1 className='text-5xl font-bold text-center mb-12'>Horror Section</h1>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-y-10'>
          {horrorBooks.map((book, index) => (
            <Card key={index} {...book} />
          ))}
        </div>
      </div>

      <div className='flex flex-col mt-10 sm:p-20 p-10 bg-yellow-100'>
        <h1 className='text-5xl font-bold text-center mb-12'>Non-Fiction</h1>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-y-10'>
          {nonFictionBooks.map((book, index) => (
            <Card key={index} {...book} />
          ))}
        </div>
      </div>

      <div className='flex flex-col mt-10 sm:p-20 p-10 bg-yellow-100'>
        <h1 className='text-5xl font-bold text-center mb-12'>Comics</h1>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-y-10'>
          {comicsBooks.map((book, index) => (
            <Card key={index} {...book} />
          ))}
        </div>
      </div>

      <div className='flex flex-col mt-10 sm:p-20 p-10 bg-yellow-100'>
        <h1 className='text-5xl font-bold text-center mb-12'>Sci-Fi</h1>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-y-10'>
          {sciFiBooks.map((book, index) => (
            <Card key={index} {...book} />
          ))}
        </div>
      </div>


    </div>
  )
}

export default Course
