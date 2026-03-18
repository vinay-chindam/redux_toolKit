
import React from "react";
import "./App.css";

const Header = ({  }) => {
  return (
    <header className="header">
      <div className="logo">MyStore</div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>

      <div className="cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{0}</span>
      </div>
    </header>
  );
};

export default Header;