  // src/components/Header.jsx
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import { FaBars, FaTimes, FaShoppingCart, FaPhone } from "react-icons/fa";
  import "./Header.css";
  

  function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pop, setPop] = useState(false);
    const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);     // Toggle the menu
    setPop(true);               // Trigger pop animation
    setTimeout(() => setPop(false), 300); // Remove pop class after 300ms
  };
  const [clickedIndex, setClickedIndex] = useState(null);

   const handleLinkClick = (index) => {
  setClickedIndex(index);
  setTimeout(() => setClickedIndex(null), 300); // Remove pop class after animation
  setMenuOpen(false); // Close menu
};


    return (
      <header className="header">
        <div className="logo-group">
          <img src="/Logo.png" alt="Logo" className="logo-img" />
          <div>
            <span className="brand-title">Yogeshwar Dairy</span>
            <div className="logo-subtitle">Natural | Pure | Fresh</div>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button className="cart-btn1">
                <FaShoppingCart />
              </button>
    <button
    className={`hamburger ${pop ? 'pop-effect' : ''}`}
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
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="actions">
          <div className="contact-info">
            <span className="contact-label">Contact Us</span>
            <span className="contact-number">123-456-7890</span>
          </div>
          
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="mobile-menu">
          
     <div className="mobile-menu-left">
  <Link
    to="/"
    onClick={() => handleLinkClick(0)}
    className={`mobile-btn ${clickedIndex === 0 ? 'pop-effect' : ''}`}
  >
    Home
  </Link>
  <Link
    to="/products"
    onClick={() => handleLinkClick(1)}
    className={`mobile-btn ${clickedIndex === 1 ? 'pop-effect' : ''}`}
  >
    Products
  </Link>
  <Link
    to="/about"
    onClick={() => handleLinkClick(2)}
    className={`mobile-btn ${clickedIndex === 2 ? 'pop-effect' : ''}`}
  >
    About
  </Link>
  <Link
    to="/contact"
    onClick={() => handleLinkClick(3)}
    className={`mobile-btn ${clickedIndex === 3 ? 'pop-effect' : ''}`}
  >
    <FaPhone style={{ marginRight: '8px' }} />
    Contact
  </Link>
</div>


            
          </div>
        )}
      </header>
    );
  }

  export default Header;