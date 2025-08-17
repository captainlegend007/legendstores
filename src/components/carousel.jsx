import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { CiHeart } from "react-icons/ci";
import { shuffleArray, Techproducts } from "./products/TechProducts";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Carousel = () => {
  const { findProductsImage, addToCart } = useContext(AppContext);

  const [wishlist, setWishlist] = useState(true);

  const settings = {
    dots: false,
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
      <div className="slider-container">
        <div>
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
                  {/* {wishlist ? (
                    <IoIosHeartEmpty
                      className="product-wishlist-b"
                      onClick={() => setWishlist(!wishlist)}
                    />
                  ) : (
                    <IoIosHeart
                      className="product-wishlist"
                      onClick={() => setWishlist(!wishlist)}
                    />
                  )} */}

                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                  </div>
                  <p className="product-price">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={product.rating}
                      spaceBetween="medium"
                    />
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
        <button className="view-all-products">View All Products</button>
        <hr className="carousel-line" />
      </div>
    </div>
  );
};

export default Carousel;
