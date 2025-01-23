import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import LoginForm from "./pages/login_page";
import RegisterForm from "./pages/register_page";
import AdminDash from "./pages/admin_dash";
import AddGames from "./pages/add_games";
import HomePage from "./pages/home_page";
import LibraryPage from "./pages/library_page";
import WishlistPage from "./pages/wishlist_page";
import Helmet from "./components/helmet";
import CartPage from "./pages/cart_page";

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
          path="/admin_dash"
          element={
            <>
              <Helmet title="Gamecuy - Admin Dashboard" />
              <AdminDash />
            </>
          }
        />

        <Route
          path="/add_games"
          element={
            <>
              <Helmet title="Gamecuy - Admin Dashboard" />
              <AddGames />
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

        <Route
          path="/cart_page"
          element={
            <>
              <Helmet title="Gamecuy - Cart" />
              <CartPage />
            </>
          }
        />

        <Route
          path="/wishlist_page"
          element={
            <>
              <Helmet title="Gamecuy - Wishlist" />
              <WishlistPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
