import React, { useEffect } from 'react';
import './Productsection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    name: "Milk",
    image: "/image1.png",
    variants: ["500ml", "1L", "2L"],
    price: "₹60 / L",
    brand: "Yogeshwar Dairy"
  },
  {
    name: "Paneer",
    image: "/image2.png",
    variants: ["200g", "500g"],
    price: "₹240 / kg",
    brand: "Yogeshwar Dairy"
  },
  {
    name: "Curd",
    image: "/image3.png",
    variants: ["400ml", "1L"],
    price: "₹45 / 400ml",
    brand: "Yogeshwar Dairy"
  },
  {
    name: "Butter",
    image: "/image4.png",
    variants: ["100g", "250g"],
    price: "₹95 / 100g",
    brand: "Yogeshwar Dairy"
  },
  {
    name: "Cheese",
    image: "/image5.png",
    variants: ["200g", "500g"],
    price: "₹290 / 500g",
    brand: "Yogeshwar Dairy"
  },
  {
    name: "Ghee",
    image: "/image6.png",
    variants: ["500ml", "1L"],
    price: "₹450 / L",
    brand: "Yogeshwar Dairy"
  }
];

function Productsection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="products-section">
      <h2 className="products-title">Our Products</h2>
      <p className="products-subtitle">Fresh. Pure. Delicious. Straight from farms to your table.</p>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card1" key={index} data-aos="fade-up">
            <div className="product-card">
                <div className="product-badge">Best Seller</div>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>

              <p className="product-info"><strong>Available Sizes:</strong> {product.variants.join(', ')}</p>
              <p className="product-info"><strong>Price:</strong> {product.price}</p>
              <p className="product-info"><strong>Brand:</strong> {product.brand}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productsection;
