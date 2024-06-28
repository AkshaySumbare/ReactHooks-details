import React from "react";
import Children from "./Children";

const Parent = ({ user }) => {
  const { name, age } = user;
  // const {user} = props;
  return (
    <div>
      <h2>
        Parent data:My name is {name}, My age is {age}
      </h2>
      <Children user={user} />
      {/* or we can also use spread operator {...user} */}
    </div>
  );
};

export default Parent;
