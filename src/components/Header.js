import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header_content">
        <div className="logo">
          
          <Link to="/">
            <span className="logo_text">Berrys Fashion Line</span>
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu} ref={menuRef}>
          <FontAwesomeIcon icon={faBars} aria-hidden="true" />
        </div>

        <nav className={`main_nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav_list">
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Home Deco</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="header_right">
          <div className="user">
            <a href="#">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>

          <div className="cart">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
