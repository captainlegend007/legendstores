// In src/pages/OneTapLogin.jsx

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/context/AppContext";
import { useNavigate } from "react-router-dom";

const OneTapLogin = () => {
  const CLIENT_ID =
    "529462254836-9pbm7u59sq7f2hippa57jnv1sk4rdi42.apps.googleusercontent.com";
  const navigate = useNavigate();
  const { handleGoogleLogin } = useContext(AppContext);

  const [promptDisabled, setPromptDisabled] = useState(false);

  // Define the credential handler function outside of the effect
  const handleCredentialResponse = async (response) => {
    // 🟢 CRITICAL: Correctly extract the token and set the flag
    const isOneTap = true;
    const tokenString = response.credential;

    // Call the updated handler
    const result = await handleGoogleLogin(tokenString, isOneTap);
    if (result.success) {
      console.log("One-tap login successful!");
      navigate("/");
    }
  };

  useEffect(() => {
    if (window.google && !promptDisabled) {
      // 1. Initialize the Google Identity Services
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: true,
        // 🟢 FIX: Opt-in to FedCM to prevent the Deprecation Warning
        use_fedcm_for_prompt: true,
      });

      // 2. Prompt the user
      window.google.accounts.id.prompt((notification) => {
        // If the user dismisses the prompt, stop showing it for this session
        if (notification.isDismissedMoment() || notification.isNotDisplayed()) {
          setPromptDisabled(true);
        }
      });
    }

    // 3. Cleanup: Cancel the prompt when the component unmounts
    return () => {
      if (window.google) {
        window.google.accounts.id.cancel();
      }
    };
  }, [navigate, handleGoogleLogin, promptDisabled]);

  return null;
};

export default OneTapLogin;
