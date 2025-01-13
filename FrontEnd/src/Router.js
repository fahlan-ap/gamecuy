import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import LoginForm from "./pages/login_page";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login_page" element={<LoginForm />} />
        <Route path="/register_page" element={<RegisterForm />} />
        {/* gunakan RouterDash untuk semua rute dashboard */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
