import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Feedback from './Feedback'; // assuming you have this form component
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <img src="Contact.png" alt="Contact" className="contact-image" />

      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-left">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Address</h4>
              <p>Yogeshwar Dairy, Near Green Farms, Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>support@yogeshwardairy.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right: Feedback Form */}
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
