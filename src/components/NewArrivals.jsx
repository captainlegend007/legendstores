import ps5pro from ".././assets/ps5pro.jpg";
import FemaleModel from ".././assets/FemaleModel.jpg";
import Speaker from ".././assets/Speaker.webp";
import Perfume from ".././assets/perfume.jpg";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const NewArrivals = () => {
  const { findProductsImage } = useContext(AppContext);
  return (
    <div className="new-arrivals-parent">
      <div className="flash-sales">
        <div className="todays">
          <hr className="today-line" />
          <h2 className="today-text">Featured</h2>
        </div>
        <div className="flash-sales-header">
          <h2 className="flash-sales-text">New Arrivals</h2>
        </div>
      </div>
      <div className="new-arrivals-parent-grid">
        <div className="new-arrivals-child-a">
          <div className="collection-text">
            <p className="main-collection-text">PlayStation 5</p>
            <p className="sub-collection-text">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p
              className="sub-collection-text-shop-now  "
              onClick={() => findProductsImage(15)}
            >
              Shop Now
            </p>
          </div>

          <img src={ps5pro} className="ps5pro" />
        </div>
        <div className="new-arrivals-child-b">
          <div className="child-b-topa">
            <div className="model-collection-text">
              <p className="main-collection-text">Women’s Collections</p>
              <p className="sub-collection-text">
                Featured woman collections that give you another vibe.
              </p>
              <p className="sub-collection-text-shop-now">Shop Now</p>
            </div>
            <img src={FemaleModel} className="female-model" />
          </div>
          <div className="child-b-downb">
            <div className="downb-a">
              <div className="speaker-collection-text">
                <p className="main-collection-text">Speakers</p>
                <p className="sub-collection-text">Amazon wireless speakers</p>
                <p
                  className="sub-collection-text-shop-now"
                  onClick={() => findProductsImage(10)}
                >
                  Shop Now
                </p>
              </div>
              <img src={Speaker} className="speaker" />
            </div>
            <div className="downb-c">
              <div className="perfume-collection-text">
                <p className="main-collection-text">Perfume</p>
                <p className="sub-collection-text">GUCCI INTENSE OUD EDP</p>
                <p
                  className="sub-collection-text-shop-now"
                  onClick={() => findProductsImage(12)}
                >
                  Shop Now
                </p>
              </div>
              <img src={Perfume} className="perfume" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
