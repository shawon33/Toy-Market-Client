import React, { useEffect, useState } from 'react';
import TOyInfo from './ToyInfo/TOyInfo';


const AllToy = () => {
    const [toy, setToy] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToy(data)
            })
    }, [])

    return (
        <div className='mx-48 my-9 font-bold text-black text-2xl'>
            <h1>this sis a toy{toy.length}</h1>
            <div className="w-full overflow-x-auto">
                <table className="min-w-full bg-pink-100">
                    <thead>
                        <tr>
                            <th className='w-20 '>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub_category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {
                                toy.map(res => <TOyInfo
                                    key={toy._id}
                                    res={res}
                                ></TOyInfo>)
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;