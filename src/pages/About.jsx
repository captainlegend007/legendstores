import {
  FaMoneyBillTransfer,
  FaMoneyBillWave,
  FaPeopleGroup,
  FaShop,
} from "react-icons/fa6";
import "./about.css";
import MessiJersey from "../assets/Messi.jpg";
import Slider from "react-slick";
import Perks from "../components/perks";
import TeamA from "../assets/TeamA.jpg";
import TeamB from "../assets/TeamB.jpg";
import TeamC from "../assets/TeamC.jpg";
import AboutImage from "../assets/AboutImage.jpg";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="contact-parent">
        <ul className="contact-header">
          <li className="home-text"> Home /</li>
          <li className="contact-text">About</li>
        </ul>
      </div>

      <div className="about-story-div">
        <div className="our-story-texts">
          <h1 className="our-story-h1"> Our Story</h1>
          <p className="our-story-p">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace
            with an active presense in Bangladesh. Supported by wide range of tailored
            marketing, data and service solutions, Exclusive has 10,500 sallers and 300
            brands and serves 3 millioons customers across the region.
          </p>
          <p className="our-story-p">
            Exclusive has more than 1 Million products to offer, growing at a very fast.
            Exclusive offers a diverse assotment in categories ranging from consumer.
          </p>
        </div>
        <div className="our-story-image-div">
          <img src={AboutImage} className="team-image" />
        </div>
      </div>

      <div className="about-sales-grid">
        <div className="grid-1">
          <div className="sales-icon-div">
            <FaShop className="about-sales-icon" />
          </div>
          <div className="sales-text">
            <h2>10.5k</h2>
            <p>Sellers active our site</p>
          </div>
        </div>
        <div className="grid-1">
          <div className="sales-icon-div">
            <FaMoneyBillTransfer className="about-sales-icon" />
          </div>
          <div className="sales-text">
            <h2>33k</h2>
            <p>Monthly Produduct Sale</p>
          </div>
        </div>
        <div className="grid-1">
          <div className="sales-icon-div">
            <FaPeopleGroup className="about-sales-icon" />
          </div>
          <div className="sales-text">
            <h2>45.5k</h2>
            <p>Customer active in our site</p>
          </div>
        </div>
        <div className="grid-1">
          <div className="sales-icon-div">
            <FaMoneyBillWave className="about-sales-icon" />
          </div>
          <div className="sales-text">
            <h2>25k</h2>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
      </div>
      <div className="team-slider-container">
        <Slider {...settings}>
          <div className="team-slide">
            <img src={TeamA} className="team-image" />
            <nav className="team-text">
              <h2>John Doe</h2>
              <p>Founder and Chairman</p>
            </nav>
          </div>
          <div className="team-slide">
            <img src={TeamB} className="team-image" />
            <nav className="team-text">
              <h2>Sebastian Stan</h2>
              <p>Managing Director</p>
            </nav>
          </div>
          <div className="team-slide">
            <img src={TeamC} className="team-image" />
            <nav className="team-text">
              <h2>Adaline Smith</h2>
              <p>Product Designer</p>
            </nav>
          </div>
          <div className="team-slide">
            <img src={MessiJersey} className="team-image" />
            <nav className="team-text">
              <h2>The GOAT</h2>
              <p>Lionel Messi</p>
            </nav>
          </div>
        </Slider>
      </div>
      <Perks />
    </div>
  );
};

export default About;
