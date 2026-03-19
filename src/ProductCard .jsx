// ProductCard.jsx
import React from "react";
import "./App.css";
import { useDispatch ,useSelector} from "react-redux";
import { addItem,removeItem } from "../src/redux/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
  if (isInCart) {
    dispatch(removeItem(product));
  } else {
    dispatch(addItem(product));
  }
};
  const items = useSelector((store) => store.cart.items);
  const isInCart = items.includes(product.id);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />

      <h3 className="product-name">{product.name}</h3>

      <p className="product-price">₹{product.price}</p>

      <button className="add-btn" onClick={handleAddToCart}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
