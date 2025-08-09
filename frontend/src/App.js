import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageCaptioner from "./ImageCaptioner";
import "./App.css";

function App() {
  const footerRef = useRef(null);
  const contactRef = useRef(null);
  const dolphinRef = useRef(null);

  const [dolphinEnabled, setDolphinEnabled] = useState(false);
  const [dolphinPos, setDolphinPos] = useState({ x: 0, y: 0 });

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Smooth dolphin movement
  useEffect(() => {
    let animationFrame;
    const moveDolphin = (e) => {
      if (dolphinEnabled) {
        setDolphinPos((prev) => ({
          x: prev.x + (e.pageX - prev.x) * 0.1,
          y: prev.y + (e.pageY - prev.y) * 0.1,
        }));
      }
    };

    const animate = () => {
      if (dolphinRef.current) {
        dolphinRef.current.style.left = `${dolphinPos.x}px`;
        dolphinRef.current.style.top = `${dolphinPos.y}px`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveDolphin);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveDolphin);
      cancelAnimationFrame(animationFrame);
    };
  }, [dolphinEnabled, dolphinPos]);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/caption.png" alt="Circles" />
        </div>
        <div className="navbar-center">
          <img src="/Logo.png" alt="Logo" className="logo" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </button>
          <button onClick={() => scrollTo(footerRef)}>About</button>
          <button onClick={() => scrollTo(contactRef)}>Contact</button>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="hero-image">
        <img src="/Logo.png" alt="Hero" className="center-hero" />
      </div>

      {/* Main Content Wrapper */}
      <main className="main-content">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="app-title"
        >
          Image Caption Generator
        </motion.h1>

        {/* Image Captioner Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ImageCaptioner />
        </motion.div>
      </main>

      {/* Dolphin Image */}
      {dolphinEnabled && (
        <img
          ref={dolphinRef}
          src="/dolphin.gif"
          alt="Dolphin"
          className="dolphin-follower"
        />
      )}

      {/* Dolphin Toggle Button */}
      <div className="dolphin-toggle-container">
        <button
          className="dolphin-toggle-btn"
          onClick={() => setDolphinEnabled((prev) => !prev)}
        >
          {dolphinEnabled ? "Disable Dolphin" : "Enable Dolphin"}
        </button>
      </div>

      {/* Footer */}
      <footer className="footer" ref={footerRef}>
        <div className="footer-top">
          <div className="footer-column">
            <h3>Apex Marketing</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Client Portal</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Global</h3>
            <ul>
              <li><a href="#">Apex Canada</a></li>
              <li><a href="#">Apex UK</a></li>
              <li><a href="#">Apex UAE</a></li>
              <li><a href="#">Apex Pakistan</a></li>
            </ul>
          </div>

          <div className="footer-column subscribe-box">
            <h3>Get the Latest News</h3>
            <div className="subscribe-form">
              <input type="email" placeholder="Your email here" />
              <button>Subscribe</button>
            </div>
            <div className="checkbox-wrapper">
              <label>
                <input type="checkbox" />
                <span>
                  By checking the box, you agree that you're at least 16 years old.
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-youtube"></i>
        </div>

        <hr />

        <div className="footer-bottom">
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Supplier Code of Conduct</a></li>
            <li><a href="#">Do Not Sell My Info</a></li>
          </ul>
          <p>© 2025 Apex Marketing Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
