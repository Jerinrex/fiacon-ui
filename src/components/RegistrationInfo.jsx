import React from 'react';
import mobileImg from '../assets/mobile.png';
import personalImg from '../assets/personal.png';
import faceImg from '../assets/face.png';
import safetyImg from '../assets/safety.png';
import './styles.css';

const steps = [
  {
    img: mobileImg,
    title: 'Phone Number',
    desc: [
      'Enter your Australian mobile number, which must be 9 digits long and start with ‘0’; only valid Australian formats are accepted.',
      'The system will automatically validate the number, and if it is already registered or not approved by Fiacon, an error message will be displayed.'
    ],
  },
  {
    img: personalImg,
    title: 'Personal Details',
    desc: [
      'Fill in your First Name, Last Name, and select your Gender from the dropdown; all fields are mandatory, and only alphabetic characters are allowed in name fields.'
    ],
  },
  {
    img: faceImg,
    title: 'Facial Recognition',
    desc: [
      'Use your device’s front-facing camera to capture a clear image of your face, which will be securely registered for future biometric sign-in and sign-out.',
      'If the captured image is unclear, too dark, or obstructed, the system will prompt you to retry.'
    ],
  },
  {
    img: safetyImg,
    title: 'Safety Questions',
    desc: [
      'Answer the five required questions related to cleaning safety, compliance, and readiness; you must complete all answers to proceed.',
      'These responses help validate your eligibility and preparedness for work responsibilities.'
    ],
  },
];

const RegistrationInfo = () => {
  return (
    <div className="registration-info">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-section ${index % 2 !== 0 ? 'reverse' : ''}`}
        >
          <img src={step.img} alt={step.title} className="step-img" />
          <div className="step-text">
            <h3>{step.title}</h3>
            {step.desc.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegistrationInfo;
