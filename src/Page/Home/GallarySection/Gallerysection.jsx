import React, { useState } from 'react';
import img1 from '../../../Photo/Gallery/photo1.jpg'
import img2 from '../../../Photo/Gallery/photo2.jpg'
import img3 from '../../../Photo/Gallery/photo3.jpg'
import img4 from '../../../Photo/Gallery/photo4.jpg'
import img5 from '../../../Photo/Gallery/photo5.jpg'
import img6 from '../../../Photo/Gallery/photo6.jpg'
import img7 from '../../../Photo/Gallery/photo7.jpg'
import img8 from '../../../Photo/Gallery/phoot8.jpg'


const Gallerysection = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8, 
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className='mt-18'>
            <h1 className='text-6xl text-center font-bold text-pink-500 my-4 mx-4 bg-slate-100 rounded'>Gallery</h1>
            <div>
                <div className="relative">
                    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full h-auto" />

                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-l"
                        onClick={goToPreviousSlide}
                    >
                        Previous
                    </button>

                    <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-r"
                        onClick={goToNextSlide}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallerysection;