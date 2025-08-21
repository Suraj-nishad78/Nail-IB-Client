import "./pages.css";

import Intro from "../components/intro/Intro";
import MsgBox from "../components/msgbox/MsgBox";
import Educators from "../components/educator/Educators";

const Home = () => {
  return (
    <>
      <div className="home-conatainer">
        <div className="intro-container">
          <Intro />
        </div>
        <div className="msg-main-container">
          <div className="msg-box-home">
            <MsgBox />
          </div>
          <img
            id="image-1"
            src="https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbutton-up-active.bfe2c854.png&w=640&q=100"
          />
          <img
            id="image-2"
            src="https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbutton-down.0d121465.png&w=640&q=100"
          />
          <img
            id="image-3"
            src="https://cluely.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbutton-comand-active.e10fce35.png&w=640&q=100"
          />
        </div>
        <div className="educators-container">
            <Educators />
        </div>
      </div>
    </>
  );
};

export default Home;
