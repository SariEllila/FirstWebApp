import React from "react"
import { Link } from "react-router-dom";


const Header = ({quantity}) => {
    return (

<nav class="navbar">

    <div class="homelogo">
    <Link to="/"><h1 class="homelogo">GIFTS for EARTH</h1></Link>
    </div>

    <div class="nav_items">

    <Link to="/mission"><button class="nav_item_mission">Mission</button></Link>
    <Link to="/login"><button class="nav_item_account">User Account</button></Link>
    <Link to="/store"><button class="nav_item_store">Online Store</button></Link>

    <div class="cart_counter">
    <Link to="/cart"><img class="cart_icon" src="/logos/cart.png"/></Link>
    <h2>{quantity}</h2>
    </div>

    </div>

</nav>

)}

export default Header;