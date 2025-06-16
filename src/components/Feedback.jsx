import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/ajax/YOUR_EMAIL@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section className="feedback-section">
      <h2 className="feedback-title">We Value Your Feedback</h2>
      {submitted ? (
        <p className="success-msg">Thank you for your feedback! 😊</p>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Feedback!" />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Feedback" required></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default Feedback;
