
import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveItem}) => {

let message;
if(cart.length === 0){
    message = <p>Please buy at least one item !!!</p>
}else if(cart.length === 1){
    message = <div>
        <h3>Amar jonno akta nao</h3>
        <p>Tomar nijer jonno akta new</p>
        <p><small>Amar jonno ro akta new</small></p>
    </div>
}
else{
    message = <p>Thanks for buying</p>
}

    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Order Summary:</h3>
            <h5 className= {`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity: {cart.length}</h5>
            {
                cart.map(tShirt => <p key={tShirt.id}>
                    {tShirt.name}
                    <button onClick={() => handleRemoveItem(tShirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>3 jonner jonno pawa gelo</p> : <p>Aro kinte hobe</p>
            }
           <p>and operator</p>
           {cart.length === 2 && <h2>Double operator</h2>}
           <p>OR operator</p>
           {cart.length === 4 || <p>4 ta item na</p>}
        </div>
    );
};

export default Cart;


/* 
Conditional Rendering :-

1. use element in a variable then use if-else to set the value;
2. ternary operator. condition ? true : false;
3. && operator ((if condition is true I want to display something));
4. || operator (if condition is false I want to display something);
*/