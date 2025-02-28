import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./productlist.css"; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/laptops")
      .then((response) => {
        const formattedProducts = response.data.products.slice(0, 4).map((product) => ({
          id: product.id,
          title: product.title,
          price: `$${product.price}`,
          image: product.images[0],
        }));

        setProducts(formattedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className="product-image" />
          </Link>
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
