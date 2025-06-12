import React from "react";
import "./Hero.css";
import { useNavigate } from 'react-router-dom';

function Hero() {
   
     const navigate = useNavigate();

     const handleClick = () => {
    navigate('/products');
     };
    
  return (
    
    <section className="hero">
      
      <div className="hero-content">
        <div className="hero-badge">Family Owned Store Since 1952</div>
        <div className="hero-visual-mobile">
          <img
            src="/hero-farm.png"
            alt="Farm illustration"
            style={{
              width: "100%",
              height: "140px",
              objectFit: "cover",
              borderRadius: "18px"
            }}
          />
        </div>
        <h1>
          <span className="hero-green">Fresh<br/>Dairy</span>
          <br />
          From Our <span className="hero-yellow">Farm</span>
        </h1>
        <p>
          Experience the pure taste of nature with our premium dairy products. From our pasture to your table, we ensure the highest quality and freshness.
        </p>
        <div className="hero-actions">
          
          <button className="hero-btn primary" onClick={handleClick}>Shop Products</button>
          
         
        
          <button className="hero-btn secondary">Take Farm Tour</button>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-number">317+</div>
            <div className="stat-label">Happy Families</div>
          </div>
          <div>
            <div className="stat-number">44+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div>
            <div className="stat-number">63%</div>
            <div className="stat-label">Organic Certified</div>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src="/hero-farm.png"
          alt="Farm illustration"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "24px"
          }}
        />
      </div>
    </section>
  );

}


export default Hero;