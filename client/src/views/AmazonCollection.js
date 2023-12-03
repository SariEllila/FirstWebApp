import React from 'react'
import Products from '../components/Products';
import axios from 'axios'
import { Link } from "react-router-dom";


const AmazonCollection = () => {
    return (
        
<div>
<h1>Amazon Collection</h1>

<Link to="/ocean"><button>Ocean Collection</button></Link>
<Link to="/wildlife"><button>Wildlife Collection</button></Link>

<Link to="/store"><button>All products</button></Link>

</div>

    )
    }

// {/* <Products products={products.filter(e=>e.collection[Amazon])}/>
// </div> */}


export default AmazonCollection;