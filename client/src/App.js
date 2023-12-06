import './App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import Home from "./views/Home";
import Mission from "./views/Mission";
import Cart from "./views/Cart";
import SingleProduct from './views/SingleProduct';
import OrderSheet from './views/OrderSheet';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
// import * as jose from "jose";

function App() {

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const quantity = cartItems.reduce((acc,curr) => {
    return acc + curr.quantity
  }, 0)
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));


  const addToCart = (product) => {
// check if product exists in cart already
let prodIdx = cartItems.findIndex(item=>item._id === product._id)
if(prodIdx !== -1){
// if product is in cart we want to change only it's quantity
let copy = [...cartItems]
copy[prodIdx].quantity ++
setCartItems(copy)

} else {
// if product is not in cart, we create new product object with quantity
let prod ={
  ...product,
  quantity:1
}
setCartItems([...cartItems, prod]);

}

addToPrice(product);
  };


useEffect(()=>{
console.log(cartItems);
},[cartItems])


  const removeFromCart = (productId) => {

    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
  };


  const addToPrice = (product) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * product.quantity);
  };

  const removeFromPrice = (product) => {

    setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price * product.quantity);

  };


  return (
    <div className="App">

      <Router>
        <Header quantity={quantity}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/store" element={<Products products={products} setProducts={setProducts} /> } />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} setCartItems={setCartItems}/>} />
          {/* <Route path="/edituser" element={<EditUser />} /> */}
          {/* <Route path="/login" element={<LogIn />} /> */}
          <Route path="/product/:productId" element={<SingleProduct products={products} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          {/* <Route path="/user" element={<UserInfo />} /> */}
          <Route path="/order" element={<OrderSheet />} />
        </Routes>
        <Footer/>
      </Router>

    </div>

  );
  
}

export default App;
