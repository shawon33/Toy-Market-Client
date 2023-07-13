import React from 'react';

const TOyInfo = ({res}) => {
    const {_id,Toys_Name}= res;
    return (
        <div>
            <h1>this is toy info{Toys_Name}</h1>
        </div>
    );
};

export default TOyInfo;