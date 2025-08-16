import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Techproducts } from "../products/TechProducts";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  console.count("AppContextProvider Render");
  const [menu, setMenu] = useState(false);
  //Gets the current page
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [login, setLogin] = useState(false);
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
    navigate("/products-page");
    setProductItem({ image: product.id });
    console.log(product);
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
        toast.error(data.message);
        setUserDataError(
          error.response?.data?.message ||
            "Failed to fetch user data. Please check your connection or try again."
        );
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadingUserData(false);
    }
  }, [backendUrl, setUsername, setEmail, setAddress, setCart, setWishlist, toast.error]);

  useEffect(() => {
    console.count("Initial setup useEffect called");
    axios.defaults.withCredentials = true;

    const getAuthStatus = async () => {
      try {
        const { data } = await axios.get(backendUrl + "/api/auth/is-auth");
        if (data.success) {
          getUserData();
          setIsUserLoggedIn(true);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    getAuthStatus();
  }, [backendUrl, getUserData, setIsUserLoggedIn, toast.error]);

  useEffect(() => {
    console.count("Navigation effect useEffect called");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setMenu(false);
  }, [pathname]);

  const value = {
    login,
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
    menu,
    setMenu,
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
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
