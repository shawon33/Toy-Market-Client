import React from 'react';
import { Link } from 'react-router-dom';

const SellerToy = ({ seller }) => {
    console.log(seller);
    const { _id,name, seller_name, price, available_quantity } = seller;

    return (
        <tr >
            {seller.length}
            {/* <td className="pl-24 py-5 text-center px-1 border-b border-black">{seller_name}</td>
            <td className="pl-24 py-5 text-center px-1 border-b border-black">{name}</td>
            <td className="pl-24 py-5 text-center px-1 border-b border-black">{price}</td>
            <td className="pl-24 py-5 text-center px-1 border-b border-black">{available_quantity}</td>
            <td className="pl-24 py-5 text-center px-1 border-b border-black">
                <Link to={`/sellerToys/${_id}`}><button className="btn btn-outline btn-secondary">View Details</button></Link>
            </td> */}
        </tr>
    );
};

export default SellerToy;