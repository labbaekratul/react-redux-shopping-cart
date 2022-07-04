import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="Navbar">
      <div>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h3>Store</h3>
        </NavLink>
      </div>
      <div>
        <h3>About</h3>
      </div>
      <div className="cart">
        <NavLink to="/cart" style={{ textDecoration: "none" }}>
          <h3>🛒 Cart ({cart.length})</h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
