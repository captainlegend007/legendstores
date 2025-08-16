import "./homepage.css";
import Carousel from "../components/carousel";
import BestSelling from "../components/BestSelling";
import Products from "../components/products";
import { FaPhone } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { FaStopwatch } from "react-icons/fa6";
import { SiFacebookgaming } from "react-icons/si";
import NewArrivals from "../components/NewArrivals";
import Perks from "../components/perks";
import GooglePixel9pro from "../assets/GooglePixel9pro.jpg";
import PortableSpeaker from "../assets/Portable-Speaker.png";
import { useContext } from "react";
import { AppContext } from "../components/context/AppContext";

const HomePage = () => {
  const { username, isUserLoggedIn } = useContext(AppContext);

  return (
    <div>
      <div className="homepage-grid">
        <div className="items-top">
          {/* <hr className="homepage-line" /> */}
          <span className="homepage-parent">
            <ul className="homepage-items-list">
              <li>Woman’s Fashion</li>
              <li>Men’s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </span>
        </div>

        <div className="homepage-products-parent">
          {/* <p className="username">Welcome {username.firstName} </p> */}
          <div className="homepage-products">
            <div className="homepage-products-item">
              <h1 className="voucher">Up to 10% off Voucher</h1>
            </div>
            <div className="homepage-products-item">
              <img src={GooglePixel9pro} className="google-pixel" />
            </div>
          </div>
        </div>
      </div>
      <div className="flash-sales">
        <div className="todays">
          <hr className="today-line" />
          <h2 className="today-text">Today's</h2>
        </div>
        <div className="flash-sales-header">
          <h2 className="flash-sales-text">Flash Sales</h2>
        </div>
        <Carousel />
      </div>
      <div className="category-parent">
        <div className="browse-by-category">
          <hr className="category-line" />
          <h2 className="category-text">Category</h2>
          <h2 className="category-text-b">Browse by Categories</h2>
        </div>
        <div className="category-grid">
          <div className="homepage-grid-box">
            <FaPhone className="gadget-icon" />
            <p className="gadget-text">Phones</p>
          </div>
          <div className="homepage-grid-box">
            <FaComputer className="gadget-icon" />
            <p className="gadget-text">Computers</p>
          </div>
          <div className="homepage-grid-box">
            <FaStopwatch className="gadget-icon" />
            <p className="gadget-text">SmartWatch</p>
          </div>
          <div className="homepage-grid-box">
            <FaCamera className="gadget-icon" />
            <p className="gadget-text">Camera</p>
          </div>
          <div className="homepage-grid-box">
            <FaHeadphones className="gadget-icon" />
            <p className="gadget-text">Headphone</p>
          </div>
          <div className="homepage-grid-box">
            <SiFacebookgaming className="gadget-icon" />
            <p className="gadget-text">Gaming</p>
          </div>
          <hr />
        </div>
        <BestSelling />
        <div className="music-grid">
          <div className="music-grid-parent">
            <div className="music-grid-text">
              <h3 className="music-categories">Categories</h3>
              <h1 className="music-main-text">Enhance Your Music Experience</h1>
              <button className="music-categories-button">Buy Now</button>
            </div>
          </div>
          <div className="music-grid-image">
            <img src={PortableSpeaker} className="portable-speaker" />
          </div>
        </div>
        <Products />
      </div>
      <NewArrivals />
      <Perks />
    </div>
  );
};

export default HomePage;
