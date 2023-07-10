import React from 'react';
import banner from "../../../Photo/Banner/Banner.jpg"

const Banner = () => {
    return (
        <div className=' md:my-12'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-500 p-4 m-4 rounded">
                    <div className='text-center md:pt-32 px-6'>
                        <h1 className="text-white md:text-6xl font-bold">Welcome </h1>
                        <h1 className="text-white md:text-6xl font-bold">to Our Website!</h1>
                    </div>
                    <p className="text-white mt-2 md:text-4xl">
                        "Welcome to a world filled with joy, giggles, and endless wonders - where precious little ones bring boundless love and unforgettable moments.".</p>
                </div>
                <div className="p-4">
                    <img className="w-full h-auto rounded" src={banner} alt="Banner Image" style={{ width: 700, height: 600 }} />
                </div>
            </div>
        </div>
    );
};

export default Banner;