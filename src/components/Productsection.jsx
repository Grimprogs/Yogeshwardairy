import React, { useEffect, useState } from 'react';
import './Productsection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  { name: "Milk", image: "/image1.png" },
  { name: "Paneer", image: "/image2.png" },
  { name: "Curd", image: "/image3.png" },
  { name: "Butter", image: "/image4.png" },
  { name: "Cheese", image: "/image5.png" },
  { name: "Ghee", image: "/image6.png" }
];

function Productsection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [quantities, setQuantities] = useState(Array(products.length).fill(1));

  const handleQuantityChange = (index, delta) => {
    setQuantities(prev => {
      const updated = [...prev];
      updated[index] = Math.max(1, updated[index] + delta);
      return updated;
    });
  };

  return (
    <section className="products-section">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card1" key={index} data-aos="fade-up">
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>

              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                <span>{quantities[index]}</span>
                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
              </div>

              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productsection;
