import React from "react";

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="flex justify-between items-center border p-4 rounded">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-16 h-16 object-cover mr-4" 
      />
      
      <div className="flex-grow">
        <h3 className="font-bold">{item.title}</h3>
        <p className="text-gray-600">Price: ${item.price}</p>
      </div>
      
      <div className="flex items-center mr-4">
        <button 
          onClick={onDecrease}
          className="bg-gray-200 px-3 py-1 rounded-l"
        >
          -
        </button>
        <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
        <button 
          onClick={onIncrease}
          className="bg-gray-200 px-3 py-1 rounded-r"
        >
          +
        </button>
      </div>
      
      <div className="font-bold mr-4">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      
      <button
        onClick={onRemove}
        className="bg-red-500 text-white px-3 py-2 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;