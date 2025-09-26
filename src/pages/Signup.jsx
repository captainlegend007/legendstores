import "./signup.css";
import SignUpImage from "../assets/Messi.jpg";
import LoginImage from "../assets/Login.jpg";
import { FaGoogle } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AppContext } from "../components/context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { uselogin, setLogin, handleTraditionalLogin, handleGoogleLogin } =
    useContext(AppContext);

  const signUp = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });

    try {
      const { data } = await axios.post(backendUrl + "/api/auth/register", {
        name,
        email,
        password,
      });
      if (data.success) {
        setLogin(false);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const useLogin = async (e) => {
    e.preventDefault();

    const result = await handleTraditionalLogin({
      email: loginEmail,
      password: loginPassword,
    });

    if (result.success) {
      navigate("/");
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      //   const result = await handleGoogleLogin(tokenResponse.access_token);
      //   if (result.success) {
      //     navigate("/");
      //   }
      // },
      // onError: (errorResponse) => console.log(errorResponse),

      const result = await handleGoogleLogin(tokenResponse.access_token);

      if (result.success) {
        navigate("/");
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div>
      <form>
        {uselogin ? (
          <div className="signup-grid">
            <div className="first-signup-grid-child">
              <img loading="lazy" src={LoginImage} className="signup-image" />
            </div>
            <div className="second-signup-grid-child">
              <h2 className="create-an-account">Create an account</h2>
              <p className="enter-your-details-below">Enter your details below</p>
              <input
                className="sign-up-name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="sign-up-name"
                placeholder="Email or Phone Number"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="sign-up-name"
                placeholder="Password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="buttons-parent">
                <button className="create-an-account-button" onClick={signUp}>
                  Create Account
                </button>
                <button
                  className="signup-with-google-button"
                  type="button"
                  onClick={() => login()}
                >
                  <FaGoogle className="google" /> Sign up with Google
                </button>
              </div>
              <div className="login-parent">
                <p className="already-have-an-acount">Already have an account?</p>
                <p className="login" onClick={() => setLogin(false)}>
                  Log in
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="signup-grid">
            <div className="first-signup-grid-child">
              <img loading="lazy" src={LoginImage} className="signup-image" />
            </div>
            <div className="second-signup-grid-child">
              <h2 className="create-an-account">Log in to Legend Stores</h2>
              <p className="enter-your-details-below">Enter your details below</p>

              <input
                className="sign-up-name"
                placeholder="Email or Phone Number"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                className="sign-up-name"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <div className="login-parent-b">
                <button className="login-button" onClick={useLogin}>
                  Login
                </button>
                <p className="forgot-password">Forgot Password?</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
