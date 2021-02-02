import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Register = () => {
  const { redirectLogin, submitRegistrationForm, isAuthenticated } = useContext(
    AuthContext
  );
  const { register, errors, watch, handleSubmit } = useForm();
  const redirectToLogin = () => <Redirect to="/login" />;

  return redirectLogin || isAuthenticated ? (
    redirectToLogin()
  ) : (
    <form onSubmit={handleSubmit(submitRegistrationForm)}>
      <label>First name</label>
      <input
        type="text"
        name="firstname"
        placeholder="Enter your first name"
        ref={register({ required: true })}
      ></input>
      <label>Last name</label>
      <input
        type="text"
        name="lastname"
        placeholder="Enter your last name"
        ref={register({ required: true })}
      ></input>
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        ref={register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
      ></input>
      <label>password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        ref={register({ required: true, minLength: 6 })}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default Register;
