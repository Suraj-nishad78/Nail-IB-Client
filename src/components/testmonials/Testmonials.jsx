import { useEffect, useRef, useState } from "react";
import TestmonialsCard from "./TestmonialsCard";
import { ClipLoader } from "react-spinners"; // Import spinner
import "./testmonials.css";
import axios from "axios";

const Testmonials = () => {
  const containerRef = useRef(null);
  const [testmonials, setTestmonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTestmonials = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/testmonials/fetch`
      );
      setTestmonials(res.data.data);
    } catch (err) {
      console.log("Error while fetching testimonials", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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

  useEffect(() => {
  }, [testmonials]);

  return (
    <>
      <div className="testmonials-content">
        <h1>Real Stories, Real Impact</h1>
        <p>
          Hear firsthand how our video tutorials and study resources transformed
          lives and empowered academic success and envision a brighter future
          for your own IB journey.
        </p>
      </div>

      <div className="testmonials-wrapper">
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "50px 0" }}>
            <ClipLoader color="#007bff" size={50} />
          </div>
        ) : testmonials.length > 0 ? (
          <div className="testmonials-memeber" ref={containerRef}>
            {testmonials.map((test) => (
              <TestmonialsCard key={test._id} test={test} />
            ))}
          </div>
        ) : (
          <p className="no-data-text">No testimonials available</p>
        )}
      </div>
    </>
  );
};

export default Testmonials;
