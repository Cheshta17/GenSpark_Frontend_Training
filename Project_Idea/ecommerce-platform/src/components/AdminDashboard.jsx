import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link
            to="/admin/products"
            className="bg-blue-500 text-white rounded-lg p-6 shadow-lg hover:bg-blue-600 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
            <p>View and manage all available products in real-time.</p>
          </Link>
          <Link
            to="/admin/orders"
            className="bg-green-500 text-white rounded-lg p-6 shadow-lg hover:bg-green-600 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">View Orders</h2>
            <p>Monitor user orders and customer details.</p>
          </Link>
          <Link
            to="/admin/sales"
            className="bg-purple-500 text-white rounded-lg p-6 shadow-lg hover:bg-purple-600 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">Sales Analytics</h2>
            <p>Analyze sales data with real-time charts.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

