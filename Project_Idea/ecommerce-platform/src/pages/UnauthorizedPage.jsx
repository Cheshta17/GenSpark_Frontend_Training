import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Unauthorized Access</h1>
        <p className="text-lg text-gray-700 mb-6">
          You do not have permission to access this page.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Go to Home
          </Link>
          <Link 
            to="/login" 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;