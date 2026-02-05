import React from 'react'
import './About.css';
import navbar from '../components/Navbar';
const About = () => {
  return (
    <>
    <navbar/>
    <div className="about-container">
      <div id="box-left" >
    <img src="https://i.pinimg.com/564x/0c/2a/c8/0c2ac8e6c977e2e51ed2037a7373a66b.jpg" alt="girl-img" />

      </div>
<div id="box-right">
    <h3>About Us</h3>
    <p>Welcome to PropertyVerify, your trusted partner in property verification and due diligence. We are dedicated to providing comprehensive and reliable services to ensure that your property transactions are secure and transparent.</p>
    <p>At PropertyVerify, we understand the importance of making informed decisions when it comes to real estate. Our team of experts utilizes advanced technology and thorough research methods to verify property details, ownership history, legal status, and more.</p>
    <p>Our mission is to empower buyers, sellers, and investors with accurate information, helping them navigate the complexities of the real estate market with confidence. Whether you're purchasing a new home, investing in commercial property, or selling your assets, PropertyVerify is here to support you every step of the way.</p>
    {/* <p>Thank you for choosing PropertyVerify. We look forward to assisting you in your property journey.</p> */}
</div>

      
         
    </div>
    </>
  )
}

export default About
