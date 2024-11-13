import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';
const About = () => {

    const navigate = useNavigate();
    
    const goToSignup = () => navigate('/Sign');
    const goToHome = () => navigate('/Home');
    const goToLogin = () => navigate('/');
  return (
    <div>
        <ul className='header'>
                
                <li onClick={goToHome}>Home</li>
                <li onClick={goToLogin}>Login</li>
                <li onClick={goToSignup}>Register</li>
                <li>About Us</li>
            </ul>
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted partner for booking bus tickets conveniently and reliably.</p>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Since our founding in [Year], we’ve been making bus travel accessible and easy for everyone. 
          Our platform was built with one goal in mind: to simplify the process of booking bus tickets by providing real-time schedules, seat availability, and safe payment options.
        </p>
        <p>
          With a growing network of bus operators across the country, we offer routes to both popular destinations and remote locations. 
          Whether you’re traveling for work, leisure, or family, we make your journey smoother with just a few clicks.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Convenience:</strong> We aim to make bus ticket booking as effortless as possible.</li>
          <li><strong>Reliability:</strong> Accurate schedules and trusted operators are the foundation of our service.</li>
          <li><strong>Customer-Centric:</strong> Your comfort and satisfaction drive everything we do.</li>
          <li><strong>Safety:</strong> We ensure secure transactions and collaborate with operators committed to safety.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <p>
          Our team is passionate about improving the bus travel experience. With experts in travel technology and customer service, 
          we work hard to make sure your journey, from booking to boarding, is hassle-free.
        </p>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>Need help? Our customer support is available 24/7 to assist you with your bookings.</p>
        <p>Email: <a href="mailto:support@busbooking.com">support@busbooking.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
      </section>
    </div>
    </div>
  );
};

export default About;
