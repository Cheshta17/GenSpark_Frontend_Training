// RegisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add logic for API call to register the user
    console.log("User registered:", formData);
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

