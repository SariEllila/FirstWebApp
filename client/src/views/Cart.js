import Products from '../components/Products';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cart({cartItems, removeFromCart}){
<div>
<h1>Products in cart</h1>
    <ul>
        {cartItems.map((item) => (
        <li key={item._id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item._id)}>Remove From Cart</button>
        </li>    
        ))}
    </ul>
</div>
} 

export default Cart;
