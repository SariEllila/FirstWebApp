import './App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import Home from "./views/Home";
import Store from "./views/Store";
import Mission from "./views/Mission";
import Cart from "./views/Cart";
import EditUser from "./views/EditUser";
import Register from './views/Register';
import LogIn from './views/LogIn';
import SingleProduct from './views/SingleProduct';
import AmazonCollection from './views/AmazonCollection';
import OceanCollection from './views/OceanCollection';
import WildlifeCollection from './views/WildlifeCollection';
import UserInfo from './views/UserInfo';
import Header from './components/Header';
import Footer from './components/Footer';
// import * as jose from "jose";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  // useEffect(() => {
  //   const verify_token = async () => {
  //     try {
  //       if (!token) {
  //         setIsLoggedIn(false);
  //       } else {
  //         axios.defaults.headers.common["Authorization"] = token;
  //         const response = await axios.post(`${URL}/users/verify_token`);
  //         return response.data.ok ? login(token) : logout();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   verify_token();
  // }, [token]);

  // const login = (token) => {
  //   debugger
  //   let decodedToken = jose.decodeJwt(token);
  //   let user = {
  //     email: decodedToken.userEmail,
  //   };
  //   localStorage.setItem("token", JSON.stringify(token));
  //   localStorage.setItem("user", JSON.stringify(user));
  //   setIsLoggedIn(true);
  // };
  
  // const logout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  //   setIsLoggedIn(false);
  // };

  return (
    <div className="App">

      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/store" element={<Store />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/edituser" element={<EditUser />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/product/productId" element={<SingleProduct />} />
          <Route path="/amazon" element={<AmazonCollection />} />
          <Route path="/ocean" element={<OceanCollection />} />
          <Route path="/wildlife" element={<WildlifeCollection />} />
          <Route path="/user" element={<UserInfo />} />
        </Routes>
        <Footer/>
      </Router>

    </div>

  );
  
}

export default App;
