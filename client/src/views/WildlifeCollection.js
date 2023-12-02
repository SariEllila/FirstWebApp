import React from 'react'
import Products from '../components/Products';
import axios from 'axios'
import { Link } from "react-router-dom";


const WildlifeCollection = () => {
    return (
        
<div>
<h1>Wildlife Collection</h1>

<Link to="./views/AmazonCollection"><button>Amazon Collection</button></Link>

<Link to="./views/OceanCollection"><button>Ocean Collection</button></Link>

<Link to="./views/Store"><button>All products</button></Link>

</div>

    )
    }
// {/* <Products products={products.filter(e=>e.collection[Wildlife])}/>
// </div> */}


export default WildlifeCollection;