import { createContext, useContext, useState, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthorizationContext = createContext();

const AuthContext = ({ children }) => {
  const initialAuthState = {
    token: "",
    name: "",
    email: "",
  };
  const [authState, dispatchAuth] = useReducer(
    authReducer,
    JSON.parse(localStorage.getItem("userData")) ?? initialAuthState
  );

  return (
    <AuthorizationContext.Provider value={{ authState, dispatchAuth }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

const useAuth = () => useContext(AuthorizationContext);
export { useAuth, AuthContext };
