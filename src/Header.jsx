
import React from "react";
import Cart from "./Cart";
import "./App.css";
import LoginButton from "./LoginButton";
import ThemeButton from "./ThemeButton";

const Header = ({  }) => {
  return (
    <header className="header">
      <div className="logo">MyStore</div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>
      <ThemeButton/>
    
      <LoginButton/>
      <Cart/>
    </header>
  );
};

export default Header;