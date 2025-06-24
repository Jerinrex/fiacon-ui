import React from 'react';
import './styles.css';
import bottom from '../assets/bottom.png';
import payments from '../assets/payments.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={bottom} alt="FIACON Logo" className="footer-logo" />
      <p>
       Fiacon Cleaning Services Group is a privately owned, Australian company, established in Sydney in 1993, as a reliable, commercial cleaning company. Fiacon now provides an extensive range of cleaning and property services for approximately 120 commercial businesses with 270 sites nationally large, and small, providing a cost-efficient, high-quality, and consistently reliable product.
      </p>

      <div className="contact">
        <p><strong>GET IN TOUCH</strong></p>
        <p>📞 1300 389 5...</p>
        <p>📍 Unit 10, 160 Hartley Rd, Smeaton Grange, NSW</p>
        <p>📧 info@fiaconcleaningservices.com.au</p>
      </div>

      <div className="hours">
        <p><strong>Hours of Operations</strong></p>
        <p>🕒 24 Hours a day</p>
        <p>📅 7 Day's a week</p>
      </div>

      <div className="services">
        <p><strong>CLEANING SERVICES</strong></p>
        <ul>
          <li>Commercial Cleaning Sydney</li>
          <li>Office Cleaning Sydney</li>
          <li>Warehouse Cleaning Sydney</li>
          <li>Factory Cleaning Sydney</li>
          <li>Medical Cleaning Sydney</li>
          <li>School Cleaning Sydney</li>
          <li>Gym Cleaning Sydney</li>
          <li>Childcare Cleaning Sydney</li>
        </ul>
      </div>

      <div className="site-links">
        <p><strong>SITE LINKS</strong></p>
        <ul>
          <li>About Us</li>
          <li>Our Charity</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Sitemap</li>
        </ul>
      </div>

      <div className="quote-social">
        <button className="quote-btn">GET ONSITE QUOTE NOW</button>
        <p>... Or Call 1300 389 5...</p>
        <div className="social-icons">
  <a href="#" aria-label="Facebook"><FaFacebookF /></a>
   <a href="#" aria-label="Instagram"><FaInstagram /></a>
  <a href="#" aria-label="Twitter"><FaTwitter /></a>
 
</div>
      </div>

      <div className="payment">
  <img src={payments} alt="Payment Options" className="payment-image" />
        
      </div>
<p className="reactive-line">
  Fiacon Property Services Proprietary Services trading as Fiacon Cleaning Services Sydney.
  Partnered with <span className="reactive-logo">REACTIVE<span className="reactive-box">IT</span></span>
</p>


    </footer>
  );
};

export default Footer;
