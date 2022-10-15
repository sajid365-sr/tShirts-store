
import React from 'react';
import './TShirts.css'

const TShirts = ({tShirts}) => {
    const {name,picture,price} = tShirts;
    return (
        <div className='t-shirt'>
            <img src={picture}  alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button>Buy this</button>
        </div>
    );
};

export default TShirts;