import React, { useState } from 'react';
import './styles.css';

const AppIntro = () => {
  const [email, setEmail] = useState('');
  
  return (
    <section className="intro">

      <h2>Our App</h2>
      <p className="description">
        Welcome to Pioneering CMS, your digital assistant for streamlined cleaning management.
        To get started, we’ve made the onboarding process smooth, secure, and compliant. Each step ensures accurate user verification, safety, and readiness for field operations.
      </p>
    </section>
  );
};

export default AppIntro;
