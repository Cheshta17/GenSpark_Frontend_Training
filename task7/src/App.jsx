import React, { useState } from "react";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const App = () => {
  const [role, setRole] = useState(null); // null, 'admin', or 'user'
  const [theme, setTheme] = useState("light"); // dark or light

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!role) {
    return <Login setRole={setRole} />;
  }

  return (
    <div className={`app ${theme}`}>
      <Navbar setRole={setRole} toggleTheme={toggleTheme} />
      {role === "admin" && <AdminDashboard />}
      {role === "user" && <UserDashboard />}
    </div>
  );
};

export default App;
