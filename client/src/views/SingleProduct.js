import Products from '../components/Products';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function SingleProduct({addToCart, removeFromCart, products}) {

  const { productId } = useParams();
  const [product, setProduct] = useState(products[products.findIndex(prod=>prod._id == productId)]);

useEffect(()=>{
  if(product){
    localStorage.setItem("product", JSON.stringify(product))
  }
if(!product){
  let prod = JSON.parse(localStorage.getItem("product"))
  setProduct(prod)
}
},[])


  if (!product) {
    return <h3>Loading...</h3>;
  }

  return (

    <div class="singleProductInfo">

      <div>
      <h3 class="singleProductTitle">{product.name}</h3>
      <img class="singleProductImg" src={product.image} alt={`Product: ${product.name}`}/>
      </div>

      <div class="productDetailsMain">

      <div class="singleProductDetails">
      <h3 class="singleProductDetail">Price: {product.price}€</h3>
      <h3 class="singleProductDetail">Description: {product.description}</h3>
      <h3 class="singleProductDetail">Material: {product.material}</h3>
      </div>

      <button class="cartButtons1" onClick={() => {
        addToCart(product);
      }}>Add to Cart</button>

      <div>
      <Link to="/store" class="backToProductsText">
          <h3>Back to products</h3>
      </Link>
      </div>

      </div>

    </div>
  );
}

export default SingleProduct;