import React from "react";
import NavBar from "../components/navbar";
import Cardlibrary from "../components/cardlibrary";

const LibraryPage = () => {
  return (
    <>
      <div className="bckground-library">
        <NavBar />
        <Cardlibrary />
      </div>
    </>
  );
};

export default LibraryPage;
