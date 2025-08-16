import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bestsellingcarousel.css";
import "./carousel.css";
import { CiHeart } from "react-icons/ci";
import { shuffleArray, Techproducts } from "./products/TechProducts";
import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const BestSelling = () => {
  const { findProductsImage, addToCart } = useContext(AppContext);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-main-container">
      <div className="best-selling-container">
        <div className="best-selling-parent">
          <div className="best-selling-by-category">
            <hr className="best-selling-line" />
            <h2 className="best-selling-text">This Month</h2>
            <h1 className="best-selling-product">Best Selling Products</h1>
          </div>
          <Slider {...settings}>
            {shuffleArray(Techproducts).map((product, i) => {
              return (
                <div className="image-a-div" key={i}>
                  <div className="add-to-cart" onClick={() => addToCart(product.id)}>
                    Add to cart
                  </div>
                  <img
                    src={product.src}
                    className="Image-a"
                    alt="carousel-image-a"
                    onClick={() => findProductsImage(i + 1)}
                  />
                  {/* <CiHeart className="product-wishlist" /> */}
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                  </div>
                  <p className="product-price">
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={product.rating}
                      spaceBetween="medium"
                    />
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>{" "}
      </div>
    </div>
  );
};

export default BestSelling;
