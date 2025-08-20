import React, { useState } from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const hanldeFormSwitch = () => {
    navigate("/signin");
  };
  const [input, setInput] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const handleChangeName = (e) => {
    setInput({ ...input, name: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setInput({ ...input, email: e.target.value });
  };
  const handleChangeUsername = (e) => {
    setInput({ ...input, username: e.target.value });
  };
  const handleChangePass = (e) => {
    setInput({ ...input, password: e.target.value });
  };
  const checkEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regexEmail.test(email);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, username, password } = input;
    if (!name.trim() && !email.trim() && !username.trim() && !password.trim()) {
      alert("Please fill the form!");
      return;
    }
    if (name.trim().length < 2) {
      toast.error("Name must be more than 2 character.");
      return;
    }
    if (!checkEmail(email.trim())) {
      toast.error("Please enter a valid email.");
      return;
    }
    if (username.trim().length < 4) {
      toast.error("Username must be more than 4 Alphanumeric!.");
      return;
    }
    if (password.trim().length < 6) {
      toast.error(
        "Password must be more than 6 Alphanumeric!"
      );
      return;
    }
    submitSignup(input);
  };
  async function submitSignup(form) {
    try {
      // const res = await axios.post(
      //   "http://localhost:4000/api/users/signup",
      //   form
      // );
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/signup`,
        form
      );
      toast.success("Sign Up successfully. Please Login!");
      setInput({ name: "", email: "", username: "", password: "" });
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.error || "Something went wrong!");
      } else {
        toast.error("Server not reachable!");
      }
      console.log("Error", err);
    }
  }
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Sign Up</h1>
        <form className="signup-form">
          <div className="form-group">
            <input
              type="text"
              value={input.name}
              onChange={handleChangeName}
              required
            />
            <label>Name</label>
          </div>
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
              type="text"
              value={input.username}
              onChange={handleChangeUsername}
              required
            />
            <label>Username</label>
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
            <span>Register</span>
          </button>
        </form>
        {/* 👇 Switch form link */}
        <p className="switch-form">
          Already have an account? <a onClick={hanldeFormSwitch}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
