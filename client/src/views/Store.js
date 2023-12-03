import React from 'react'
import Products from '../components/Products';

const Store = () => {
    return (

<div>

        <div class='store_header'>

        <button>Filter ▽</button>
    <div>
        <h3>CART</h3>
        <h3>0</h3>
    </div>

        </div>

        <div class="all_products">
        <h1>PRODUCTS</h1>
        <Products />
        </div>

</div>
    )

}

export default Store;