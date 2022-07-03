import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <div className="Navbar">
      <div>
        <h3>Store</h3>
      </div>
      <div>
        <h3>About</h3>
      </div>
      <div className="cart">
        <h3>🛒 Cart ({cart.length})</h3>
      </div>
    </div>
  );
}

export default Navbar;
