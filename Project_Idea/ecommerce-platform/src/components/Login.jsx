import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy authentication logic
    if (username === "admin" && password === "admin123") {
      dispatch(login({ user: "Admin User", role: "admin" }));
      navigate("/admin");
    } else if (username === "user" && password === "user123") {
      dispatch(login({ user: "Regular User", role: "user" }));
      navigate("/user");
    } else if (username === "guest" && password === "guest123") {
      dispatch(login({ user: "Guest User", role: "guest" }));
      navigate("/guest");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
