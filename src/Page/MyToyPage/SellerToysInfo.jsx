import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SellerToysInfo = ({ res, handleDelete }) => {

    const { _id, name, email, seller_name, picture, price, available_quantity } = res;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50"><span className='text-white text-1xl font-bold'> Seller Name:  </span>{seller_name}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{available_quantity}</td>
            <th>
                {price}
            </th>
            <th>
           
                <Link to={`/updateToy/${_id}`}>
                    <button className="btn btn-outline btn-info">UpDate Toy</button>
                </Link>
            </th>
        </tr >
    );
};

export default SellerToysInfo;