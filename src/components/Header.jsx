// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPhone } from "react-icons/fa";
import "./Header.css";
import { useAuth } from "../AuthContext.jsx";
import LoginButton from "../components/LoginButton"; // import this at top  

function Header() {
  const { currentUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pop, setPop] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
    setPop(true);
    setTimeout(() => setPop(false), 300);
  };

  const handleLinkClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 300);
    setMenuOpen(false);
  };

  return (
  <header className="header">
  <div className="logo-group">
    <Link to="/">
      <img src="/Logo.png" alt="Logo" className="logo-img" />
    </Link>
    <div>
      <Link to="/" className="brand-title">Yogeshwar Dairy</Link>
      <div className="logo-subtitle">Natural | Pure | Fresh</div>
    </div>
  </div>

      {/* Hamburger for mobile */}
      <button
        className={`hamburger ${pop ? "pop-effect" : ""}`}
        onClick={handleHamburgerClick}
        aria-label="Open navigation"
      >
        <FaBars />
      </button>

      {/* Desktop nav */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/ContactPage">Contact</Link>
    

        
      </nav>
 

<div className="login-desktop greeting-group">
  
   <LoginButton className="nav-login-btn" key={currentUser?.uid} />
</div>




      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-left">
            <Link
              to="/"
              onClick={() => handleLinkClick(0)}
              className={`mobile-btn ${clickedIndex === 0 ? "pop-effect" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => handleLinkClick(1)}
              className={`mobile-btn ${clickedIndex === 1 ? "pop-effect" : ""}`}
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={() => handleLinkClick(2)}
              className={`mobile-btn ${clickedIndex === 2 ? "pop-effect" : ""}`}
            >
              About
            </Link>
            <Link
              to="/contactPage"
              onClick={() => handleLinkClick(3)}
              className={`mobile-btn ${clickedIndex === 3 ? "pop-effect" : ""}`}
            >
              <FaPhone style={{ marginRight: "8px" }} />
              Contact
            </Link>
            <LoginButton className="mobile-btn" onClickExtra={() => setMenuOpen(false)} />


          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
