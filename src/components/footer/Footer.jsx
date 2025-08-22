import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerbar">
        <div className="footer-icon">
          <img src="https://cdn.nailib.com/_next/static/media/logo-small.5691114d.svg?w=128&q=75" />
          <span>Nail-IB</span>
          <p>
            We offer the services you need to succeed online. Get in touch with
            us and let us help you transform your online presence.
          </p>
          <ul>
            <li>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
            <li>
              <i className="fa-solid fa-x"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-stack-overflow"></i>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>Pages</h2>
          <ul>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>Services</h2>
          <ul>
            <li>Video Lessons by Expert Educators</li>
            <li>Topic-Based Practice Question Bank</li>
            <li>Graded IA & EE Examples</li>
            <li>Interactive Flashcards</li>
            <li>Comprehensive Revision Notes</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>Products</h2>
          <ul>
            <li>Extensive Video Library</li>
            <li>Huge Question Repository</li>
            <li>Vast Flashcard Collection</li>
            <li>Documented IA/EE Sample Bank</li>
            <li>Documented IB Notes Library</li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>Quick Links</h2>
          <ul>
            <li>FAQ</li>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <h1></h1>
        <div className="footer-title">
          <div className="bottom-left-content">
            <p>© 2025 Nail-IB. All Rights Reserved.</p>
          </div>
          <div className="bottom-right-content">
            <p>
              Made with <i className="fa-solid fa-heart"></i> by Suraj Nishad
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
