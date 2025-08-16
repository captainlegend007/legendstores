import { useContext, useState } from "react";
import "./productspage.css";
import SignUpImage from "../assets/Messi.jpg";
import { CiHeart } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import BestSelling from "../components/BestSelling";
import { AppContext } from "../components/context/AppContext";
import { Techproducts } from "../components/products/TechProducts";

const ProductsPage = () => {
  const { productItem, addToWishlist } = useContext(AppContext);
  const [value, setValue] = useState(0);

  return (
    <div>
      <div className="contact-parent">
        <ul className="contact-header">
          <li className="home-text"> Account /</li>
          <li className="contact-text">Gaming /</li>
          <li className="contact-text"> {Techproducts[productItem.image - 1].name} </li>
        </ul>
      </div>

      <div className="produts-details-grid">
        <div className="products-image-grid">
          <div className="products-image-a-div">
            <img
              src={Techproducts[productItem.image - 1].src}
              className="products-image-a"
            />
          </div>
          <div className="products-image-a-div">
            <img
              src={Techproducts[productItem.image - 1].src}
              className="products-image-a"
            />
          </div>
          <div className="products-image-a-div">
            <img
              src={Techproducts[productItem.image - 1].src}
              className="products-image-a"
            />
          </div>
          <div className="products-image-a-div">
            <img
              src={Techproducts[productItem.image - 1].src}
              className="products-image-a"
            />
          </div>
        </div>
        <div className="products-main-image-div">
          <img
            src={Techproducts[productItem.image - 1].src}
            className="products-main-image"
          />
        </div>
        <div className="products-header-text">
          <div className="products-text-flex">
            <div className="first-product-text">
              <h2 className="products-name">
                {Techproducts[productItem.image - 1].name}
              </h2>
              <h1 className="products-price">
                {" "}
                {Techproducts[productItem.image - 1].price}
              </h1>
              <p className="products-details">
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
                for easy bubble free install & mess free removal Pressure sensitive.
              </p>
              <hr className="products-line" />
            </div>
            <div className="second-product-text">
              <h2 className="products-colors"> Colours:</h2>
              <div className="products-size-div">
                <li className="products-size-text">Size:</li>
                <li className="products-sizes">XS</li>
                <li className="products-sizes">S</li>
                <li className="products-sizes">M</li>
                <li className="products-sizes">L</li>
                <li className="products-sizes">XL</li>
              </div>
              <div className="products-number-parent">
                <button
                  className="products-decrement"
                  onClick={() => setValue(value - 1)}
                >
                  -
                </button>
                <input
                  type="tel"
                  className=" products-number-input"
                  placeholder="0"
                  value={value}
                />
                <button
                  className="products-increment"
                  onClick={() => setValue(value + 1)}
                >
                  +
                </button>

                <button className="products-buy-now">Buy Now</button>
                <button
                  className="products-wishlist"
                  onClick={() =>
                    addToWishlist(Techproducts[productItem.image - 1].id, value)
                  }
                >
                  <CiHeart className="products-wishlist-heart" />
                </button>
              </div>
              <div className="products-delivery-details">
                <span className="sub-products-delivery">
                  <div>
                    <FaTruckFast className="product-delivery-icon" />
                  </div>
                  <div className="products-delivery-main-text">
                    <h3 className="free-delivery-text">Free Delivery </h3>
                    <p className="products-delivery-text">
                      Enter your postal code for Delivery Availability{" "}
                    </p>
                  </div>
                  <hr className="products-delivery-line" />
                </span>
                <span className="sub-products-delivery">
                  <div>
                    <FaTruckFast className="product-delivery-icon" />
                  </div>
                  <div className="products-delivery-main-text">
                    <h3 className="free-delivery-text">Free Delivery </h3>
                    <p className="products-delivery-text">
                      Enter your postal code for Delivery Availability{" "}
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestSelling />
    </div>
  );
};

export default ProductsPage;
