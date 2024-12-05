import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeFromCart, 
  updateQuantity, 
  clearCart 
} from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      
      {items.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  className="px-2 bg-gray-200"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  className="px-2 bg-gray-200"
                >
                  +
                </button>
                <button 
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-4 flex justify-between">
            <p className="font-bold">Total: ${totalAmount.toFixed(2)}</p>
            <div>
              <button 
                onClick={handleClearCart}
                className="mr-4 bg-red-500 text-white px-4 py-2"
              >
                Clear Cart
              </button>
              <button 
                onClick={handleCheckout}
                className="bg-green-500 text-white px-4 py-2"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
