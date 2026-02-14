import React from "react";
import "./About.css";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}

      <section className="about-container" id="about">
        <div className="about-wrapper">
          
          {/* LEFT IMAGE */}
          <div className="about-image">
            <img
              src="https://i.pinimg.com/564x/0c/2a/c8/0c2ac8e6c977e2e51ed2037a7373a66b.jpg"
              alt="Woman illustration"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <h3>About Us</h3>

            <p>
              <strong>After-You</strong> is a safe digital space created
              exclusively for women — a place to pause, breathe, and be heard.
            </p>

            <p>
              We understand that healing is deeply personal. Whether you are
              seeking comfort, connection, or quiet reflection, After-You
              exists to support you without judgment.
            </p>

            <p>
              Our mission is to empower women to embrace their inner strength,
              express freely, and find solace in a community built on empathy,
              care, and understanding.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
