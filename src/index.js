import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Home from "./component/Home.jsx";
import Admin from "./component/Admin.jsx";
import SignUp from "./component/SignUp.jsx";
import Login from "./component/Login.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <header>Morpho</header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="assessment" element={<App />} />
          <Route path="admin" element={<Admin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="/*" element={<NotFound/>} /> */}
        </Routes>
      </Router>
      <footer>Morpho</footer>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
