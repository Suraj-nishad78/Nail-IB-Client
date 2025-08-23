import React, { useState } from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

//Signup component
const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  //controlled component by state 
  const handleChange = (field) => (e) => {
    setInput({ ...input, [field]: e.target.value });
  };

  //form switch
  const hanldeFormSwitch = () => {
    navigate("/signin");
  };

//validation for email
  const checkEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  //submit form 
  const submitForm = (e) => {
    //prevent refresh the page 
    e.preventDefault();

    //form input data 
    const { name, email, username, password } = input;
    if (!name.trim() || !email.trim() || !username.trim() || !password.trim()) {
      alert("Please fill the form!");
      return;
    }
    //validation for name,email,username, password
    if (name.trim().length < 2) {
      toast.error("Name must be more than 2 characters.");
      return;
    }
    if (!checkEmail(email.trim())) {
      toast.error("Please enter a valid email.");
      return;
    }
    if (username.trim().length < 4) {
      toast.error("Username must be at least 4 characters.");
      return;
    }
    if (password.trim().length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    submitSignup(input);
  };

  //submit form data into the database
  async function submitSignup(form) {
    try {
      //api call to post data 
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/signup`,
        form
      );

      //response data is correctly input
      toast.success("Sign Up successfully. Please Login!");
      setInput({ name: "", email: "", username: "", password: "" });
    } catch (err) {

      //response error if any error occured while posi=ting data in the data base 
      toast.error(err.response?.data?.error || "Something went wrong!");
      console.error("Error", err);
    }
  }

  return (
    //signup form  
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Sign Up</h1>
        <form className="signup-form">
          <div className="form-group">
            <input
              type="text"
              value={input.name}
              onChange={handleChange("name")}
              required
            />
            <label>Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              value={input.email}
              onChange={handleChange("email")}
              required
            />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              value={input.username}
              onChange={handleChange("username")}
              required
            />
            <label>Username</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              value={input.password}
              onChange={handleChange("password")}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" onClick={submitForm}>
            <span>Register</span>
          </button>
        </form>
        {/* switch  from signup to signin form */}
        <p className="switch-form">
          Already have an account? <a onClick={hanldeFormSwitch}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
