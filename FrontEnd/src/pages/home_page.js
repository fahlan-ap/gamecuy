import React from "react";
import NavBar from "../components/navbar";
import Cardhome from "../components/cardhome";

const HomePage = () => {
  return (
    <>
      <div className="bckground-home">
        <NavBar />
        <Cardhome />
      </div>
    </>
  );
};

export default HomePage;
