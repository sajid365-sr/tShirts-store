
import React from 'react';

const Cart = ({cart,handleRemoveItem}) => {
    return (
        <div>
            <h3>Order Summary:</h3>
            <h5>Order quantity: {cart.length}</h5>
            {
                cart.map(tShirt => <p key={tShirt.id}>
                    {tShirt.name}
                    <button onClick={() => handleRemoveItem(tShirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;