import React from "react";

const Test = () => {
  return (
    <>
      <div>Test</div>
      <p>this is my api key {process.env.REACT_APP_API_KEY} </p>
    </>
  );
};

export default Test;