import React, { createContext, useState } from "react";
import { initialState } from "./initialState";
import { postRoute } from "../helpers/apiFetcher";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const submitRegistrationForm = (data, e) => {
    e.preventDefault();

    const newUser = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    };

    postRoute("/register", newUser)
      .then((results) =>
        this.setState({ redirectLogin: true, message: results.message })
      )
      .catch((postError) =>
        console.error(`Error when running POST to api: ${postError}`)
      );
  };
  return (
    <AuthContext.Provider value={{ state, setState, submitRegistrationForm }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
