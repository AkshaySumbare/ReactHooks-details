import React from "react";
//useReducer is hook alternative to usestate and used to manage state globally
import { useReducer } from "react";
import reducer from "./reducer";

const initialValue = 0;
const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
};

export default ReducerHook;
