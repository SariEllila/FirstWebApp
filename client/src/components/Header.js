import React from "react"
import { Link } from "react-router-dom";


const Header = ({quantity}) => {
   
    return (

<nav class="navbar">

    <div class="homelogo">
        <Link to="/"><h1>Gifts for Earth</h1></Link>
    </div>

    <div></div>

    <ul class="nav_items">
        <li class="nav_item_mission">
            <Link to="/mission"><button class="button_mission">Mission</button></Link>
        </li>

        <li class="nav_item_store">
            <Link to="/store"><button class="button_store">Online Store</button></Link>
        </li>
                        
        <div class="cart_container">
            <li>
                <Link to="/cart"><img class="cart_img" src="./logos/cart.png"/></Link>
            </li>
            <li>
                <h2 class="counter_text">{quantity}</h2>
            </li>
        </div>      
    </ul>

    <div class="hamburger">

    <span class="hamb-span">|||</span>
    <div class="hamburger-content">
        <ul>
            <li class="nav_item_mission">
                <Link to="/mission" class="button_mission">Mission</Link>
            </li>

            <li class="nav_item_store">
                <Link to="/store" class="button_store">Online Store</Link>
            </li>

            <li class="cart_container">
                <Link to="/cart">
                    <img class="cart_img" src="./logos/cart.png" alt="Cart" />
                </Link>
                <div>
                    <h2 class="counter_text">{quantity}</h2>
                </div>
            </li>
        </ul>
    </div>
</div>



</nav>

)}

export default Header;