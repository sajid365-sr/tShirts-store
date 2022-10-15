
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirts from '../TShirts/TShirts';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div className='home-container'>
           <div className="t-shirt-container">
           {
                tShirts.map(tShirt => <TShirts key={tShirt.id} tShirts = {tShirt}></TShirts>)
            }
           </div>
           <div className="cart-container">
            <Cart></Cart>
           </div>
        </div>
    );
};

export default Home;