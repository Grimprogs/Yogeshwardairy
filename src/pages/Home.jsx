import React from "react";
import Hero from "../components/Hero";
import About from "../pages/About";
import Productsection from "../components/Productsection"; 

function Home() {
  return (
    <>
      <div>
        <Hero />
        <About showTimeline={false} /> {/* Hide Timeline here */}
        {/* <Productsection /> */}
      </div>
    </>
  );
}

export default Home;