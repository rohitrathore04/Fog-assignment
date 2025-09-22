import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import "./header.css";
const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="3" y="3" width="16" height="16" rx="5" fill="#E3D5C6" />
            </svg>
          </div>
          <span>Furniro</span>
        </Link>

        {/* Nav Menu */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="icons">
          <span className="search"><FiSearch size={22} /></span>
          <span className="profile"><FiUser size={22} /></span>
          <span className="heart"><FiHeart size={22} /></span>
          <Link to="/bag" className="cart">
            <FiShoppingCart size={22} />
            <span className="bag-count">{bag.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
