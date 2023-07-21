import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthPovider';

const MyToyUpdate = () => {
    const toy = useLoaderData()
    const { user } = useContext(AuthContext)
    const { _id, name, rating, picture, category, price, available_quantity, details_description } = toy;

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.toyName.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const subCategory = form.subCategory.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const details = form.details.value;
        const quantity = form.quantity.value;
        console.log(photo, name, sellerName, sellerEmail, subCategory, price, details, quantity, rating);

        const updateToy = {
            name: name,
            email: sellerEmail,
            picture: photo,
            seller_name: sellerName,
            category: subCategory,
            rating: rating,
            price: price,
            available_quantity: quantity,
            details_description: details
        }
        console.log(updateToy);
        fetch(`https://b7a11-toy-marketplace-server-side-shawon33-shawon33.vercel.app/sellerToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (

        <div className='mx-48 my-8 bg-slate-50'>
            <div className="flex justify-center">
                <form className="w-full max-w-sm " onSubmit={handleUpdateToy}>
                    <h1 className="text-pink-500 text-6xl font-bold text-center">Add A Toy</h1>
                    <div className="mb-4">
                        <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Photo:</label>
                        <input id="name" type="photo" name='photo' defaultValue={picture} placeholder="Toy Photo" className="input input-bordered w-full" required />
                    </div>
                    <div className="mb-4">
                        <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input id="name" type="text" name='toyName' defaultValue={name} placeholder="Toy Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="mb-4">
                        <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Seller Name:</label>
                        <input id="name" type="text" name='sellerName' defaultValue={user?.displayName} className="input input-bordered w-full" required />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Seller Email:</label>
                        <input id="email" type="email" name='email' defaultValue={user?.email} className="input input-bordered w-full" required />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Sub Category:</label>
                        <input id="text" type="text" name='subCategory' defaultValue={category} placeholder="write Only number 1-3" className="input input-bordered w-full" required />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                        <input id="text" type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered w-full" required />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
                        <input id="text" type="text" name='rating' defaultValue={rating} placeholder="rating" className="input input-bordered w-full" required />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Available Quantity:</label>
                        <input id="text" type="text" name='quantity' defaultValue={available_quantity} placeholder="Quantity" className="input input-bordered w-full" required />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 text-sm font-bold mb-2">details:</label>
                        <input id="text" type="text" name='details' defaultValue={details_description} placeholder="Details" className="input input-bordered w-full" required />
                    </div>

                    <div className="flex items-center justify-center">
                        <button type="submit" className="btn btn-primary">Update Toy</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default MyToyUpdate;