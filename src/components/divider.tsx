import React from "react";
import Dots from "../assets/dots.svg";

const Divider = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        userSelect: "none",
        marginTop: "0rem",
      }}
    >
      <img src={Dots} alt="" height={"30vh"} />
    </div>
  );
};

export default Divider;
