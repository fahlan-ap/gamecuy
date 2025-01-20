import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import LoginForm from "./pages/login_page";
import RegisterForm from "./pages/register_page";
import HomePage from "./pages/home_page";
import Helmet from "./components/helmet";
import LibraryPage from "./pages/library_page";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet title="Gamecuy" />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/login_page"
          element={
            <>
              <Helmet title="Gamecuy - Login" />
              <LoginForm />
            </>
          }
        />
        <Route
          path="/register_page"
          element={
            <>
              <Helmet title="Gamecuy - Register" />
              <RegisterForm />
            </>
          }
        />
        <Route
          path="/home_page"
          element={
            <>
              <Helmet title="Gamecuy - Home" />
              <HomePage />
            </>
          }
        />
        <Route
          path="/library_page"
          element={
            <>
              <Helmet title="Gamecuy - Library" />
              <LibraryPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
