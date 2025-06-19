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
import WhatsappChat from "./components/WhatsappChat";
function App() {
 
  return (
     <AuthProvider>
    <Router>  
        <ScrollToTop />
      <div className="app-container">
        <Header />
        <div className="main-content">
         <Routes>
   <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="/contactpage" element={<Contact />} />
  
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  
  <Route
    path="/ContactPage"
    element={
      
        <Contact />
    
    }
  />
</Routes>
        </div>
        <Footer />
        <WhatsappChat />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
