import {useEffect, useState} from 'react'
import axios from 'axios'


function Products() {

    const {products, setProducts} = useState([])

const fetchProducts = async () => {
    try {
        let res = await axios.get('http://localhost:4040/products')
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
fetchProducts()
},[])


const [counter, setCounter] = useState(0);

  return (
    <div>
      {products}
      <div className="AddToCart">
  <button onClick={() => 
    setCounter(counter + 1)}>
    Add to Cart
    </button>
   <h2>{counter}</h2>
  </div>

      </div>
  )
}

export default Products;