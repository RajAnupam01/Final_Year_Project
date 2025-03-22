import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "John Doe",
        review: "Great bookstore with a fantastic collection!",
        image: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Jane Smith",
        review: "Fast delivery and excellent customer service.",
        image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Emily Johnson",
        review: "Loved the selection of rare books!",
        image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Robin Spencer",
        review: "Loved the selection of rare books!",
        image: "https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxwcm9maWxlJTIwcGljfGVufDB8fDB8fHww",
    },
];

const TestimonialSlider = () => {
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
    };

    return (
        <div className="px-4">
            <div className="px-6 md:px-16 lg:px-32 py-12 bg-yellow-50">
                <h2 className="text-5xl font-bold text-center mb-8">What Our Buyers Say</h2>
                <div className="relative max-w-4xl mx-auto">

                    {/* Left Button */}
                    <button
                        className="absolute left-0 md:-left-10 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-1 md:p-5 rounded-full hover:bg-gray-900 z-10"
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <Slider ref={sliderRef} {...settings} className="w-full">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-8 bg-white shadow-2xl rounded-lg">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 object-cover md:w-52 rounded-full mb-6 "
                                />
                                <p className="text-lg md:text-2xl italic px-4">"{testimonial.review}"</p>
                                <h3 className="mt-4 font-semibold text-lg md:text-2xl">- {testimonial.name}</h3>
                            </div>
                        ))}
                    </Slider>


                    {/* Right Button */}
                    <button
                        className="absolute right-0 md:-right-10 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-1 md:p-5 rounded-full shadow-md hover:bg-gray-900 z-10"
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <ChevronRight size={32} />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;


