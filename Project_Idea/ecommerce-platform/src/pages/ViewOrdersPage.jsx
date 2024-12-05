import React from "react";

const ViewOrdersPage = () => {
  const orders = [
    { id: 1, customer: "John Doe", items: 3, total: "$120" },
    { id: 2, customer: "Jane Smith", items: 1, total: "$40" },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">View Orders</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Customer</th>
            <th className="border px-4 py-2">Items</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.customer}</td>
              <td className="border px-4 py-2">{order.items}</td>
              <td className="border px-4 py-2">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrdersPage;
