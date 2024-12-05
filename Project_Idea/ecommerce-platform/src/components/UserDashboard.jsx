import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome, {user?.name || "User"}!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/user/orders"
            className="bg-blue-500 text-white rounded-lg p-6 shadow-lg hover:bg-blue-600 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">Order History</h2>
            <p>View your past orders and their details.</p>
          </Link>
          <Link
            to="/user/profile"
            className="bg-green-500 text-white rounded-lg p-6 shadow-lg hover:bg-green-600 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">Update Profile</h2>
            <p>Edit your personal information and preferences.</p>
          </Link>
          <Link
            to="/products"
            className="bg-purple-500 text-white rounded-lg p-6 shadow-lg hover:bg-purple-600 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">View Products</h2>
            <p>Browse and shop our latest collection.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
