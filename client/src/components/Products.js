import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


function Products({products, setProducts}) {

const [filters,setFilters] = useState({
  collection:"all",
  category:"all",
  price:"all"
})


const fetchProducts = async () => {
    try {
        let res = await axios.get('http://localhost:4040/products')
if(res.status === 200) {  // You check whatever is suitable for you - you structure responses in the backend ;) 
setProducts(res.data)

  // check the res structure to be sure you set an array of products to state
}
    } catch (error) {
        console.log(error);
    }

}

useEffect(()=>{
fetchProducts()
},[])

useEffect(()=>{

if (filters.target.value === "all"){

  const filteredProducts = useProducts(products);

}else {
  const filteredProducts = useProducts(filteredProducts)
}
  // filter products state based on what we have in filters object
  },[filters])


const handleChange = (e) => {

  setFilters(
    collection: e.target.value,
    category: e.target.value,
    price: e.target.value
  )

}
// set/update filters state to what we have choosen in the dropdown and to update the state in the useEffect above
// setFilters()
}


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
  <option value="50_up">50€-</option>
</select>

<button>Clear</button>

    </div>

    <div>
      {products && products.length > 0 ? (
        products.map((prod) => (
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


