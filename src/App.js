import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import CheckOutPage from "./components/CheckOutPage";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product); // Debugging line
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(newQuantity, 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCheckout = () => {
    alert("Proceeding to payment...");
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<ProductPage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                handleCheckout={handleCheckout}
              />
            }
          />
          <Route path="/checkout" element={<CheckOutPage cartItems={cart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
