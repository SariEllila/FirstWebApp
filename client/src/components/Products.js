import {useEffect, useState} from 'react'
import axios from 'axios'


function Products() {

const [products, setProducts] = useState([])

const fetchProducts = async () => {
    try {
        let res = await axios.get('http://localhost:4040/products')
if(products) {  // You check whatever is suitable for you - you structure responses in the backend ;) 
setProducts(res.data)  // check the res structure to be sure you set an array of products to state
}
    } catch (error) {
        console.log(error);
    }

    return (
        <div>{products && products.length > 0 ? products.map(e=>( 
    <h3>{e.name}</h3>                                              
    )) : <h3>no products</h3>  }</div>
      )

}

useEffect(()=>{
fetchProducts()
},[])


// function CartCounter () {

// const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       {products}
//       <div className="AddToCart">
//   <button onClick={() => 
//     setCounter(counter + 1)}>
//     Add to Cart
//     </button>
//    <h2>{counter}</h2>
//   </div>

//       </div>
//   )
// }

}



export default Products;





// const fetchProducts = async () => {

//   const {products, setProducts} = useState([])

//   try {
//     let res = await axios.get(``)
// if(res.data) {
// setTemp((res.data.main.temp - 273).toFixed(1))
// } else {
//   setMsg('No weather available in this location')
// }
// setTimeout(()=>{
//   setLoading(false)
// },2000)
//   } catch (error) {
//     console.log(error)
//   }
// }


// useEffect(()=>{

//   if(coords.lat && coords.lon) {
//     fetchWeather()
//   }
// },[coords])

// useEffect(()=>{
// fetchCoords()
// },[])
