// PremiumHero.jsx
import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const farmImages = [
     '/farm1.png',
    '/farm2.png',
    '/farm3.png'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % farmImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="premium-hero-wrapper">
      {/* Animated Background Elements */}
      <div className="floating-elements">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="premium-hero">
        <div class="hero-overlay"></div>
        <div className="hero-content">
          <div className={`hero-badge ${isVisible ? 'fade-in-up' : ''}`}>
            <div className="badge-icon">🏆</div>
            <span>Modern Dairy Processing Since 1952</span>
            <div className="badge-shine"></div>
          </div>

          <div className="hero-visual-mobile">
            <div className="mobile-image-container">
              <img
                src={farmImages[currentImageIndex]}
                alt="Farm scenes"
                className="mobile-hero-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>

          <h1 className={`hero-title ${isVisible ? 'fade-in-up delay-1' : ''}`}>
            <span className="hero-green">
              Quality
              <div className="word-highlight"></div>
            </span>
            <br />
            <span className="hero-green">Products</span>
            <br />
            From Our <span className="hero-yellow">Factory</span>
          </h1>

          <p className={`hero-description ${isVisible ? 'fade-in-up delay-2' : ''}`}>
              Bringing together tradition and technology, we craft fresh dairy products in our world-class factory. 
  Each item is hygienically processed, ensuring the purest taste for your family.
          </p>

          <div className={`hero-actions ${isVisible ? 'fade-in-up delay-3' : ''}`}>
            <button 
              className="hero-btn primary ripple-effect"
              onClick={() => handleNavigate('/products')}
            >
              <span>Explore Products</span>
              <div className="btn-shine"></div>
            </button>
            <button 
              className="hero-btn secondary glass-effect"
              onClick={() => handleNavigate('/contactPage')}
            >
              <span>Visit Factory</span>
              <div className="btn-icon">📍</div>
            </button>
          </div>

          <div className={`hero-stats ${isVisible ? 'fade-in-up delay-4' : ''}`}>
            <div className="stat-item">
              <div className="stat-number">317+</div>
              <div className="stat-label">Happy Families</div>
              <div className="stat-bar"></div>
            </div>
            <div className="stat-item">
              <div className="stat-number">44+</div>
              <div className="stat-label">Years Experience</div>
              <div className="stat-bar"></div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Organic Certified</div>
              <div className="stat-bar"></div>
            </div>
          </div>
        </div>

        <div 
          className="hero-visual"
          onMouseMove={handleMouseMove}
        >
          <div 
            className="image-container"
            style={{
              transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
            }}
          >
            <img
              src={farmImages[currentImageIndex]}
              alt="Farm illustration"
              className="hero-image"
            />
            <div className="image-overlay-gradient"></div>
            <div className="image-dots">
              {farmImages.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
          
          {/* 3D Effect Elements */}
          <div className="floating-icons">
            <div className="icon-item icon-1"></div>
            <div className="icon-item icon-2">🧀</div>
            <div className="icon-item icon-3">🐄</div>
            <div className="icon-item icon-4">🌾</div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
    
    </div>
  );
};

export default Hero;