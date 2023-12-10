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

return (
    <div>
      <h1 class="cart_title">Check your cart</h1>
  
      <div class="cart_wrapper">
        <div class="cart_items_left">
          {cartItems.map((item, idx) => (
            <div class="cart_item" key={item._id}>
              <div class="item_content">
                <div class="image_wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <div class="info_wrapper">
                  <h3>{item.name}</h3>
                  <p>{item.price}€</p>
                  <div class="quantity_buttons">
                    <button onClick={() => handleQuantity(item, idx, '-')}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantity(item, idx, '+')}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div class="cart_right_panel">
          <div class="cart_counter">
            <div class="right_content">
              <h2 class="cart_total_text">Total amount: <span class="total_amount">{total} €</span></h2>
              <Link to="/order">
                <button class="order_button">Move to Order</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

} 

export default Cart;
