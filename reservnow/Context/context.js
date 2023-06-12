"use client"

import { createContext, useContext, useEffect, useReducer } from "react";
import authReducer, { initialState } from "./reducers";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user data from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      dispatch(loginSuccess(JSON.parse(savedUser)));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

