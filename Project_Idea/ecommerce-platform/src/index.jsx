import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";  // Import Provider from react-redux
import store from "./redux/store";  // Import the store from redux folder
import App from "./App";
import "./styles/styles.css";

// Wrap the app with <Provider> to provide Redux store to the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
