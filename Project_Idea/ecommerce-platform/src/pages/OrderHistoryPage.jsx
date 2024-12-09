import React from "react";
import BackButton from "../components/BackButton";

const OrderHistoryPage = () => {
  const orders = [
    { id: 1, date: "2024-12-01", amount: "$50", status: "Delivered" },
    { id: 2, date: "2024-12-02", amount: "$100", status: "Pending" },
    { id: 3, date: "2024-12-03", amount: "$75", status: "Cancelled" },
  ];

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.date}</td>
              <td className="border px-4 py-2">{order.amount}</td>
              <td className="border px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistoryPage;
