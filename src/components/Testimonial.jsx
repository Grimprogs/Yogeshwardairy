import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Founder, GreenTech",
    message: "Absolutely amazing! The quality and dedication are unmatched.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Saanvi Sharma",
    title: "Marketing Head, EcoBuzz",
    message: "They understood our needs perfectly and delivered beyond expectations.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rahul Verma",
    title: "CEO, DairyPlus",
    message: "Their approach is fresh, modern, and highly effective.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

function Testimonial() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    const newIndex = (index + newDirection + testimonials.length) % testimonials.length;
    setIndex([newIndex, newDirection]);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const current = testimonials[index];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">What Our Clients Say</h2>

      {isMobile ? (
        <div className="carousel-wrapper">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              className="testimonial-card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <img src={current.image} alt={current.name} className="testimonial-img" />
              <p className="testimonial-msg">“{current.message}”</p>
              <h4 className="testimonial-name">{current.name}</h4>
              <span className="testimonial-title">{current.title}</span>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-buttons">
            <button onClick={() => paginate(-1)}>‹</button>
            <button onClick={() => paginate(1)}>›</button>
          </div>
        </div>
      ) : (
        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <div
              className={`testimonial-card ${
                index === 1 ? "center-card" : ""
              }`}
              key={index}
            >
              <img src={t.image} alt={t.name} className="testimonial-img" />
              <p className="testimonial-msg">“{t.message}”</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <span className="testimonial-title">{t.title}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Testimonial;
