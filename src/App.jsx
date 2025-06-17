import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/ContactPage";
import Signup from "./pages/Signup";  // ⬅️ import Signup
import Login from "./pages/Login";
import { AuthProvider } from "./AuthContext";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
     <AuthProvider>
    <Router>  
        <ScrollToTop />
      <div className="app-container">
        <Header />
        <div className="main-content">
         <Routes>
  <Route path="/" element={<Navigate to="/signup" replace />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

  {/* Protected Routes */}
  <Route
    path="/home"
    element={
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    }
  />
  <Route
    path="/about"
    element={
      <PrivateRoute>
        <About />
      </PrivateRoute>
    }
  />
  <Route
    path="/products"
    element={
      <PrivateRoute>
        <Products />
      </PrivateRoute>
    }
  />
  <Route
    path="/ContactPage"
    element={
      <PrivateRoute>
        <Contact />
      </PrivateRoute>
    }
  />
</Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
