import "./contact.css";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="contact-parent">
        <ul className="contact-header">
          <li className="home-text"> Home /</li>
          <li className="contact-text">Contact</li>
        </ul>
      </div>

      <form>
        <div className="contact-grid">
          <div className="contact-details">
            <span className="call-header">
              <div className="call-parent">
                <div className="phone-icon-div">
                  <FaPhone className="phone-icon" />
                </div>
                <p className="call-to-us">Call To Us</p>
              </div>
              <div>
                <p className="we-are-available">We are available 24/7, 7 days a week. </p>
                <p className="contact-phone">Phone: +8801611112222 </p>
              </div>
              <hr className="call-line" />
            </span>
            <span>
              <div className="call-parent">
                <div className="phone-icon-div">
                  <FaPhone className="phone-icon" />
                </div>
                <p className="call-to-us">Write To Us</p>
              </div>
              <div>
                <p className="we-are-available">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="contact-phone">Emails: customer@exclusive.com </p>
              </div>
              <hr />
            </span>
          </div>
          <div className="flex-inputs">
            <span className="top-inputs">
              <input placeholder="Your Name" required className="message-name" />
              <input placeholder="Your Email" required className="message-name" />
              <input placeholder="Phone" required className="message-name" />
              <textarea placeholder="Your Message" required className="your-message" />
              <button className="send-message-button"> Send Message</button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
