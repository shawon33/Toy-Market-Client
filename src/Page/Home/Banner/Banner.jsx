import React from 'react';
import banner from "../../../Photo/Banner/Banner.jpg"
import banner1 from "../../../Photo/Banner/banner2.jpg"

const Banner = () => {
    return (
        <div className=' sm:mx-auto md:my-12'>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="bg-blue-500 p-4 m-4 rounded">
                    <div className='text-center md:pt-18 px-6'>
                        <div className='p-4  '>
                            <h1 className="text-white md:text-6xl font-bold">Welcome </h1>
                            <h1 className="text-white md:text-6xl font-bold">To Our Zone ! </h1>
                        </div>
                        <img src={banner1} alt="" />
                        <h1 className="text-white md:text-6xl font-bold">Thank You</h1>
                    </div>
                </div>
                <div className=" bg-blue-500 p-4 mt-4 rounded hidden sm:block ">
                    <div className="">
                        <img className="w-full h-auto rounded" src={banner} alt="Banner Image" style={{ width: 700, height: 800 }} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;