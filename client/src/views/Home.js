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

<div class="homeCollectionImg">
    <Link to="/amazon"><img class="homeImgs" src="./images/Amazon.jpg" alt="a drone image of amazon rainforest and the Amazon river running in the middle on a cloudy day"/></Link>
    <Link to="/ocean"><img class="homeImgs" src="./images/Ocean.jpg" alt="a birdseye view of turquoise blue ocean and a large wave crashing in the middle"/></Link>
    <Link to="/wildlife"><img class="homeImgs" src="./images/Wildlife.jpeg" alt="an birdseye view of a turquoise sea and an empty beach with rainforest"/></Link>
</div>

</main>

    )

}

export default Home;
