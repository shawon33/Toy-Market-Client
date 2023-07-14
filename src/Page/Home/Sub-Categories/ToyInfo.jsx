import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyInfo = () => {
    const touInfo = useLoaderData()
    const { _id, name, seller_name, price, available_quantity, picture,seller_email,rating } = touInfo
    return (
        <div className='mx-48 my-24'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Movie" className='w-full h-auto rounded-lg' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl"><span className='text-3xl'>Name: </span> <span className='text-pink-400'>{name}</span></h2>
                    <p className='text-3xl'><span className='text-3xl'>Seller_Name: </span> <span className='text-pink-400'>{seller_name}</span></p>
                    <p className='text-3xl'><span className='text-3xl'>seller_email: </span> <span className='text-pink-400'>{seller_email}</span></p>
                    <p className='text-3xl'><span className='text-3xl'>Price: $</span> <span className='text-pink-400'>{price}</span></p>
                    <p className='text-3xl'><span className='text-3xl'>Rating: *</span> <span className='text-pink-400'>{rating}</span></p>
                    <p className='text-3xl'><span className='text-3xl'>Available_quantity: pice </span> <span className='text-pink-400'>{available_quantity}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyInfo;