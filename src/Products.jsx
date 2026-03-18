    // Products.jsx
import React from "react";
import ProductCard from "./ProductCard ";

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="products-container">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;