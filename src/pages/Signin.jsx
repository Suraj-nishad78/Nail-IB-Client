import React, { useContext, useEffect, useState } from "react";
import "./pages.css";
import { toast } from "react-toastify";
import axios from "axios";

import { UserContext } from "../context";

const Signin = () => {
  // Access userId and method to update it from context
  const { userId, setUserId } = useContext(UserContext);

  //Controlleed component state
  const [input, setInput] = useState({ email: "", password: "" });

  //handle input for email
  const handleChangeEmail = (e) => {
    setInput({ ...input, email: e.target.value });
  };
  
  //handle input for password
  const handleChangePass = (e) => {
    setInput({ ...input, password: e.target.value });
  };

  //email validation method
  const checkEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regexEmail.test(email);
  };

  //submit form
  const submitForm = (e) => {
    e.preventDefault();
    const { email, password } = input;
    //validation for data input
    if(!email.trim() && !password.trim()){
      alert("Please enter Email & Password.")
      return;
    }
    if (!checkEmail(email.trim())) {
      toast.error("Please enter a valid email.");
      return;
    }
    if (password.trim().length < 6) {
      toast.error(
        "Password must be more than 6 Alphanumeric!"
      );
      return;
    }
    submitLogin(input);
  };

  //API call method to check data is correct in the database 
  async function submitLogin(form) {
    try {
      //api call through AXIOS
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/users/signin`,
      form
    );

    //response if success
    setUserId(res.data.id);
    toast.success("You have successfully Login!");
    setInput({ email: "", password: "" });
  } catch (err) {
    //error thrown when occured
    if (err.response) {
      toast.error(err.response.data.error || "Something went wrong!");
    } else {
      toast.error("Server not reachable!");
    }
    console.log("Error", err);
  }
  }
  useEffect(()=>{
  },[userId])
  return (
    //signin form
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Sign In</h1>
        <form className="signup-form">
          <div className="form-group">
            <input
              type="email"
              value={input.email}
              onChange={handleChangeEmail}
              required
            />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              value={input.password}
              onChange={handleChangePass}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" onClick={submitForm}>
            <span>Log In</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
