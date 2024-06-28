import React, { useMemo, useState } from "react";
//useMemo is similar to useEffect
//useMemo (callback, [dependency array])
//difference: In useEffect we cant return data instead of this we have clean up function
// in Case of useMemo with the help of call back function we can return data/value and we can use this value anywere
//help to enhance the performance
//Go with useMemo when we want to return just value but in case of if we want to return function use useCallBack Hook
//Difference between useMemo and useCallback Hook.
//Memoization is an optimization feature in React which , when used in the right place increase the performance of the program.
//1- useMemo return a memoized value , 1- useCallback return a memoized function
//2-

const UseMemoHook = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log(num);
    return num;
  };

  // const CheckData =() =>{
  //   return countNumber(myNum);
  // }
  //to avoide this problem that unnecessary rendering of num we used useMemo

  const CheckData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);
  return (
    <div>
      <button onClick={getValue}>Counter</button>
      {/* <p>My num is : {<CheckData/>}</p> */}
      <p>My num is : {CheckData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Clicked me"}
      </button>
    </div>
  );
};
export default UseMemoHook;
