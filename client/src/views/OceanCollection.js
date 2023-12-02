import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const OceanCollection = () => {
    return (
        
<div>
<h1>Ocean Collection</h1>

<button>Amazon Collection</button>

<button>Wildlife Collection</button>

<Link to="./views/Store"><button>All products</button></Link>

</div>

    )
    }
// {/* <Products products={products.filter(e=>e.collection[Ocean])}/>
// </div> */}


export default OceanCollection;