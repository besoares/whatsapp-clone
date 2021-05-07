import React from "react";
import MainContainerSide from "./MainContainerSide";
import MainContainerChat from "./MainContainerChat";
import "../assets/styles/MainContainer.scss";

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <MainContainerSide />
      <MainContainerChat />
    </div>
  );
};

export default MainContainer;
