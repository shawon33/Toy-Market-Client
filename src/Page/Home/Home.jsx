import React from 'react';
import Banner from './Banner/Banner';

import Gallerysection from './GallarySection/Gallerysection';



const Home = () => {
    return (
        <div className='mx-48 gap-8'>
            <Banner></Banner>
            <Gallerysection></Gallerysection>
        </div>
    );
};

export default Home;