import React from "react";
import Hero from "../components/Hero";
import About from "../pages/About";
import './Home.css';
import Testimonial from '../components/Testimonial'; import Productsection from "../components/Productsection"; 
import Feedback from "../components/Feedback";
import Contact from "../components/Contact"; 

function Home() {
  return (
    <>
      <div>
        <Hero />
        <About showTimeline={false} /> {/* Hide Timeline here */}
        {/* <Productsection /> */}
      </div>
<section className="partner-section">
  <h2>Trusted by Dairy Industry Leaders</h2>
  <p className="partner-subtitle">Our partners power excellence in dairy innovation</p>

  <div className="partner-grid">
    <img src="/amul.png" alt="Amul" />
    <img src="/nandini.png" alt="Nandini" />
    <img src="/mother-dairy.png" alt="Mother Dairy" />
    <img src="/hatsun.png" alt="Hatsun Agro" />
    <img src="/vijaya.png" alt="Vijaya Dairy" />
    <img src="/aavin.png" alt="Aavin" />
    <img src="/milma.png" alt="Milma" />
    <img src="/kwality.png" alt="Kwality Dairy" />
    <img src="/paraag.png" alt="Parag Milk Foods" />
   
  </div>
</section>
      <Testimonial />
        <Feedback />


    </>
  );
}

export default Home;