import React, { useState, useEffect } from "react";
import LogoLoading from "./LogoLoading";

export const LoadingScreen = (WrappedComponent, LoadingMessage) => {
  function Loading(props) {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };
    console.log(isLoading);
    return (
      <>
        {isLoading ? <LogoLoading /> : ""}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }

  return Loading;
};

export default LoadingScreen;
