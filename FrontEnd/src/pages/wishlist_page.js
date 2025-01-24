import React from "react";
import NavBar from "../components/navbar";
import Cardwishlist from "../components/cardwishlist";

function wishlist_page() {
  return (
    <div className="bckground-wishlist">
      <NavBar />
      <Cardwishlist />
    </div>
  );
}

export default wishlist_page;
