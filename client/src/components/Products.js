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


  return (
    <div>{products}</div>
  )
}

export default Products