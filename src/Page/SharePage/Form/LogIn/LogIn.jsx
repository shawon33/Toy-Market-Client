import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthPovider';
import Swal from 'sweetalert2'

const LogIn = () => {
    const { signIn, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your success message goes here',
                });

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred. Please try again.',
                });
                console.log(error);
            });

    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your success message goes here',
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred. Please try again.',
                });
                console.log(error);
            })


    }
    return (
        <div>
            <div className='mx-56'>
                <div className="bg-gray-100">
                    <div className="flex justify-center items-center py-24 ">
                        <div className="bg-white rounded-lg shadow p-8  max-w-xl w-full">
                            <h2 className="text-2xl text-center font-bold mb-4 text-black">Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email" type="email" name="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password" type="password" name="password" placeholder="Enter your password" required />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit">
                                        LogIn
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                        href="#">Forgot Password?</a>
                                    <p className='my-4 text-center'> <Link className='text-orange-600 font-bold' to="/register">No Account Register Here</Link> </p>

                                </div>
                                <div >
                                    <button onClick={handleGoogleLogin} className="btn btn-outline btn-success">Login with Google</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;