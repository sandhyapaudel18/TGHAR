
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Find Us</h3>
        <p>+977 9867556559</p>
       
      </div>

      <div className="footer-section">
        <h3>Shop</h3>
        <ul>
          <li>Loose Leaf Tea</li>
          <li>Teaware</li>
          
        </ul>
      </div>

      <div className="footer-section">
        <h3>Learn</h3>
        <ul>
          <li>How to Make Tea</li>
          <li>Types of Tea</li>
          <li>How to Store Tea</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>About</h3>
        <ul>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Work With Us</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>TikTok</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
