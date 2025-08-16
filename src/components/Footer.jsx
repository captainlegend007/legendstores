import "./footer.css";
import { IoSend } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="footer-parent">
        <div className="footer-grid">
          <span className="footer-child">
            <h2 className="first-footer-text"> Exclusive</h2>
            <h3 className="second-footer-text"> Subscribe</h3>
            <p className="footer-text-c">Get 10% off your first order</p>
            <div className="footer-input-parent">
              <input placeholder="Enter your email" className="footer-input" />
              <IoSend className="footer-send-icon" />
            </div>
          </span>
          <span className="footer-child">
            <h2 className="first-footer-text"> Support</h2>
            <h3 className="second-footer-text">
              {" "}
              Random Address Lorem ipsum dol ipsum dolo r
            </h3>
            <p className="footer-text-c">email@gmail.com</p>
          </span>

          <span className="footer-child">
            <h2 className="first-footer-text">Account</h2>
            <h3 className="second-footer-text">My Account</h3>
            <p className="footer-text-c">Login / Register</p>
            <p className="footer-text-c">Cart</p>
            <p className="footer-text-c">Wishlist</p>
            <p className="footer-text-c">Shop</p>
          </span>
          <span className="footer-child">
            <h2 className="first-footer-text">Quick Link</h2>
            <h3 className="second-footer-text">Privacy Policy</h3>
            <p className="footer-text-c">Terms Of Use</p>
            <p className="footer-text-c">FAQ</p>
            <p className="footer-text-c">Contact</p>
          </span>
          <span className="footer-child">
            <h2 className="first-footer-text">Download App</h2>
            <h3 className="second-footer-text">Save $3 with App New User Only</h3>
            <p className="footer-text-icons">
              <FaFacebookF /> <FaXTwitter /> <FaInstagram /> <FaLinkedinIn />
            </p>
          </span>
        </div>
        <div className="copyright-text">Copyright 2022. All right reserved</div>
      </div>
    </div>
  );
};

export default Footer;
