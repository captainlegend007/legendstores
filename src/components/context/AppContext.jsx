import { createContext, useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Techproducts } from "../products/TechProducts";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  console.count("AppContextProvider Render");

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [uselogin, setLogin] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [username, setUsername] = useState({
    firstName: " ",
    lastName: " ",
  });
  const [productItem, setProductItem] = useState({
    image: 1,
  });
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [localData, setLocalData] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const [loadingUserData, setLoadingUserData] = useState(true);
  const [userDataError, setUserDataError] = useState(null);

  const findProductsImage = (value) => {
    const product = Techproducts.find((product) => product.id === value);
    if (!product) {
      return "Product not found";
    }
    setProductItem({ image: product.id });
    console.log(product);
    navigate("/products-page");
  };

  const addToWishlist = async (value, quantity) => {
    const product = Techproducts.find((product) => product.id === value);
    if (!product) {
      toast.error("An error occured");
      return;
    }
    console.log(product.id);
    try {
      const { data } = await axios.post(backendUrl + "/api/user/add-to-wishlist", {
        item: product.id,
        quantity: quantity === 0 ? 1 : quantity,
      });
      if (!data.success) {
        toast.error(data.message);
        return;
      }
      toast.success(`${product.name} ${data.message}`);
      setWishlist(data.userData.wishlist || []);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeFromWishlist = async (value) => {
    try {
      const { data } = await axios.post(backendUrl + "/api/user/remove-from-wishlist", {
        item: value,
      });
      if (!data.success) {
        toast.error(data.success);
        return;
      }
      toast.success(data.message);
      console.log(data.userData.wishlist);
      setWishlist(data.userData.wishlist || []);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addToCart = async (value, quantity) => {
    const product = Techproducts.find((product) => product.id === value);
    if (!product) {
      toast.error("An error occured");
      return;
    }
    console.log(product.id);
    try {
      const { data } = await axios.post(backendUrl + "/api/user/add-to-cart", {
        item: product.id,
        quantity: quantity,
      });
      if (!data.success) {
        toast.error(data.message);
        return;
      }
      toast.success(`${product.name} ${data.message}`);
      setCart(data.userData.cart);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeFromCart = async (value) => {
    try {
      const { data } = await axios.post(backendUrl + "/api/user/remove-from-cart", {
        item: value,
      });
      if (!data.success) {
        toast.error(data.success);
        return;
      }
      toast.success(data.message);
      console.log(data.userData.cart);
      setCart(data.userData.cart);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserData = useCallback(async () => {
    setLoadingUserData(true);
    setUserDataError(null);
    try {
      const { data } = await axios.get(backendUrl + "/api/user/data");

      if (data.success) {
        setUsername({
          firstName: data.userData.name.split(" ")[0],
          lastName: data.userData.name.split(" ")[1],
        });
        setEmail(data.userData.email);
        setAddress(data.userData.address);
        setCart(data.userData.cart || []);
        setWishlist(data.userData.wishlist || []);
        setLocalData(data.userData);
      } else {
        // Log the backend's error message for debugging
        console.error("Failed to fetch user data:", data.message);
        setUserDataError(data.message || "Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserDataError(
        error.response?.data?.message ||
          "Failed to fetch user data. Please check your connection or try again."
      );
    } finally {
      setLoadingUserData(false);
    }
  }, [backendUrl]);

  const handleTraditionalLogin = useCallback(
    async (loginData) => {
      try {
        const { data } = await axios.post(backendUrl + "/api/auth/login", loginData);

        if (data.success) {
          localStorage.setItem("token", data.token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

          setIsUserLoggedIn(true);
          getUserData();
          toast.success(data.message);
          return { success: true };
        } else {
          toast.error(data.message);
          return { success: false, message: data.message };
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "An error occurred during login.";
        toast.error(errorMessage);
        return { success: false, message: errorMessage };
      }
    },
    [backendUrl, getUserData]
  );

  const handleGoogleLogin = useCallback(
    async (googleAuthToken) => {
      try {
        const { data } = await axios.post(backendUrl + "/api/auth/google-auth", {
          googleAuthToken,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setIsUserLoggedIn(true);
          axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

          getUserData();
          toast.success(data.message);
          return { success: true };
        } else {
          toast.error(data.message);
          return { success: false, message: data.message };
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "An error occurred during Google login.";
        toast.error(errorMessage);
        return { success: false, message: errorMessage };
      }
    },
    [backendUrl, getUserData]
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsUserLoggedIn(true);
      getUserData();
    } else {
      setIsUserLoggedIn(false);
    }
  }, [getUserData]);

  useEffect(() => {
    console.count("Navigation effect useEffect called");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  const value = useMemo(
    () => ({
      uselogin,
      setLogin,
      isUserLoggedIn,
      setIsUserLoggedIn,
      backendUrl,
      username,
      setEmail,
      email,
      address,
      setAddress,
      setUsername,
      getUserData,
      findProductsImage,
      setProductItem,
      productItem,
      cart,
      setCart,
      addToCart,
      removeFromCart,
      wishlist,
      setWishlist,
      addToWishlist,
      removeFromWishlist,
      loadingUserData,
      userDataError,
      localData,
      cartTotal,
      setCartTotal,
      handleTraditionalLogin,
      handleGoogleLogin,
    }),
    [
      uselogin,
      isUserLoggedIn,
      backendUrl,
      username,
      email,
      address,
      productItem,
      cart,
      wishlist,
      loadingUserData,
      userDataError,
      localData,
      cartTotal,
      getUserData,
      handleTraditionalLogin,
      handleGoogleLogin,
    ]
  );

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
