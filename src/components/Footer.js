import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Email: jubriladebiyi@yahoo.com</p>
          <p>Phone: +234 8165017468</p>
        </div>
        <div className="socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.coM" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/JvbreelLiltorn" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/jvbreelliltorn?" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/jubriladebiyi?" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Torn2code" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Made with <img width="20" height="24" src="https://img.icons8.com/arcade/64/filled-like.png" alt="filled-like"/>  by Jubril  Adebiyi <strong>All Rights Reserved.</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
