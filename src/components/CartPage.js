import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({
  cartItems,
  updateQuantity,
  removeFromCart,
  handleCheckout,
}) => {
  console.log("Cart Items:", cartItems); 
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} x ${item.price.toFixed(2)}
                  </span>
                  <div className="cart-item-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="Sum-tit">Order Summary</h2>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>

            <div className="summary-item">
              <span>Shipping Fee:</span>
              <span>$0.00</span>
            </div>

            <div className="summary-item">
              <span>Tax:</span>
              <span>$0.00</span>
            </div>

            <div className="summary-total">
              <span>
                <strong>Total:</strong>
              </span>
              <span>
                <strong>${calculateTotal().toFixed(2)}</strong>
              </span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Payment
            </button>

            <Link to="/" className="back-to-shop-link">
              Keep Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
