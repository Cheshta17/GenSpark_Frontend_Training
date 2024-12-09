import React, { useState } from "react";
import BackButton from "../components/BackButton";

const ManageProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: "$25", stock: 10 },
    { id: 2, name: "Product B", price: "$35", stock: 15 },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <BackButton />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageProductsPage;
