import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { CiHeart } from "react-icons/ci";
import {
  shuffleArray,
  shuffledTechproductsb,
  Techproducts,
} from "./products/TechProducts";
import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const products = () => {
  const { findProductsImage } = useContext(AppContext);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
            {shuffledTechproductsb.map((product, i) => {
              return (
                <div className="image-a-div" key={product.id}>
                  {" "}
                  <div className="add-to-cart">Add to cart</div>
                  <img
                    loading="lazy"
                    src={product.src}
                    className="Image-a"
                    alt="carousel-image-a"
                    onClick={() => findProductsImage(product.id)}
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
        </div>
        <div>
          <Slider {...settings}>
            {Techproducts.map((product, i) => {
              return (
                <div className="image-a-div" key={i}>
                  <div className="add-to-cart">Add to cart</div>
                  <img
                    loading="lazy"
                    src={product.src}
                    className="Image-a"
                    alt="carousel-image-a"
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
          <button className="view-all-products-b">View All Products</button>
        </div>
      </div>
    </div>
  );
};

export default products;
