import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
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
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/kids">Kids</Link>
            </li>
            <li>
              <Link to="/home-deco">Home Deco</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header_right">
          <div className="user">
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </Link>
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
