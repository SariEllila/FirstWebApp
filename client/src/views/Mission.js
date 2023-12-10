import React from 'react'

const Mission = () => {
    return (

<div>

<div class="mission_intro">
        <div>
            <h1 class="mission_title"> OUR MISSION</h1> 
        </div>
        <div class="mission_intro_text">
            <h2>Our mission is to give to small charities around the world doing important work for our environment. We target charities from three areas: Amazon, ocean, and wildlife preservation. See our different charity targets below and visit the links to learn more on their websites.</h2>
        </div>
</div>

<div class="charities">

<div class="mission_amazon_charities">
    <img src="./images/Amazon_frontlines.jpg" alt="indigenous people marching in bright colored facepaints and outfits demonstrating for their causes in the street"/>

    <div class="amazon_charity_text">
    <h1 class="amazon_mission_title">AMAZON</h1>
    <h1>Amazon Frontlines</h1>
    <h2>Amazon Frontlines is a charity helping the indigenous people in Ecuador, Peru and Colombia to overcome fights with the governments, taking back ownership of land and protecting the Amazon.</h2>
    <a href="https://amazonfrontlines.org" target="_blank"><button class="amazon_webpage_link">Visit the Webpage</button></a>
    </div>
    </div>

<div class="mission_wildlife_charities">

    <div class="wildlife_charity_text">
    <h1 class="wildlife_mission_title">WILDLIFE</h1>
    <h1>Only One</h1>
    <h2>Only One is an organization that plants mangrove trees with peoples' donations. Mangrove trees  are super trees that reduce 4-10x more carbon than rainforests, and restoring the forests protect thousands of species.</h2>
    <a href="https://only.one/" target="_blank"><button class="wildlife_webpage_link">Visit the Webpage</button></a>
    </div>

    <img  class="char_images" src="./images/mangrove.jpg" alt="painting of river with mangrove trees on the sides and different animals in the water and on the trees"/>
    </div>

<div class="mission_ocean_charities">

<img class="char_images" src="./images/Ocean_cleanup.jpg" alt="a beach full of plastic waste and some people walking between it"/>

    <div class="ocean_charity_text">
    <h1 class="ocean_mission_title">OCEAN</h1>
    <h1>Ocean Sole</h1>
    <h2>An organization cleaning up the beaches of Kenya by making products from flipflops left on beaches. The aim is to recycle over a million fliflops a year, over one tonne of styrofoam per month.</h2>
    <a href="https://oceansole.com/" target="_blank"><button class="ocean_webpage_link">Visit the Webpage</button></a>
</div>
</div>

</div>

</div>

    )
}

export default Mission;