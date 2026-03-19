
import React from "react";
import Cart from "./Cart";
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
      <Cart/>
    </header>
  );
};

export default Header;