import React from "react";
import TopLoadingBar from "react-top-loading-bar";

const LoadingBar = ({ progress }) => {
  return <TopLoadingBar color="#29D" height={3} progress={progress} />;
};

export default LoadingBar;
