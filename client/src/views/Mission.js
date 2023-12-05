import React from 'react'

const Mission = () => {
    return (

        <div>

<div class="mission_intro">
        <div class="mission_title">
            <h1>Mission</h1> 
        </div>
        <div class="mission_intro_text">
            <h2>Our mission is to give to small charities around the world doing important work for our environment. We target charities from three areas: Amazon, ocean, and wildlife preservation. See our different charity targets below and visit the links to learn more on their websites.</h2>
        </div>
</div>

<div class="mission_amazon_charities">
    <img src="./images/Amazon_frontlines.jpg"/>
    <div class="amazon_charity_text">
    <h1 class="amazon_mission_title">AMAZON</h1>
    <h1>Amazon Frontlines</h1>
    <h2>Amazon Frontlines is a charity helping the indigenous people in Ecuador, Peru and Colombia to overcome fights with the governments, taking back owership of land and protecting the Amazon.</h2>
    <button class="amazon_webpage_link">Visit the Webpage</button>
    </div>
</div>

<div class="mission_wildlife_charities">
    <div class="wildlife_charity_text">
    <h1 class="wildlife_mission_title">WILDLIFE</h1>
    <h1>Only One</h1>
    <h2>Only One is an organization that plants mangrove trees with peoples' donations. Mangrove trees  are super trees that reduce 4-10x more carbon than rainforests, and restoring the forests ptect thousands of species.</h2>
    <button class="wildlife_webpage_link">Visit the Webpage</button>
    </div>
    <img src="./images/mangrove.jpg"/>
</div>

<div class="mission_ocean_charities">
    <h1>OCEAN CHARITIES</h1>
</div>

        </div>
    )

}

export default Mission;