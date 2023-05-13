import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../Logo.png';

const Navbar = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt='ABHISHEK'></img>
      </div>
      <ul className="navbar-links">
        <li>
          <Link className="navbar-link" to="/">
            Products
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/create">
            Create Product
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/cart">
            Cart ({cartItemsCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
