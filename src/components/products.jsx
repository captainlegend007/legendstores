import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { CiHeart } from "react-icons/ci";
import { shuffleArray, Techproducts } from "./products/TechProducts";
import { Rating } from "@smastrom/react-rating";

const products = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <div className="slider-container-b">
        <div className="best-selling-parent">
          <div className="best-selling-by-category">
            <hr className="best-selling-line" />
            <h2 className="best-selling-text">Our Products</h2>{" "}
            <h1 className="best-selling-product">Explore Our Products</h1>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {shuffleArray(Techproducts).map((product, i) => {
              return (
                <div className="image-a-div" key={i}>
                  {" "}
                  <div className="add-to-cart">Add to cart</div>
                  <img src={product.src} className="Image-a" alt="carousel-image-a" />
                  {/* <CiHeart className="product-wishlist" /> */}
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                  </div>
                  <p className="product-price">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={product.rating}
                      spaceBetween="medium"
                    />
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
        <div>
          <Slider {...settings}>
            {shuffleArray(Techproducts).map((product, i) => {
              return (
                <div className="image-a-div" key={i}>
                  <div className="add-to-cart">Add to cart</div>
                  <img src={product.src} className="Image-a" alt="carousel-image-a" />
                  {/* <CiHeart className="product-wishlist" /> */}
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                  </div>
                  <p className="product-price">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={product.rating}
                      spaceBetween="medium"
                    />
                  </p>
                </div>
              );
            })}
          </Slider>
          <button className="view-all-products-b">View All Products</button>
        </div>
      </div>
    </div>
  );
};

export default products;
