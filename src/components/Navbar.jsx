import "./navbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaCartShopping, FaShop, FaUser } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { LuLogOut } from "react-icons/lu";

// const Navbar = () => {

//   const Logout = async () => {
//     try {
//       const { data } = await axios.post(backendUrl + "/api/auth/logout");
//       console.log(data.message);
//       if (data.success) {
//         toast.success(data.message);
//         setIsUserLoggedIn(false);
//         setMenu(false);
//         setCart([]);
//         setWishlist([]);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="header-parent">
//       <h2 className="header-name">Legend Stores</h2>
//       <span className="header-links">
//         <ul>
//           <Link to="/" className="no-underline-link">
//             <li>Home</li>
//           </Link>
//           <Link to="/contact" className="no-underline-link">
//             <li>Contact</li>
//           </Link>
//           <Link to="/about" className="no-underline-link">
//             <li>About</li>
//           </Link>
//           <Link to="/signup" className="no-underline-link">
//             <li>Sign Up </li>
//           </Link>
//         </ul>
//       </span>

//       <div
//         className="search-container"
//         style={{ top: isUserLoggedIn ? "-80px" : "-65px" }}
//       >
//
//
//             {wishlist?.length !== 0 && (
//               <p className="cart-number-text">{wishlist.length}</p>
//             )}

//
//
//         <Link to="/cart" className="no-underline-link">
//           <div className="cart-number">
//             {cart?.length !== 0 && <p className="cart-number-text">{cart.length}</p>}

//
//           {!isUserLoggedIn && menu && (
//             <nav className="login-dropdown">
//               <Link to="/signup" className="no-underline-link">
//                 <p
//                   className="login-text"
//                   onClick={() => {
//                     setLogin(false);
//                     setMenu(false);
//                   }}
//                 >
//                   Login
//                 </p>
//               </Link>

//               <Link to="/signup" className="no-underline-link">
//                 <p
//                   className="login-text"
//                   onClick={() => {
//                     setLogin(true);
//                     setMenu(false);
//                   }}
//                 >
//                   Signup
//                 </p>
//               </Link>
//             </nav>
//           )}

//           {isUserLoggedIn && menu && (
//             <nav className="login-dropdown">
//               <div className="menu-text">
//                 <Link to="/user-profile" className="no-underline-link">
//                   <p className="login-text">
//                     <FaUser className="icons" />
//                     My Account
//                   </p>
//                 </Link>
//               </div>

//               <div className="menu-text">
//                 <Link to="/signup" className="no-underline-link">
//                   <p className="login-text">
//                     {" "}
//                     <FaShop className="icons" />
//                     My Order
//                   </p>
//                 </Link>
//               </div>

//               <div className="menu-text">
//                 <Link to="/signup" className="no-underline-link">
//                   <p className="login-text">
//                     <FaCartShopping className="icons" />
//                     My Cart
//                   </p>
//                 </Link>
//               </div>
//               <div className="menu-text">
//                 <Link className="no-underline-link" onClick={Logout}>
//                   <p className="login-text">
//                     <LuLogOut className="icons" />
//                     Logout
//                   </p>
//                 </Link>
//               </div>
//             </nav>
//           )}
//         </div>
//         {isUserLoggedIn ? (
//           <div className="user-icon" onClick={() => setMenu(!menu)}>
//             <h4 className="user-icon-name">
//               {(username?.firstName || "")[0]?.toUpperCase() ? (
//                 // If we successfully get an uppercase initial, display it
//                 (username?.firstName || "")[0]?.toUpperCase()
//               ) : (
//                 // Otherwise (if username, firstName is missing, or firstName is an empty string), show the icon
//                 <p className="user-icon-name">U</p>
//               )}
//             </h4>
//           </div>
//         ) : (
//           // If the user is not logged in at all, always show the icon
//           <FaUser className="heart-icon-b" onClick={() => setMenu(!menu)} />
//         )}
//       </div>

//       {/* <hr className="header-ruler" /> */}
//     </div>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const {
    setLogin,
    wishlist,
    isUserLoggedIn,
    setIsUserLoggedIn,
    backendUrl,
    menu,
    setMenu,
    username,
    getUserData,
    setCart,
    setWishlist,
    cart,
  } = useContext(AppContext);

  const Logout = async () => {
    try {
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      console.log(data.message);
      if (data.success) {
        toast.success(data.message);
        setIsUserLoggedIn(false);
        setMenu(false);
        setCart([]);
        setWishlist([]);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="navbar-flex-parent">
        <Link to="/" className="no-underline-link">
          <div className="brandName">Legend Stores</div>
        </Link>

        <div className="quick-links-div">
          <p className="quick-links-tag">Home</p>
          <p className="quick-links-tag">About</p>
          <p className="quick-links-tag">Contact</p>
          <p className="quick-links-tag">SignUp</p>
        </div>
        <div className="rest-of-navbar-div">
          <div className="search-container">
            <IoSearchOutline className="search-icon" />
            <input
              className="search-navbar"
              type="search"
              placeholder="what are you looking for?"
            />
          </div>
          <div className="wishlist-cart-profile">
            <Link to="/wishlist" className="no-underline-link">
              <div className="wishlist-icon-div">
                {wishlist?.length !== 0 && (
                  <p className="wishlist-number">{wishlist.length}</p>
                )}
                <CiHeart className="wishlist-icon" />
              </div>
            </Link>
            <Link to="/cart" className="no-underline-link">
              <div className="wishlist-icon-div">
                {cart?.length !== 0 && <p className="wishlist-number">{cart.length}</p>}
                <FaCartShopping className="shopping-icon" />
              </div>
            </Link>
            <div className="wishlist-icon-div">
              {isUserLoggedIn ? (
                <div className="user-icon" onClick={() => setMenu(!menu)}>
                  <h4 className="user-icon-name">
                    {(username?.firstName || "")[0]?.toUpperCase() ? (
                      // If we successfully get an uppercase initial, display it
                      (username?.firstName || "")[0]?.toUpperCase()
                    ) : (
                      // Otherwise (if username, firstName is missing, or firstName is an empty string), show the icon
                      <p className="user-icon-name">U</p>
                    )}
                  </h4>
                </div>
              ) : (
                <FaUser className="user-icon" onClick={() => setMenu(!menu)} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        {!isUserLoggedIn && menu && (
          <nav className="login-dropdown">
            <Link to="/signup" className="no-underline-link">
              <p
                className="login-text"
                onClick={() => {
                  setLogin(false);
                  setMenu(false);
                }}
              >
                Login
              </p>
            </Link>

            <Link to="/signup" className="no-underline-link">
              <p
                className="login-text"
                onClick={() => {
                  setLogin(true);
                  setMenu(false);
                }}
              >
                Signup
              </p>
            </Link>
          </nav>
        )}
        <div>
          {isUserLoggedIn && menu && (
            <nav className="login-dropdown">
              <div className="menu-text">
                <Link to="/user-profile" className="no-underline-link">
                  <p className="login-text">
                    <FaUser className="icons" />
                    My Account
                  </p>
                </Link>
              </div>

              <div className="menu-text">
                <Link to="/wishlist" className="no-underline-link">
                  <p className="login-text">
                    {" "}
                    <FaShop className="icons" />
                    My Order
                  </p>
                </Link>
              </div>

              <div className="menu-text">
                <Link to="/cart" className="no-underline-link">
                  <p className="login-text">
                    <FaCartShopping className="icons" />
                    My Cart
                  </p>
                </Link>
              </div>
              <div className="menu-text">
                <Link className="no-underline-link" onClick={Logout}>
                  <p className="login-text">
                    <LuLogOut className="icons" />
                    Logout
                  </p>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
