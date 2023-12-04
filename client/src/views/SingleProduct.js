import React from 'react';
import Products from '../components/Products';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4040/products/${productId}`);
        if (res.status === 200) {
          setProduct(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

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
    </div>
  );
}

export default SingleProduct;