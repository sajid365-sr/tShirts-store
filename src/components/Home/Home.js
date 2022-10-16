
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirts from '../TShirts/TShirts';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirt) =>{
        
         
        const exists = cart.find(singleTs => singleTs.id === tShirt.id);
        if(exists){
            alert('t-shirt already added');
         
        }else{
            const newCart = [...cart,tShirt];
            setCart(newCart);
            // alert('Successfully added')
        }
    }
    const handleRemoveItem = (tShirt) =>{
        const remaining = cart.filter(ts => ts.id !== tShirt.id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
           <div className="t-shirt-container">
           {
                tShirts.map(tShirt => <TShirts
                     key={tShirt.id}
                     tShirts = {tShirt}
                     handleAddToCart = {handleAddToCart}
                     ></TShirts>)
            }
           </div>
           <div className="cart-container">
            <Cart cart={cart} 
            handleRemoveItem = {handleRemoveItem}
            ></Cart>
           </div>
        </div>
    );
};

export default Home;