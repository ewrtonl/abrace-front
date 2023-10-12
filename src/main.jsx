import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home/Home";
import Router from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>
);
