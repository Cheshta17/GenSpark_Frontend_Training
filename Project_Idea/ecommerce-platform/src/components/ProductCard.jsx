import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image
    }));
  };

  const handleProductDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={handleProductDetails}
    >
      <div className="h-64 flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 truncate">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;