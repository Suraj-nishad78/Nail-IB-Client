import "./educators.css";
import { useNavigate } from "react-router-dom";

import EducatorCard from "./EducatorsCard";
import { useEffect, useState } from "react";
import axios from "axios"

const Educators = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getEducators = async () => {
    try {
      const educators = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/educators/fetch`
      );
      // console.log(educators.data.data);
      setData(educators.data.data);
    } catch (err) {
      console.log("Error occured", err);
    }
  };

  useEffect(()=>{
    getEducators();
  },[])

  useEffect(()=>{
  },[data])

  // Add this inside your component
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
      <div className="educators-content">
        <h1>
          Ft. Best IB Educators <span>on the planet</span>
        </h1>
        <p>
          Nail IB is a home to top-tier educators, including
          <span className="highlight">PatrickJMT</span> for Math AA SL. Patrick
          has over <strong>1.2 million YouTube subscribers</strong>; our team
          also boasts
          <strong> certified IB examiners</strong> and
          <strong> IB alumni with a perfect score!</strong>
        </p>
        <button>Explore IB Resources</button>
        <p onClick={() => navigate("/signup")}>Registers (it's free)</p>
      </div>
      <div className="educators-scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scrollLeft()}>
          ←
        </button>
        <div id="educators-video-container">
          {data.map(educator=>(
            <EducatorCard key={educator._id} educator={educator}/>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollRight()}>
          →
        </button>
      </div>
    </>
  );
};

export default Educators;
