import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { FiPower } from "react-icons/fi";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: "#ff4d4d",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        color: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        transition: "transform 0.2s ease-in-out", // ⬅️ Smooth transition
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      title="Logout"
    >
      <FiPower size={20} />
    </button>
  );
}

export default LogoutButton;
