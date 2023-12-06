import Products from '../components/Products';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={`Product: ${product.name}`} />
      <h3>{product.size}</h3>
      <h3>{product.price}€</h3>
      <h3>{product.description}</h3>
      <h3>{product.material}</h3>

      <button onClick={() => {
        addToCart(product);
      }}>Add to Cart</button>
      <button onClick={()=>{
        removeFromCart(product._id);
        }}>Remove from Cart</button>
    </div>
  );
}


export default SingleProduct;