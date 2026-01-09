import { Link } from "react-router-dom";
import logo from "../assests/logo.svg";
import LinkedinIcon from "../assests/Linkedin.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="RealEstate Logo" />
            </div>
            <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
            <div className="footer-contact">
              <p>📍 Indore, Madhya Pradesh, India</p>
              <p>📞 +91 77704-56789</p>
              <p>✉️ info@realtrust.com</p>
            </div>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Properties</Link></li>
              <li><Link to="/">Locations Map</Link></li>
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Contact us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><Link to="/">Visit Requests</Link></li>
              <li><Link to="/">WishList</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/">My account</Link></li>
              <li><Link to="/">Terms & Conditions</Link></li>
              <li><Link to="/">Promotional Offers</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Customer Care</h4>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/">My account</Link></li>
              <li><Link to="/">Wish List</Link></li>
              <li><Link to="/">Order tracking</Link></li>
              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/">Contact us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Newsletter</h4>
            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <img src={LinkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">t</a>
              <a href="#" aria-label="Instagram">i</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Real Trust Platform. All Rights Reserved.</p>
          <div className="footer-links">
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy & Policy</Link>
            <Link to="/">Claim</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
