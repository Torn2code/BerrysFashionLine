import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./CheckOutPage.css";

const CheckOutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product; 

  if (!product) {
    return <p className="error-message">No product selected for checkout.</p>;
  }

  const handleConfirmPurchase = (e) => {
    e.preventDefault();
    alert(`Your order for "${product.name}" has been placed!`);
    navigate("/"); 
  };

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Complete Your Purchase</h2>
      <div className="product-summary">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="price">Price: ${product.price.toFixed(2)}</p>
      </div>

      <form className="checkout-form" onSubmit={handleConfirmPurchase}>
        <label>
          Full Name:
          <input type="text" placeholder="Enter your full name" required />
        </label>
        <label>
          Email Address:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Shipping Address:
          <textarea placeholder="Enter your address" required></textarea>
        </label>
        <label>
          Payment Method:
          <select required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </label>
        <button type="submit" className="checkout-btn">
          Confirm Purchase
        </button>

        <Link to="/" className="back-to-shop-link">
          Back to Shop
        </Link>

      </form>
    </div>
  );
};

export default CheckOutPage;
