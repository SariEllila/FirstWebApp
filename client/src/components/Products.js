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
        let res = await axios.get('https://frightened-pear-shorts.cyclic.app/products')
if(res.status === 200) {  
  setProducts(res.data)
setDisplay(res.data)

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
  },[filters])


const handleChange = (e) => {
let copy = {...filters}
copy[e.target.id] = e.target.value
setFilters(copy)
}


const clearFilters = () => {
  const clearedFilters = {};
  for (const key in filters) {
    clearedFilters[key] = 'all';
  }
  setFilters(clearedFilters);
};


return (
  <div>

<div class="store_header">

<div class="filterItems">

<label for="filter">Filter ▽</label>

<select id="collection" onChange={handleChange} value={filters.collection}  >
  <option value="all">Choose Collection</option>
  <option value="Amazon">Amazon</option>
  <option value="Wildlife">Wildlife</option>
  <option value="Ocean">Ocean</option>
</select>
<select  id="category" onChange={handleChange} value={filters.category} >
  <option value="all">Choose Product</option>
  <option value="clothing">Clothing</option>
  <option value="jewellery">Jewellery</option>
  <option value="accessories">Accessories</option>
</select>
<select  id="price" onChange={handleChange} value={filters.price}  >
  <option value="all">Choose Price</option>
  <option value="10_30">10€-30€</option>
  <option value="30_50">30€-50€</option>
  <option value="50_999999999">50€-</option>
</select>
<button onClick={clearFilters} class="clearBtn">Clear</button>
</div>


    </div>

    <div className="grid-container">
  {display && display.length > 0 ? (
    display.map((prod) => (
      <div className="product_mainwrap" key={prod.id}>
        <div className="product_wrapper">
          <div className="productInfo">
            <div className="productNames"><h3>{prod.name}</h3></div>
            <div>
              <Link to={`/product/${prod._id}`}>
                <img className="productImages"
                  src={prod.image}
                  alt={prod.description}
                />
              </Link>
            </div>
            <div className="productDetailPrice"><h3>{prod.price}€</h3></div>
            <div className="productDetail"><h3>'{prod.description}'</h3></div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h3>no products</h3>
  )}
</div>
  </div>
);

}

export default Products;


