import React from 'react'
import Products from '../components/Products';
import axios from 'axios'
import { Link } from "react-router-dom";


const AmazonCollection = () => {
    return (
        
<div>
<h1>Amazon Collection</h1>

<Link to="./views/OceanCollection"><button>Ocean Collection</button></Link>
<Link to="./views/WildlifeCollection"><button>Wildlife Collection</button></Link>

<button>All products</button>

</div>

    )
    }

// {/* <Products products={products.filter(e=>e.collection[Amazon])}/>
// </div> */}


export default AmazonCollection;