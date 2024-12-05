import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">E-Commerce</Link>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;