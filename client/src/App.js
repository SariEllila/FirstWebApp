import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Store from "./views/Store";
import Mission from "./views/Mission";
import Cart from "./views/Cart";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </Router>



    </div>

  );
  
}

export default App;
