import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

// Page Components
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailsPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import ManageProductsPage from "./pages/ManageProductsPage";
import ViewOrdersPage from "./pages/ViewOrdersPage";
import AdminAnalyticsPage from "./pages/AdminAnalyticsPage";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/products" element={<ProductListPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />

              {/* Protected User Routes */}
              <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/user/profile" element={<UpdateProfilePage />} />
                <Route path="/user/orders" element={<OrderHistoryPage />} />
              </Route>

              {/* Protected Admin Routes */}
              <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<ManageProductsPage />} />
                <Route path="/admin/orders" element={<ViewOrdersPage />} />
                <Route path="/admin/sales" element={<AdminAnalyticsPage />} />
              </Route>

              {/* 404 Redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
