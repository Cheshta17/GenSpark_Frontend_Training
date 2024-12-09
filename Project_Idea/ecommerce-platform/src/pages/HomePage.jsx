import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="flex-grow relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=2070&q=80')",
            opacity: 0.2
          }}
        ></div>
        <div className="relative z-10">
          <header className="bg-transparent text-white py-6">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            </div>
          </header>
          <main className="max-w-6xl mx-auto px-4 py-20 text-white">
            <section className="mb-20 text-center">
              <h2 className="text-5xl font-bold mb-6">Welcome to Our Store</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Discover amazing products at unbeatable prices. Shop with confidence and enjoy our wide selection of high-quality items.
              </p>
              <Link
                to="/products"
                className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-block"
              >
                Browse Products
              </Link>
            </section>
            <section>
              <h3 className="text-2xl font-bold mb-6 text-center">Top Categories</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-2">Electronics</h4>
                  <p>Latest gadgets and devices for tech enthusiasts.</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-2">Fashion</h4>
                  <p>Trendy clothing and accessories for all styles.</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-2">Home & Kitchen</h4>
                  <p>Essential items to make your house a home.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
