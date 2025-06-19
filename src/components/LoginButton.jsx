import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase.js";

function LoginButton({ className, onClickExtra }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (currentUser) {
      await signOut(auth);
      navigate("/signup");
    } else {
      navigate("/signup");
    }

    // 🔥 Close hamburger menu if callback provided
    if (onClickExtra) onClickExtra();
  };

  return (
    <button className={className} onClick={handleClick}>
      {currentUser ? "Logout" : "Login"}
    </button>
  );
}
export default LoginButton;
