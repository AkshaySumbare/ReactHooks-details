import React from "react";
import { useState, useEffect } from "react";

const UseEffecthook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
        -
      </button>
    </>
  );
};

export default UseEffecthook;

// ************cleanup function in useEffect **********************/

// const UseEffecthook=() =>{
//   const [widthCount, setWidthCount] = useState(window.screen.width);

//   // const currentScreenWidth = () =>{
//   //   setWidthCount(()=>window.innerWidth);
//   // }

//   useEffect(()=>{
//     window.addEventListener("resize", ()=>setWidthCount(window.innerWidth));
//     return() =>{
//       window.removeEventListener("resize", ()=>setWidthCount(window.innerWidth))
//     };
//   })
//   return(
//     <div>
//       <h1>The size of window is <span>{widthCount}</span></h1>
//     </div>
//   )
// }
// export default UseEffecthook;
