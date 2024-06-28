import React from "react";

const Children = ({ user }) => {
  const { name, age } = user;
  return (
    <>
      <h2>
        Child data:My name is {name}, My age is {age}
      </h2>
    </>
  );
};

export default Children;
