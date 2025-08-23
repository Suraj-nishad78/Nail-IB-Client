import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context";
import { toast } from "react-toastify";

//Navbar Component 
const Navbar = () => {
  //State that hanlde the navbar 
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { userId, setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  //logout method 
  const logoutUser = () => {
    setUserId("");
    localStorage.removeItem("userId");
    navigate("/");
    toast.success("You have successfully logged out!");
  };

  //toggle theme method 
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark-theme");
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  
  //updating app component when theme change 
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    //Navbar component details 
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Navigation */}
        <div className="left-nav">
          {/* Navbar log & title */}
          <div className="navbar-logo">
            <img
              src="https://cdn.nailib.com/_next/static/media/logo-small.5691114d.svg?w=128&q=75"
              alt="Nail-IB Logo"
            />
            <Link to="/">Nail-IB</Link>
          </div>

          {/* Navigation Links */}
          <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
            <li><Link to="/">IB Resources</Link></li>
            <li><Link to="/">Schools</Link></li>
            <li><Link to="/">Past Papers</Link></li>
            <li><Link to="/">Question Bank</Link></li>
            <li><Link to="/">Pricing</Link></li>

            {/* Register Button inside Mobile Menu */}
            {!userId && isOpen && (
              <li className="mobile-register">
                <Link to="/signup" className="btn">
                  Register (it's Free)
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* CTA for Desktop/Tablet */}
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
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Hamburger Toggle Button */}
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

export default Navbar;
