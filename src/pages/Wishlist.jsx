import "./cart.css";
import SignUpImage from "../assets/Messi.jpg";
import { Techproducts } from "../components/products/TechProducts";
import { useContext } from "react";
import { AppContext } from "../components/context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const Wishlist = () => {
  const navigate = useNavigate();
  const { removeFromWishlist, wishlist, backendUrl } = useContext(AppContext);

  const addWishListToCart = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/add-wishlist-to-cart",
        {}
      );
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="contact-parent">
        <ul className="contact-header">
          <li className="home-text"> Home /</li>
          <li className="contact-text">Wishlist</li>
        </ul>
      </div>
      <div className="cart-grid">
        <div>
          <p className="cart-product">Product</p>
        </div>
        <div>
          <p className="cart-product">Price</p>
        </div>
        <div>
          <p className="cart-product">Quantity</p>
        </div>
        <div>
          <p className="cart-product">Subtotal</p>
        </div>
      </div>

      {wishlist.map((product, i) => {
        return (
          <div className="cart-grid" key={i}>
            <div className="product-cart-parent">
              <img
                src={Techproducts[product.item - 1].src}
                className="cart-product-image"
              />
              <p className="cart-product-b">{Techproducts[product.item - 1].name}</p>
            </div>
            <div>
              <p className="cart-product">{Techproducts[product.item - 1].price}</p>
            </div>
            <div>
              <p className="cart-product">{product.quantity}</p>
            </div>
            <div>
              <p className="cart-product">
                $
                {Techproducts[product.item - 1].price.replace(/[$,]/g, "") *
                  product.quantity}
                <MdDeleteOutline
                  className="delete-icon"
                  onClick={() => removeFromWishlist(product.item)}
                />
              </p>
            </div>
          </div>
        );
      })}
      <div className="cart-buttons-grid">
        <div>
          <Link to="/">
            <button className="return-to-shop-button">Return To Shop</button>
          </Link>
        </div>
        <div className="update-cart-parent">
          <button className="update-cart-button" onClick={addWishListToCart}>
            Add To Cart
          </button>
        </div>
      </div>

      {/* <span className="checkout-parent-grid">
        <div className="coupon-parent">
          <input placeholder="Coupon Code" className="coupon-input" />
          <button className="apply-coupon">Apply Coupon</button>
        </div>
        <div className="cart-total-parent">
          <h3 className="cart-total">Cart Total</h3>
          <div className="sub-total-div">
            <p>Subtotal</p>
            <p className="cart-price">Price</p>
          </div>
          <hr />

          <div className="sub-total-div">
            <p>Shipping:</p>
            <p className="cart-price">Price</p>
          </div>
          <hr />
          <div className="sub-total-div">
            <p>Total:</p>
            <p className="cart-price">Price</p>
          </div>
          <div className="check-out-parent">
            <button className="check-out-button">Proceed to checkout</button>
          </div>
        </div>
      </span> */}
    </div>
  );
};

export default Wishlist;
