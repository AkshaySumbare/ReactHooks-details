import React from "react";
import Parent from "./Parent";

const GrandParent = () => {
  const userData = {
    name: "Akshay",
    age: 23,
  };
  return <Parent user={userData} />;
};
export default GrandParent;
