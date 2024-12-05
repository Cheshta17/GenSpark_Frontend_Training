import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      };
      dispatch(addToCart(cartItem));
    }
  };

  const isInCart = cartItems.some(item => item.id === parseInt(id));

  if (loading) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-96 object-cover"
        />
        <div className="md:ml-8">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-gray-600 my-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">${product.price}</p>
          <button 
            onClick={handleAddToCart}
            className={`
              ${isInCart 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600'}
              text-white mt-4 p-2 rounded
            `}
            disabled={isInCart}
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
