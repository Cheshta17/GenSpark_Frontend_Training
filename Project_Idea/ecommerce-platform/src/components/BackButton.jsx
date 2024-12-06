import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className="bg-gray-500 text-white px-3 py-1 rounded mb-4"
    >
      Back
    </button>
  );
};

export default BackButton;
