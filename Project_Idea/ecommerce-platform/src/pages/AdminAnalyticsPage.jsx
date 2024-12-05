import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesAnalyticsPage = () => {
  // Mock sales data
  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [5000, 4000, 6000, 7000, 8000, 9000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Smooth line curve
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Analytics Overview",
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Sales Analytics</h1>
      <div className="chart-container mx-auto max-w-4xl">
        <Line data={salesData} options={salesOptions} />
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg">
          Track your monthly sales performance and identify trends over time.
        </p>
      </div>
    </div>
  );
};

export default SalesAnalyticsPage;
