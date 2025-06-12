import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-grid">
        {/* Leftmost large image */}
   <div className="about-image-large">
  <div className="years-badge">70+ Years</div>
  <div className="image-wrapper">
    <img src="/about2.png" alt="Dairy Family" />
  </div>
</div>


        {/* Two stacked images */}
      <div className="about-image-stack">
  <div className="image-wrapper">
    <img src="/about1.png" alt="Milk Processing" />
  </div>
  <div className="image-wrapper">
    <img src="/about3.png" alt="Farm Fresh" />
  </div>
</div>

        {/* Text Content */}
        <div className="about-text-block">
          <h2>Three Generations of Dairy Excellence</h2>
          <p>
            From humble beginnings to a trusted name in every household, we have poured generations of dedication into every drop. 
            Our story is built on family values, sustainable practices, and an unwavering commitment to purity.
          </p>
          <p>
            Whether it's fresh milk, rich paneer, or homemade ghee, our legacy ensures you always get the best.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
