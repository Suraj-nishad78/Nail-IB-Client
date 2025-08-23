import "./educators.css";
import { useNavigate } from "react-router-dom";
import EducatorCard from "./EducatorsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners"; // Spinner import

const Educators = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // API call to get educators data from MongoDB
  const getEducators = async () => {
    try {
      const educators = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/educators/fetch`
      );
      setData(educators.data.data);
    } catch (err) {
      console.log("Error occurred", err);
    } finally {
      setLoading(false); // Stop loading after API call
    }
  };

  useEffect(() => {
    getEducators();
  }, []);

  const scrollLeft = () => {
    document.getElementById("educators-video-container").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById("educators-video-container").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Educators content */}
      <div className="educators-content">
        <h1>
          Ft. Best IB Educators <span>on the planet</span>
        </h1>
        <p>
          Nail IB is home to top-tier educators, including
          <span className="highlight"> PatrickJMT</span> for Math AA SL. Patrick
          has over <strong>1.2 million YouTube subscribers</strong>; our team
          also boasts<strong> certified IB examiners</strong> and
          <strong> IB alumni with a perfect score!</strong>
        </p>
        <button>Explore IB Resources</button>
        <p onClick={() => navigate("/signup")}>Register (it's free)</p>
      </div>

      {/* Educator card Component listed here & scroll btn */}
      <div className="educators-scroll-wrapper">
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "50px 0" }}>
            <ClipLoader color="#007bff" size={50} />
          </div>
        ) : data.length > 0 ? (
          <>
            <button className="scroll-btn left" onClick={scrollLeft}>←</button>
            <div id="educators-video-container">
              {data.map((educator) => (
                <EducatorCard key={educator._id} educator={educator} />
              ))}
            </div>
            <button className="scroll-btn right" onClick={scrollRight}>→</button>
          </>
        ) : (
          <p className="no-data-text">No educators available</p>
        )}
      </div>
    </>
  );
};

export default Educators;
