import React from "react";

const Navbar = ({ setRole, toggleTheme }) => (
  <nav className="navbar">
    <button onClick={toggleTheme}>Toggle Theme</button>
    <button onClick={() => setRole(null)}>Logout</button>
  </nav>
);

export default Navbar;
