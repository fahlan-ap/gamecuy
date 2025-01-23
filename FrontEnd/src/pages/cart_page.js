import React from "react";
import NavBar from "../components/navbar";
import Cardcart from "../components/CardCart";

const CartPage = () => {
  return (
    <>
      <div className="bckground-cart">
        <NavBar />
        <Cardcart />
      </div>
    </>
  );
};

export default CartPage;
