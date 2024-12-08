import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">E-Commerce Platform</Link>
        <nav className="flex items-center">
          <Link to="/products" className="mx-2">Products</Link>
          <Link to="/cart" className="mx-2 relative">
            Cart 
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartQuantity}
              </span>
            )}
          </Link>
          <Link to="/login" className="mx-4 hover:underline">
            Login
          </Link>
          <Link to="/register" className="mx-4 hover:underline">
            Register
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded ml-4"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
