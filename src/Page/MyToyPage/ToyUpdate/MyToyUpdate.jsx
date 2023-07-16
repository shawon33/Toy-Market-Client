import React from 'react';

const MyToyUpdate = () => {
    return (
        <div>
            <div className='mx-48 my-8 bg-slate-50'>
                <div className="flex justify-center">
                    <form className="w-full max-w-sm " onSubmit={handleAddToy}>
                        <h1 className="text-pink-500 text-6xl font-bold text-center">Add A Toy</h1>
                        <div className="mb-4">
                            <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Photo:</label>
                            <input id="name" type="photo" name='photo' placeholder="Toy Photo" className="input input-bordered w-full" required />
                        </div>
                        <div className="mb-4">
                            <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                            <input id="name" type="text" name='toyName' placeholder="Toy Name" className="input input-bordered w-full" required />
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
                            <input id="text" type="text" name='subCategory' placeholder="write Only number 1-3" className="input input-bordered w-full" required />
                        </div>
                        <div className="mb-4">
                            <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                            <input id="text" type="text" name='price' placeholder="Price" className="input input-bordered w-full" required />
                        </div>
                        <div className="mb-4">
                            <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
                            <input id="text" type="text" name='rating' placeholder="rating" className="input input-bordered w-full" required />
                        </div>
                        <div className="mb-4">
                            <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Available Quantity:</label>
                            <input id="text" type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" required />
                        </div>
                        <div className="mb-4">
                            <label for="email" className="block text-gray-700 text-sm font-bold mb-2">details:</label>
                            <input id="text" type="text" name='details' placeholder="Details" className="input input-bordered w-full" required />
                        </div>

                        <div className="flex items-center justify-center">
                            <button type="submit" className="btn btn-primary">Add Toy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyToyUpdate;