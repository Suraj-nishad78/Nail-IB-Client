import "./pages.css";

//imports all the components 
import Intro from "../components/intro/Intro";
import MsgBox from "../components/msgbox/MsgBox";
import Educators from "../components/educator/Educators";
import Testmonials from "../components/testmonials/Testmonials";
import Footer from "../components/footer/Footer";

//home component
const Home = () => {
  return (
    <>
      <div className="home-conatainer">
        {/* intro component listed here */}
        <div className="intro-container">
          <Intro />
        </div>
        {/* msg box component listed here */}
        <div className="msg-main-container">
          <div className="msg-box-home">
            <MsgBox />
          </div>
          {/* Image style the msg box container */}
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
        {/* Educators component listed here */}
        <div className="educators-container">
          <Educators />
        </div>
        {/* Testmonials component listed here */}
        <div className="testmonials-container">
          <Testmonials />
        </div>
        {/* Footer component listed here */}
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
