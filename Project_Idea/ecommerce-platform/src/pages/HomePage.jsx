import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">E-Commerce Platform</h1>
          <nav>
            <Link to="/products" className="mx-4 hover:underline">
              Shop Now
            </Link>
            <Link to="/login" className="mx-4 hover:underline">
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome to Our Store</h2>
          <p className="text-center text-gray-600 mb-4">
            Discover amazing products at unbeatable prices.
          </p>
          <div className="text-center">
            <Link
              to="/products"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Browse Products
            </Link>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-bold mb-4">Top Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h4 className="text-lg font-bold">Electronics</h4>
              <p>Latest gadgets and devices.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h4 className="text-lg font-bold">Fashion</h4>
              <p>Trendy clothing and accessories.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h4 className="text-lg font-bold">Home & Kitchen</h4>
              <p>Essentials for your home.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 E-Commerce Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
