import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (

<div>

<main class="homeMain">

<div id="home_intro_text" >
<h1>EARTH-FRIENDLY GIFTS TO YOURSELF, OR TO LOVED ONES</h1>
<h2 class="font2">OUR SUPPORT AREAS: THE AMAZON, OCEAN-CLEANUP, WILD-LIFE PRESERVATION</h2>
<h2 class="font2">See Our Products Below</h2>
</div>

<div class="homeCollectionImg">
    <Link to="/amazon"><img class="homeImgs" src="./images/Amazon.jpg"/></Link>
    <Link to="/ocean"><img class="homeImgs" src="./images/Ocean.jpg"/></Link>
    <Link to="/wildlife"><img class="homeImgs" src="./images/Wildlife.jpeg"/></Link>
</div>

</main>

</div>


    )

}

export default Home;
