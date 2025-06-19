// src/components/WhatsappChat.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappChat.css";

const WhatsappChat = () => {
  return (
    <a
     href="https://wa.me/918591102194?text=Hello%20Yogeshwar%20Dairy%2C%20I%20am%20interested%20in%20your%20fresh%20and%20pure%20dairy%20products.%20Kindly%20share%20the%20details%20for%20placing%20an%20order.%20Thank%20you."

      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp className="whatsapp-icon" />
      Chat Now
    </a>
  );
};

export default WhatsappChat;
