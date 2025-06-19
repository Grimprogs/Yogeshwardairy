import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase.js"; // ✅ also import db
import { collection, query, where, getDocs } from "firebase/firestore"; // ✅ for username lookup
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [input, setInput] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let email = input;

      // Check if input is not email, treat as username
      if (!input.includes("@")) {
        const q = query(collection(db, "users"), where("username", "==", input));
        const snapshot = await getDocs(q);
        if (snapshot.empty) throw new Error("Username not found");
        email = snapshot.docs[0].data().email;
      }

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email or Username"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Log In</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
