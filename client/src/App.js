import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Store from "./views/Store";
import Mission from "./views/Mission";
import Cart from "./views/Cart";
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <Footer/>
      </Router>



    </div>

  );
  
}

export default App;
