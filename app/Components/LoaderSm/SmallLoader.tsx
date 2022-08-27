import React from "react";
import { RotatingSquare } from "react-loader-spinner";

const SmLoader = () => {
  return (
    <div
      style={{
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
      }}
    >
      <RotatingSquare
        ariaLabel="rotating-square"
        visible={true}
        color="#122f57"
        strokeWidth="10"
      />
    </div>
  );
};

export default SmLoader;
