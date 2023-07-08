import React, { useState } from "react";
import { Link , Outlet } from "react-router-dom";
import { isValidUser } from "../Validators";

const SignUpForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  const [error, setError] = useState("");

  let handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isValidUser({ ...state })) {
          console.log("User is valid!", state);
        } else {
          setError("The User is Invalid!");
          console.log("User is Invalid");
        }
      }}
    >
      <label>First Name</label>
      <input
        name={"firstName"}
        type={"text"}
        onChange={handleChange}
        value={state.firstName}
        placeholder={"First Name"}
      />
      <label>Last Name</label>
      <input
        name={"lastName"}
        type={"text"}
        onChange={handleChange}
        value={state.lastName}
        placeholder={"Last Name"}
      />
      <label>Email</label>
      <input
        name={"email"}
        type={"email"}
        onChange={handleChange}
        value={state.email}
        placeholder={"Email"}
      />
      <label>Password</label>
      <input
        name={"password"}
        type={"password"}
        onChange={handleChange}
        value={state.password}
        placeholder={"Password"}
      />
      <button type={`submit`}>Submit</button>
      <span style={{ color: "red" }}>{error}</span>
      <Link to={"sum"}>Sum Component</Link>
      <Outlet/>
      </form>
  );
};

export default SignUpForm;