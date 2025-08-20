import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Imports Components Here
import { UserContext } from "./context";
import Navbar from "./components/navbar/Navbar";
import { Signup, Signin, Home } from "./pages/pages";

function App() {
  // State to hold userId
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  useEffect(()=>{
    if (userId) {
      localStorage.setItem("userId", userId);
    } else {
      localStorage.removeItem("userId");
    }
  },[userId])

  // Shared context value
  const sharedDataUser = { userId, setUserId };
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={sharedDataUser}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={!userId ? <Signup /> : <Navigate to="/" replace />}
            />
            <Route
              path="/signin"
              element={!userId ? <Signin /> : <Navigate to="/" replace />}
            />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
      {/* Toaster Component */}
      <ToastContainer
        // position="top-right"
        position="top-right"
        autoClose={3000} // Auto closes after 3 seconds
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
