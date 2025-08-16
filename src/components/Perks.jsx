import { FaTruck } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdGppGood } from "react-icons/md";

const Perks = () => {
  return (
    <div>
      <div className="perks-grid">
        <div>
          <div className="truck-bg">
            <FaTruck className="truck" />
          </div>
          <h3 className="free-delivery">FREE AND FAST DELIVERY</h3>
          <p className="free-delivery-text">Free delivery for all orders over $140</p>
        </div>
        <div>
          <div className="truck-bg">
            <RiCustomerService2Line className="truck" />
          </div>
          <h3 className="free-delivery">24/7 CUSTOMER SERVICE</h3>
          <p className="free-delivery-text">Friendly 24/7 customer support</p>
        </div>
        <div>
          <div className="truck-bg">
            <MdGppGood className="truck" />
          </div>
          <h3 className="free-delivery">MONEY BACK GUARANTEE</h3>
          <p className="free-delivery-text">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
