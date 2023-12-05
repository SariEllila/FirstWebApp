import Products from '../components/Products';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Cart({cartItems, removeFromCart, totalPrice, addToPrice, addToQuantity, totalQuantity}){

const addExtraItem = () => {
    addToPrice();
}


    return(
<div>
<h1>Products in cart</h1>
<h2>total={totalPrice}{totalQuantity}</h2>
    <ul>
        {cartItems.map((item) => (
        <li key={item._id}>
            <span>{item.name}{item.price}€</span>
            <button onClick={() => 
                removeFromCart(item._id)
                }>-</button>
            <button onClick={() => 
                addToQuantity(item._id)
                }>+</button>
        </li>    
        ))}
    </ul>
    <Link to="/order"><button>Move to Order</button></Link>
</div>

)
} 

export default Cart;
