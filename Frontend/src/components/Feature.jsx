import React, { useState, useEffect } from 'react';

function Feature() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://m.media-amazon.com/images/I/41an9tLSfBL._SL500_.jpg",
        "https://cdn.bookey.app/files/publish-book/quantum_physics_for_poets_682727787.jpg",
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fabfc432a-48fe-4a2a-9cf2-5406a3921391_1650x2550.jpeg",
        "https://cdn.ibpbooks.com/images/sdf/implementation-of-data-structures-t1.jpg",
        "https://m.media-amazon.com/images/I/81hrcFeBBKL._AC_UF1000,1000_QL80_.jpg",
        "https://tolstoytherapy.com/wp-content/uploads/2022/09/51QQRmnMwDL.jpeg",
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781683834847/dc-comics-detective-comics-the-complete-covers-vol-2-9781683834847_hr.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div className='px-4 flex flex-col sm:flex-row'>
            
            <div className='flex sm:w-1/2 w-full sm:order-1 justify-center p-24'>
                <div className="overflow-hidden rounded-box min-w-60 sm:w-96 shadow-2xl shadow-black">
                    <div
                        className="flex transition-transform duration-75"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((img, index) => (
                            <img key={index} src={img} className="w-full flex-shrink-0" alt={`Book ${index}`} />
                        ))}
                    </div>
                </div>
            </div>

            
            <div className='flex sm:w-1/2 w-full sm:order-2 flex-col p-5 md:p-10 justify-center gap-y-5 sm:gap-y-10'>
                <h1 className='text-4xl sm:text-6xl text-black font-bold text-center sm:text-justify'>
                    Your Favorite Books in <br /> one place
                </h1>
                <p className='text-xl sm:text-2xl text-black text-center sm:text-justify'>
                    Books are a gateway to infinite worlds, a treasure trove of wisdom, and a lifelong companion in solitude and discovery.
                </p>
            </div>
        </div>
    );
}

export default Feature;
