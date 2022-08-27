import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Admin from "./component/Admin.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header>Morpho</header>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="admin" element={<Admin />} />
        {/* <Route path="/*" element={<NotFound/>} /> */}
      </Routes>
    </Router>
    <footer>Morpho</footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
