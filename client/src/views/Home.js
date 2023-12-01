import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (

<div>

<main>

<div id="home_intro_text" >
<h1>EARTH-FRIENDLY, EARTH-SUPPORTING 
GIFT-GIVING TO LOVED ONES</h1>
<h1>OUR SUPPORT AREAS:THE AMAZON, OCEAN-CLEANUP, WILD-LIFE PRESERVATION</h1>
<h2>See Our Products Below</h2>
</div>

<div class="homeCollectionImg">
    <Link to="/store"><img class="homeImgs" src="./images/Amazon.jpg"/></Link>
    <Link to="/store"><img class="homeImgs" src="./images/Ocean.jpg"/></Link>
    <Link to="/store"><img class="homeImgs" src="./images/Wildlife.jpeg"/></Link>
</div>

</main>

</div>


    )

}

export default Home;
