import React from "react";
import NavBar from "../components/navbar";
import Cardlibrary from "../components/cardlibrary";

const HomePage = () => {
  return (
    <>
      <div className="bckground-library">
        <NavBar />
        <Cardlibrary />
      </div>
    </>
  );
};

export default HomePage;
