import { useEffect, useRef, useState } from "react";
import TestmonialsCard from "./TestmonialsCard";
import "./testmonials.css";
import axios from "axios";

//testmonials component
const Testmonials = () => {
  const containerRef = useRef(null);
  const [testmonials, setTestmonials] = useState([]);

  //api call for to get testmonials from mongodb
  const getTestmonials = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/testmonials/fetch`
      );
      setTestmonials(res.data.data);
    } catch (err) {
      console.log("Error while fetching testmonials ", err);
    }
  };

  //useEffect method to hanlde scroll left to right 
  useEffect(() => {
    //api call method on app mounting
    getTestmonials();

    const handleKeyPress = (e) => {
      if (!containerRef.current) return;

      if (e.key === "ArrowRight") {
        containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(()=>{
  },[testmonials])

  return (
    <>
      {/* Testmonials content  */}
      <div className="testmonials-content">
        <h1>Real Stories, Real Impact</h1>
        <p>
          Hear firsthand how our video tutorials and study resources transformed
          lives and empowered academic success and envision a brighter future
          for your own IB journey.
        </p>
      </div>
      {/* Testmonials card component listed here */}
      <div className="testmonials-wrapper">
        <div className="testmonials-memeber" ref={containerRef}>
          {testmonials.map((test) => (
            <TestmonialsCard key={test._id} test={test} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testmonials;
