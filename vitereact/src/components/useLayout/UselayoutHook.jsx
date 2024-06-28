import React, { useEffect, useLayoutEffect, useState } from "react";

//useLayoutEffect  is similar to useEffect Hook but difference is run synchronously after a render but before the  screen updated
//useEffect run asynchronously and after render is painted to the screen.

const UseLayoutHook = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("This is 1 hook execution ");
  });

  useLayoutEffect(() => {
    console.log("This is 2 hook execution ");
  });

  useEffect(() => {
    console.log("This is 3 hook execution ");
  });

  useEffect(() => {
    if (num === 0) {
      setNum(num + Math.random() * 100);
    }
  }, [num]);
  return (
    <div>
      <h1>My number is {num}</h1>
      <button onClick={() => setNum(0)}>Click on ME</button>
    </div>
  );
};

export default UseLayoutHook;
