import Products from '../components/Products';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Cart({cartItems, setCartItems, removeFromCart}){

const total = cartItems.reduce((acc,curr)=>{
    return acc + (curr.quantity * curr.price)
}, 0)

const handleQuantity = (item, idx, op) => {
const copy = [...cartItems]
    if(op === "-") {
        if(item.quantity === 1){
            removeFromCart(item._id)
        } else {
copy[idx].quantity --
setCartItems(copy)}
    } else if (op === "+") {
copy[idx].quantity ++ 
setCartItems(copy)
    }
}

    return(
<div>
<h1>Products in cart</h1>
<h2>total={total}</h2>
    <ul>
        {cartItems.map((item,idx) => (
        <li key={item._id}>
            <span>{item.name}{item.price}€</span>
            <button onClick={() => 
                handleQuantity(item, idx, "-")
                }>-</button>
                <span>{item.quantity}</span>
                <button onClick={()=>handleQuantity(item, idx, "+")}>+</button>
        </li>    
        ))}
    </ul>
    <Link to="/order"><button>Move to Order</button></Link>
</div>

)
} 

export default Cart;
