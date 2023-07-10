import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='mx-56'>
            <div class="bg-gray-100">
                <div class="flex justify-center items-center py-24 ">
                    <div class="bg-white rounded-lg shadow p-8  max-w-xl w-full">
                        <h2 class="text-2xl text-center font-bold mb-4 text-black">Login</h2>
                        <form>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Enter your email" required/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" type="password" placeholder="Enter your password"required />
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Sign In
                                </button>
                                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                    href="#">Forgot Password?</a>
                                <p className='my-4 text-center'> <Link className='text-orange-600 font-bold' to="/register">Register Here</Link> </p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;