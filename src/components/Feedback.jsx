import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase"; // Adjust path based on your project structure
import "./Feedback.css";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      await addDoc(collection(db, "feedbacks"), {
        name,
        email,
        message,
        timestamp: new Date()
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <section className="feedback-section">
      <h2 className="feedback-title">We Value Your Feedback</h2>
      {submitted ? (
        <>
          <p className="success-msg">Thank you for your feedback! 😊</p>
          <button onClick={handleReset}>Submit Another Response</button>
        </>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Feedback" required></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Feedback;
