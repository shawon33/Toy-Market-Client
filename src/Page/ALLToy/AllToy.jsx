import React, { useEffect, useState } from 'react';
import TOyInfo from './ToyInfo/TOyInfo';
import SellerToy from './ToyInfo/SellerToy';



const AllToy = () => {
    const [toy, setToy] = useState([])
    const [sellerToy, setSellerToy] = useState([])

    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-shawon33-shawon33.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToy(data)
            })

        fetch('https://b7a11-toy-marketplace-server-side-shawon33-shawon33.vercel.app/sellerToys')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSellerToy(data)
            })
    }, [])


    return (
        <div className='mx-48 my-9 font-bold text-black text-2xl'>
            

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
                                    key={toy.id}
                                    res={res}
                                ></TOyInfo>)
                            },
                            {
                                sellerToy.map(seller => <SellerToy
                                    key={sellerToy.id}
                                    seller={seller}
                                ></SellerToy>)
                            }

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;