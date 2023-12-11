import Products from '../components/Products';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";

function Cart((props),{cartItems, setCartItems, removeFromCart}){

    const navigate = useNavigate();
    const stripe = useStripe();
  
    const calculate_total = () => {
      let total = 0;
      products.forEach((ele) => (total += ele.quantity * ele.amount));
      return total;
    };
  
    const createCheckoutSession = async () => {
      try {
        debugger;
        const response = await axios.post(
          `${URL}/payment/create-checkout-session`,
          { products }
        );
        return response.data.ok
          ?
            (localStorage.setItem(
              "sessionId",
              JSON.stringify(response.data.sessionId)
            ),
            redirect(response.data.sessionId))
          : navigate("/payment/error");
      } catch (error) {
        navigate("/payment/error");
      }
    };
  
    const redirect = (sessionId) => {
      debugger;
  
      stripe
        .redirectToCheckout({
          sessionId: sessionId,
        })
        .then(function (result) {

        });
    };

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
                <button class="order_button" onClick={() => createCheckoutSession()}>Move to Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

} 

export default Cart;
