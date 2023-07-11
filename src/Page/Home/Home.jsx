import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './GallarySection/Gallery';
import Gallerysection from './GallarySection/Gallerysection';


const Home = () => {
    return (
        <div className='mx-48'>
            <Banner></Banner>
            <Gallery></Gallery>  
            <Gallerysection></Gallerysection> 
        </div>
    );
};

export default Home;