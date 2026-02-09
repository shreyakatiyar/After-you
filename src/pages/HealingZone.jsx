import React from "react";
import "./HealingZone.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Trips & Travels",
      description: "Book tickets for your favourite place where you want to go and relax .",
      image: "https://media.istockphoto.com/id/950694238/photo/flight-tickets-travel-vacation-boarding-journey.jpg?s=612x612&w=0&k=20&c=tLwWnWnuhIwgKPHCBJOo_tzOd60U3FHKDbf4CeTE9Lc=", // replace with your image path
    },
    {
      id: 2,
      title: "self obssession",
      description: "Get the best salon services for your hair, skin, and nails .",
      image: "https://media.istockphoto.com/id/692999494/photo/hairdresser-cutting-some-hair-tips.jpg?s=612x612&w=0&k=20&c=5bC0fdICk914P5JWYDOi6N3CirJV4IBMTxYJh32vi8o=",
    },
    {
      id: 3,
      title: "Therapy &  Counseling",
      description: "We offer a range of therapy services to provide relief to your soul.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJvm4RTeU0PMYlgZkdfEYv3MKuvlDDd_ppQ&s",
    },
    {
      id: 4,
      title: "your cravings",
      description: "We offer a wide range of healthy and delicious food options",
      image: "https://www.nhlbi.nih.gov/sites/default/files/styles/16x9_crop/public/2025-03/Ultraprocessed%20foods%20display%202%20framed%20-%20shutterstock_2137640529_r.jpg?h=ab94ba44&itok=yrOIN-8T",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-subtitle">we can provide you our services with 40% discount , bcz we love you DARLING..!!</div>
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-img-wrapper">
              <img src={service.image} alt={service.title} className="service-img" />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

