// src/components/Intro.jsx
import { useNavigate } from "react-router-dom";
import "./intro.css";

const Intro = () => {
  const navigate = useNavigate();

  return (
    // Intro Component content
    <div className="landing-container">
      <div className="landing-content">
        <h1>The Largest IB Resources Platform On The Planet</h1>
        <p>
          Access 5,000+ examiner-led videos, 200+ solved past papers, 37,000+
          practice questions, 5,900+ notes, 53,000+ flashcards, and hundreds of
          graded IA/EE examples — all in one place.
        </p>
        <button className="register-btn" onClick={() => navigate("/signup")}>
          <span className="icon">
            <img
              src="https://cdn.nailib.com/_next/static/media/logo-small.5691114d.svg?w=128&q=75"
              alt="logo"
            />
          </span>
          Register (it's free)
        </button>
      </div>

      <div className="landing-image">
        <img
          src="https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbutton-enter.2a75dca4.png&w=640&q=100"
          alt="Preview"
        />
      </div>
    </div>
  );
};

export default Intro;
