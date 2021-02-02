import React, { createContext, useState, useEffect } from "react";
import { initialState } from "./initialState";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <AuthContext.Provider value={(state, setState)}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
