import React from "react"
import { Link } from "react-router-dom";


const Header = () => {
    return (

<header>

<nav class="navbar">

    <div id="homelogo">
    <Link to="/"><h1>HOME</h1></Link>
    </div>

    <div class="nav_items">
    <Link to="/mission"><h2 class="nav_item_mission">Mission</h2></Link>
    <Link to="/store"><h2 class="nav_item_store">Online Store</h2></Link>
    <h2 class="nav_item_cart">Cart</h2>
    <h2 class="nav_item_account">User Account</h2>
    </div>

</nav>

</header>

)}

export default Header;