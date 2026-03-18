// ProductCard.jsx
import React from "react";
import "./App.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />

      <h3 className="product-name">{product.name}</h3>

      <p className="product-price">₹{product.price}</p>

      <button
        className="add-btn"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;