import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const OceanCollection = () => {
    return (
        
<div>

<h1>Ocean Collection</h1>

<Link to="/amazon"><button>Amazon Collection</button></Link>

<Link to="/wildlife"><button>Wildlife Collection</button></Link>

<Link to="/store"><button>All products</button></Link>

</div>

    )
    }
// {/* <Products products={products.filter(e=>e.collection[Ocean])}/>
// </div> */}


export default OceanCollection;