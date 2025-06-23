import React from 'react';
import './styles.css';
import bottom from '../assets/bottom.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={bottom} alt="FIACON Logo" className="footer-logo" />
      <p>
        Fiacon Cleaning Services Group is a privately owned, Australian company,
        established in Sydney in 1993, as a reliable, commercial cleaning company...
      </p>
      <div className="contact">
        <p><strong>GET IN TOUCH</strong></p>
        <p>📞 1300 389 5...</p>
        <p>📍 Unit 10, 160 Hartley Rd, Smeaton Grange, NSW</p>
        <p>📧 info@fiaconcleaningservices.com.au</p>
      </div>
      <p><strong>Hours of Operation</strong></p>
      <p>24 Hours / 7 Days</p>
    </footer>
  );
};

export default Footer;
