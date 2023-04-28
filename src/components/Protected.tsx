import React from "react";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import { AppProps, userStateType } from "../types";

const Protected = ({ children }:{children:React.ReactNode}) => {
  const isLoggedIn = useSelector((state: userStateType) => state.user.isLoggedIn);

  
  return <div>{isLoggedIn ? children : <Login />}</div>;
};

export default Protected;
