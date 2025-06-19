import React, { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      toast.success("Message sent successfully! 🚀");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong! ❌");
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
        <button type="submit">Send Message</button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default ContactForm;
