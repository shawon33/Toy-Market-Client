import React, { useEffect, useState } from 'react';
import TOyInfo from './ToyInfo/TOyInfo';


const AllToy = () => {
    const [toy,setToy]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/toy')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setToy(data)
        })
    },[])
    
    return (
        <div className='mx-48 my-9'>
            <h1>this sis a toy{toy.length}</h1>
            <div>
                {
                    toy.map(res=><TOyInfo
                    key={toy._id}
                    res={res}
                    ></TOyInfo>)
                }
            </div>
        </div>
    );
};

export default AllToy;