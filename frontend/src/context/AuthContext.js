import React, { createContext, useState } from "react";
import { initialState } from "./initialState";
import { postRoute } from "../helpers/apiFetcher";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
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
        setState({ ...state, redirectLogin: true, message: results.msg })
      )
      .catch((postError) =>
        console.error(`Error when running POST to api: ${postError}`)
      );
  };

  const submitLoginForm = (data, e) => {
    e.preventDefault();

    const user = {
      email: data.email,
      password: data.password,
    };

    postRoute("/login", user)
      .then((results) => {
        console.log(results);
        setState({
          ...state,
          user: results.securedFinalUser,
          token: results.token,
          redirectProfile: true,
        });
      })
      .catch((postError) =>
        console.error(`Error when running POST to api: ${postError}`)
      );
  };

  const authenticateUser = (isTokenVerified) => {
    setState({
      ...state,
      isAuthenticated: isTokenVerified,
      message: "You've successfully logged into your profile!",
    });
  };

  const logoutUser = async () => {
    await setState(initialState);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        setState,
        submitRegistrationForm,
        submitLoginForm,
        authenticateUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
