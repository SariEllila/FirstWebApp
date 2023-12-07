import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


function Products({products, setProducts}) {

const [filters,setFilters] = useState({
  collection:"all",
  category:"all",
  price:"all"
})
const [display, setDisplay] = useState(products)



const fetchProducts = async () => {
    try {
        let res = await axios.get('http://localhost:4040/products')
if(res.status === 200) {  // You check whatever is suitable for you - you structure responses in the backend ;) 
  setProducts(res.data)
setDisplay(res.data)

  // check the res structure to be sure you set an array of products to state
}
    } catch (error) {
        console.log(error);
    }

}

useEffect(()=>{
  fetchProducts()
  },[])



const handleFilter = () => {

const valuesAll = Object.values(filters).every(value => value === 'all');

  if (valuesAll) {
    setDisplay(products);
  } else {

const filteredKeys = Object.keys(filters)
// ["collection","price","category"]

let filteredDisplay = []

products.forEach(product=>{
let checkIfShouldBeDisplayed = filteredKeys.every(filter=>{ 
  if(filters[filter] === "all") return true
  if(filter === "price"){
      let range = filters[filter].split("_")
  if(product.price > range[0] && product.price < range[1]) return true
    }
    return product[filter]===filters[filter] })

 if(checkIfShouldBeDisplayed) {
  filteredDisplay.push(product)
 }

})
  
    console.log(filteredDisplay);
     setDisplay(filteredDisplay)
  }
}

useEffect(()=>{

 handleFilter()
// handle filter
  // filter products state based on what we have in filters object
  },[filters])


const handleChange = (e) => {
let copy = {...filters}
copy[e.target.id] = e.target.value
setFilters(copy)
}
// set/update filters state to what we have choosen in the dropdown and to update the state in the useEffect above
// setFilters()


return (
  <div>

    <div>

<label for="filter">Filter▽</label>

<select id="collection" onChange={handleChange}>
  <option value="all">Choose Collection</option>
  <option value="Amazon">Amazon</option>
  <option value="Wildlife">Wildlife</option>
  <option value="Ocean">Ocean</option>
</select>
<select  id="category" onChange={handleChange}>
  <option value="all">Choose Product</option>
  <option value="clothing">Clothing</option>
  <option value="jewellery">Jewellery</option>
  <option value="accessories">Accessories</option>
</select>
<select  id="price" onChange={handleChange}>
  <option value="all">Choose Price</option>
  <option value="10_20">10€-30€</option>
  <option value="30_50">30€-50€</option>
  <option value="50_999999999">50€-</option>
</select>

<button>Clear</button>

    </div>

    <div>
      {display && display.length > 0 ? (
        display.map((prod) => (
          <div key={prod.id}>
            <h3>{prod.name}</h3>
            <Link to={`/product/${prod._id}`}>
              <img
                src={prod.image}
                alt="a black t-shirt with green sleeves and an image of the amazon with text: SOS Amazon"
              />
            </Link>
            <h3>{prod.size}</h3>
            <h3>{prod.price}€</h3>
            <h3>'{prod.description}'</h3>
          </div>
        ))
      ) : (
        <h3>no products</h3>
      )
      }


    </div>
  </div>
);






}

export default Products;


