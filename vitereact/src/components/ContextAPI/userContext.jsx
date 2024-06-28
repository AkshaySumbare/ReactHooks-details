import React from "react";
import { createContext } from "react";

//
//react context is a way to manage state globally
// alternative to props to avoide prop drilling

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //here children is nothing but App.jsx that hold or wrap app other components
  const userData = {
    name: "Akshay",
    age: 23,
  };
  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
