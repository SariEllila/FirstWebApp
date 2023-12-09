import React from "react"
import { Link } from "react-router-dom";


const Header = ({quantity}) => {
    return (

<nav class="navbar">

    <div class="homelogo">
    <Link to="/"><h1>Gifts for Earth</h1></Link>
    </div>

    <div class="nav_item_mission">
    <Link to="/mission"><button class="button_mission">Mission</button></Link>
    </div>

    <div class="nav_item_store">
    <Link to="/store"><button class="button_store">Online Store</button></Link>
    </div>

    <div class="cart_counter">
    <Link to="/cart"><img id="cart_icon" src="/logos/cart.png"/></Link>
    <h2 class="counter_text">{quantity}</h2>
    </div>

</nav>

)}

export default Header;