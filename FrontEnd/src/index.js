import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "../src/assets/css/landing_page.css";
import "../src/assets/css/login_page.css";
import "../src/assets/css/register_page.css";
import "../src/assets/css/admin_dash.css";
import "../src/assets/css/admin_form.css";
import "../src/assets/css/home_page.css";
import "../src/assets/css/navbar.css";
import "../src/assets/css/library_page.css";
import "../src/assets/css/cart_page.css";
import "../src/assets/css/wishlist_page.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
