import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import BillingDetails from "./pages/BillingDetails";
import UserProfile from "./pages/UserProfile";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./pages/Wishlist";
import { AppContext } from "./components/context/AppContext";
const App = () => {
  const GlobalLoadingScreen = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "24px",
        color: "#333",
        backgroundColor: "#f0f2f5",
      }}
    >
      <p>Loading application data...</p>
      {/* You could add a simple spinner here */}
      <div
        style={{
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #3498db",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      {/* Keyframe for spin animation (add to your CSS or a style block) */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  const GlobalErrorScreen = ({ error }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "20px",
        color: "red",
        backgroundColor: "#fff0f0",
        border: "1px solid #f00",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h2>Oops! Something went wrong.</h2>
      <p>Error: {error}</p>
      <p>Please try refreshing the page or logging in again.</p>
    </div>
  );

  const ProtectedRoute = ({ children }) => {
    const { isUserLoggedIn, loadingUserData, userDataError } =
      React.useContext(AppContext);
    if (!isUserLoggedIn) {
      return <Navigate to="/signup" replace />;
    }
    if (loadingUserData) {
      return <GlobalLoadingScreen />;
    }

    if (userDataError) {
      return <GlobalErrorScreen error={userDataError} />;
    }

    if (!isUserLoggedIn) {
      return <Navigate to="/signup" replace />;
    }

    return children;
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legendstores" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products-page" element={<ProductsPage />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/billing-details" element={<BillingDetails />} />

        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <div style={{ padding: "50px", textAlign: "center" }}>
              <h2>404 - Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
              <a href="/">Go to Home</a>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
