import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthPovider';

const Register = () => {
    const {createUser} =useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);

        createUser(email,password)
        .then(result=>{
         const createdUser = result.user;
         console.log(createdUser);
        })
        .catch(error =>{
         console.log(error);
        })
    }
    return (
        <div>
            <div class="flex justify-center items-center py-24">
                <div class="bg-white rounded-lg shadow p-8 max-w-md w-full">
                    <h2 class="text-2xl text-center font-bold mb-4 text-black">Registration</h2>
                    <form onSubmit={handleRegister}>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text" name="name" placeholder="Enter your name" required />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Register
                            </button>
                        </div>
                        <p className='my-4 text-center'> <Link className='text-orange-600 font-bold' to="/logIn">Have a Account Login here </Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;