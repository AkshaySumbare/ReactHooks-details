import React from "react";

const reducer = (state, action) => {
  if (action.type === "INC") {
    return (state = state + 1);
  }
  if (action.type === "DEC") {
    let newNum = 0;
    state === 0 ? (newNum = 0) : (newNum = state - 1);
    return newNum;
  }
  return state;
};
export default reducer;
