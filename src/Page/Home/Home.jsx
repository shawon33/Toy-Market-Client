import React from 'react';
import Banner from './Banner/Banner';

import Gallerysection from './GallarySection/Gallerysection';
import SubCategary from './Sub-Categories/SubCategary';



const Home = () => {
    return (
        <div className='mx-48 gap-8'>
            <Banner></Banner>
            <SubCategary></SubCategary>
            <Gallerysection></Gallerysection>
        </div>
    );
};

export default Home;