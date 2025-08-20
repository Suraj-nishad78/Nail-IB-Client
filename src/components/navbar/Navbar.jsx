import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Access userId and method to update it from context
  const { userId, setUserId } = useContext(UserContext);
  const logoutUser = () => {
    setUserId(""); // Clear context userId
    localStorage.removeItem("userId");
    navigate("/"); // Redirect to home page
    toast.success("You have successfully Logout!"); // Show toast
  };
  useEffect(() => {}, [userId]);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="left-nav">
          <div className="navbar-logo">
            <img src="https://cdn.nailib.com/_next/static/media/logo-small.5691114d.svg?w=128&q=75" />
            <Link to="/">Nail-IB</Link>
          </div>
          <div>
            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
              <li>
                <Link to="/">IB Resources</Link>
              </li>
              <li>
                <Link to="/">Schools</Link>
              </li>
              <li>
                <Link to="/">Past Papers</Link>
              </li>
              <li>
                <Link to="/">Questio Bank</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-cta">
          {userId ? (
            <button className="login" onClick={logoutUser}>
              Logout
            </button>
          ) : (
            <Link to="/signup" className="btn">
              Register (it's Free)
            </Link>
          )}
        </div>
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  );
};

// const Navbar = () =>{
//   return (
//     <>
//       <h1>hello from Navbar</h1>
//     </>
//   )
// }

export default Navbar;
