import "./billing.css";
import SignUpImage from "../assets/Messi.jpg";

const BillingDetails = () => {
  return (
    <div>
      <div className="contact-parent">
        <ul className="contact-header">
          <li className="home-text"> Account /</li>
          <li className="contact-text">My Account /</li>
          <li className="contact-text">Product /</li>
          <li className="contact-text">View Cart /</li>
          <li className="contact-text">CheckOut /</li>
        </ul>
      </div>

      <div className="billing-details">
        <h3 className="billing-details-text"> Billing Details</h3>

        <div className="billing-details-grid">
          <div className="billing-input-fields">
            <span>
              <input placeholder="First Name" className="billing-input" />
            </span>
            <span>
              <input placeholder="First Name" className="billing-input" />
            </span>
            <span>
              <input placeholder="First Name" className="billing-input" />
            </span>
            <span>
              <input placeholder="First Name" className="billing-input" />
            </span>
            <span>
              <input placeholder="First Name" className="billing-input" />
            </span>
            <span>
              <input placeholder="First Name" className="billing-input" />
            </span>
            <span>
              <input placeholder="First Name" className="billing-input" />
            </span>
            <span className="save-information-parent">
              <input type="checkbox" />
              <p className="save-information">
                Save this information for faster check-out next time
              </p>
            </span>
          </div>
          <div className="billing-items">
            <span className="items-checkout-grid">
              <div className="items-checkout-parent">
                <div className="checkout-image-container">
                  <img src={SignUpImage} className="items-checkout-image" />
                  <p className="ordered-item">LCD Monitor</p>
                </div>
                <div className="ordered-item-price">$650</div>
                <div className="checkout-image-container">
                  <img src={SignUpImage} className="items-checkout-image" />
                  <p className="ordered-item">LCD Monitor</p>
                </div>
                <div className="ordered-item-price">$650</div>
              </div>
            </span>

            <div className="cart-total-parent-b">
              <div className="sub-total-div-b">
                <p>Subtotal</p>
                <p className="cart-price-b">Price</p>
              </div>
              <hr />

              <div className="sub-total-div-b">
                <p>Shipping:</p>
                <p className="cart-price-b">Price</p>
              </div>
              <hr />
              <div className="sub-total-div-b">
                <p>Total:</p>
                <p className="cart-price-b">Price</p>
              </div>
              <div className="input-checkbox-parent">
                <input type="checkbox" className="input-checkbox" />
                <p>Bank</p>
              </div>
              <div className="input-checkbox-parent">
                <input type="checkbox" className="input-checkbox" />
                <p>Cash on Delivery</p>
              </div>
              <span className="checkout-parent-grid-b">
                <div className="coupon-parent-b">
                  <input placeholder="Coupon Code" className="coupon-input-b" />
                  <button className="apply-coupon-b">Apply Coupon</button>
                  <button className="place-order-b">Place Order</button>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
