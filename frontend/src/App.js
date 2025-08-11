import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageCaptioner from "./ImageCaptioner";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

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

      <section className="home-section">
  {/* Decorative Background Objects */}
  <div className="decorative-orb orb1"></div>
  <div className="decorative-orb orb2"></div>
  <div className="decorative-orb orb3"></div>

  <main className="main-content">
    {/* Left Side (Text + Buttons + Form) */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, staggerChildren: 0.2 }
        }
      }}
      className="text-block"
    >
      <motion.h1
        variants={{ hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } }}
        className="app-title gradient-text"
      >
        Transform Images into Words
      </motion.h1>

      <motion.p
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="app-subtitle"
      >
        Upload your image and let AI craft beautiful captions instantly.
      </motion.p>

      <motion.div
        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
        className="captioner-wrapper"
      >
        <ImageCaptioner />
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="cta-buttons"
      >
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Learn More</button>
      </motion.div>
    </motion.div>

    {/* Right Side (Hero Image) */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.5 }}
      className="hero-image"
    >
      <img src="/pic.png" alt="AI generating captions" />
    </motion.div>
  </main>
</section>





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
<footer className="new-footer">
  <div className="footer-columns">
    {/* About / Contact Info */}
    <div className="footer-col">
      <h4>About Apex Marketing</h4>
      <p>
        We are a global marketing agency helping brands connect with their
        audience through creative campaigns and strategic insights.
      </p>
      <p><strong>📍 Address:</strong> 123 Business Road, Karachi, Pakistan</p>
      <p><strong>📞 Phone:</strong> +92 300 1234567</p>
      <p><strong>📧 Email:</strong> info@apexmarketing.com</p>
    </div>

    {/* Quick Links */}
    <div className="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div className="footer-col">
      <h4>Our Services</h4>
      <ul>
        <li><a href="#">Digital Marketing</a></li>
        <li><a href="#">Social Media Management</a></li>
        <li><a href="#">SEO Optimization</a></li>
        <li><a href="#">Brand Strategy</a></li>
        <li><a href="#">Content Creation</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div className="footer-col">
      <h4>Subscribe to Our Newsletter</h4>
      <div className="subscribe-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <label className="footer-checkbox">
        <input type="checkbox" /> I confirm I am at least 16 years old
      </label>
      <div className="footer-social">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 Apex Marketing Solutions | All Rights Reserved</p>
    <p>
      <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
    </p>
  </div>
</footer>


    </div>
  );
}

export default App;
