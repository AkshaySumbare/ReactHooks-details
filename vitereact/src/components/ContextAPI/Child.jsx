import React from "react";
import { useContext } from "react";
import { AppContext } from "./userContext";

const Child = () => {
  const userData = useContext(AppContext);
  console.log(userData);
  return (
    <div>
      <h1>
        My name is {userData.name} and my age is {userData.age}
      </h1>
    </div>
  );
};
export default Child;
