import React, { useState } from "react";
import "./Contact.css";
import { FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">💌 Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you — whether you want to share, heal, or just talk 🌷
      </p>

      <div className="contact-content">
        {/* Left Section: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message 💖</button>
          {submitted && <p className="success-msg">Thank you for reaching out 💌</p>}
        </form>

        {/* Right Section: Socials */}
        <div className="contact-info">
          <h2>Connect with Us 🌸</h2>
          <p>Let’s stay connected — follow us for daily love and healing!</p>

          <div className="social-links">
            <a
              href="https://instagram.com/yrrrr_shreya"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaTwitter /> Twitter
            </a>
            <a href="mailto:afteryou@example.com" className="social-icon">
              <FaEnvelope /> Email
            </a>
            <a href="tel:+911234567890" className="social-icon">
              <FaPhoneAlt /> Call / WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
