import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (

<main class="homeMain">

<div id="home_intro_text" >
<h1>EARTH-FRIENDLY GIFTS TO YOURSELF, OR TO LOVED ONES</h1>
<h2 class="font2">OUR SUPPORT AREAS: THE AMAZON, OCEAN-CLEANUP, WILD-LIFE PRESERVATION</h2>
<h2 class="font2">See Our Products Below</h2>
</div>

<div class="homeCollectionBg">
    <Link to="/store"><img class="homeCollectionImg" src="./images/Collection.png" alt="a collage of nature images and some online-store products"/></Link>
</div>

</main>

    )

}

export default Home;
