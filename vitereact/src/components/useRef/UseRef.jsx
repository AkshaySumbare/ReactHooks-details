import React, { useEffect, useRef, useState } from "react";

//useRef Create a multiple variable which will not-rerender the components
//access DOM directly

const UseRef = () => {
  const [userInput, setUserInput] = useState("");
  // const [count , setcount ] =useState(0)
   const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    // setcount(count+1); //it will go infinite
  });

  return (
    <>
      <input
        type="text"
        value={userInput}
        placeholder="Name"
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>The number of time render:{count.current} </p>
    </>
  );
};

export default UseRef;
