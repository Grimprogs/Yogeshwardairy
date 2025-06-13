import React, { useState, useEffect } from 'react';

import { useInView } from "framer-motion";
import { useRef } from "react";
import './About.css';
import { motion, AnimatePresence } from "framer-motion";
const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
function About({ showTimeline = true }) {

  const highlights = [
    {
      img: "/why1.png",
      title: "Uncompromised Quality",
      subtitle: "We use the finest ingredients and strictest standards to ensure top-tier products.",
    },
    {
      img: "/eco-icon.png",
      title: "Eco-Conscious",
      subtitle: "Our practices prioritize environmental responsibility and long-term impact.",
    },
    {
      img: "/innovation-icon.png",
      title: "Cutting-Edge Approach",
      subtitle: "We consistently innovate to offer modern solutions that work.",
    },
  ];
  const timelineData = {
  2018: {
    img: "/time1.png",
    desc: "In 2018, we began modernizing our dairy practices with a focus on innovation.",
  },
  2019: {
    img: "/time2.png",
    desc: "In 2019, our organic product line was launched and received national attention.",
  },
  2020: {
    img: "time3.png",
    desc: "Despite the pandemic, we ensured uninterrupted delivery of essentials.",
  },
  2021: {
    img: "time4.png",
    desc: "Introduced eco-conscious packaging and sustainable sourcing methods.",
  },
  2022: {
    img: "time5.png",
    desc: "Opened our 5th processing unit with next-gen equipment.",
  },
  2023: {
    img: "time6.png",
    desc: "Celebrated 70+ years with a grand farmers’ appreciation week.",
  },
  2024: {
    img: "time7.png",
    desc: "Partnered with local farms to strengthen community-based models.",
  },
  2025: {
    img: "time8.png",
    desc: "Future-ready: moving towards automation and AI in processing.",
  },
};

const [selectedYear, setSelectedYear] = useState("2018");


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = highlights[index];

  return (
     <>
     <FadeInSection>
     <section className="about-hero fade-in">
  <div className="about-text ">
    <h2>About Us</h2>
    <p>We deliver quality dairy products with care and innovation.</p>
  </div>
  <img src="About.png" alt="About Us" className="about-bg" />
  
</section>
</FadeInSection>

      {/* ABOUT SECTION */}
      <FadeInSection>
      <section className="about-section fade-in">
        <div className="about-grid">
          <div className="about-image-large">
            <div className="years-badge">70+ Years</div>
            <div className="image-wrapper">
              <img src="/about2.png" alt="Dairy Family" />
            </div>
          </div>

          <div className="about-image-stack">
            <div className="image-wrapper">
              <img src="/about1.png" alt="Milk Processing" />
            </div>
            <div className="image-wrapper">
              <img src="/about3.png" alt="Farm Fresh" />
            </div>
          </div>

          <div className="about-text-block">
            <h2>Three Generations of Dairy Excellence</h2>
            <p>
              From humble beginnings to a trusted name in every household, we have poured generations of dedication into every drop. 
              Our story is built on family values, sustainable practices, and an unwavering commitment to purity.
            </p>

            <div className="about-features">
              <div className="feature-box">
                <img src="/service.png" alt="Service Icon" className="feature-icon" />
                <div className="feature-text">
                  <h4>Dedicated Services</h4>
                  <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                </div>
              </div>

              <div className="feature-box">
                <img src="/organic.png" alt="Organic Icon" className="feature-icon" />
                <div className="feature-text">
                  <h4>Organic Products</h4>
                  <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>
      <FadeInSection>
    <section className="why-us-section fade-in">
      <div className="why-badge">Trusted by Families Since 1986</div>

      <div className="why-us-content">
        {/* Left Text (Static) */}
        <div className="why-text">
          <h2>Why Choose Us</h2>
          <p className="subtitle">We blend quality, sustainability, and innovation to deliver unmatched value.</p>

          <div className="why-us-features">
            <div className="why-feature">
              <img src="/uncrompomised.png" alt="Quality" className="feature-icon" />
              <div>
                <h4>Uncompromised Quality</h4>
                <p>Top-tier standards in every product.</p>
              </div>
            </div>
            <div className="why-feature">
              <img src="/Eco-Conscious.png" alt="Eco" className="feature-icon" />
              <div>
                <h4>Eco-Conscious</h4>
                <p>Sustainable choices at every step.</p>
              </div>
            </div>
            <div className="why-feature">
              <img src="/Cutting-Edge.png" alt="Innovation" className="feature-icon" />
              <div>
                <h4>Cutting-Edge</h4>
                <p>Technology meets tradition.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Animated image + dynamic title & subtitle */}
        <div className="why-image-box ">
          <img
            key={current.img}
            src={current.img}
            alt={current.title}
            className="why-img fade-img"
          />
          <div className="image-caption fade-caption">
            <h4>{current.title}</h4>
            <p>{current.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
</FadeInSection>
{showTimeline && (
      <section className="timeline-section fade-in">
  <h2 className="timeline-heading">Timeline</h2>

  <div className="timeline-container">
    <div className="timeline-line">
      {Object.keys(timelineData).map((year) => (
        <div
  key={year}
  className={`timeline-item ${selectedYear === year ? "active" : ""}`}
  onClick={() => setSelectedYear(year)}
>
  <div className="timeline-dot"></div>
  <span className="timeline-year">{year}</span>
</div>
      ))}
    </div>
  </div>

<div id="timeline-content" className="timeline-content">
  <AnimatePresence mode="wait">
    {selectedYear && (
      <motion.div
        key={selectedYear}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="year-detail"
      >
        <img
          src={timelineData[selectedYear].img}
          alt={`Year ${selectedYear}`}
          className="year-image"
        />
        <p className="year-description">{timelineData[selectedYear].desc}</p>
      </motion.div>
    )}
  </AnimatePresence>
</div>


</section>
)}
      </>
  );
}

export default About;
