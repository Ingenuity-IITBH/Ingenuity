import React from 'react';
import Card from '../components/Card';

const Trapezium = () => (
  <svg
    xmlns="http://w3.org/2000/svg"
    viewBox="0 0 16 6"
    preserveAspectRatio="none"
    width="100%"
    height="100%"
  >
    <polygon points="0,0 16,0 16,2.6 0,5" fill="#003EBA" />
    <polygon points="0,0 16,0 16,2.5 0,4.5" fill="#588FFF" />
  </svg>
);

const styles = {
  container: {
    width: '100vw',
    height: '80vh',
    overflow: 'hidden',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: '37.5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    marginBottom: '10px',
    fontSize: '40px', 
  },
  subtitle: {
    color: 'white', 
    fontSize: '20px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  footer: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
  socialIcon: {
    margin: '0 10px',
    width: '30px',
  },
};

const ContactUs = () => (
  <div style={styles.container}>
    <Trapezium />
    <div style={styles.content}>
      <h1 style={styles.title}>Contact Us</h1>
      <h2 style={styles.subtitle}>
        Get in touch and let us know how we can help each other
      </h2>
      <div style={styles.cardContainer}>
        <Card
          title="Mobile No"
          content="We'd love to talk about any queries and collaborations"
          value="+91 1234567890"
        />
        <Card
          title="Email"
          content="You can email us for inquiries and collaborations"
          value="your@email.com"
        />
        <Card
          title="Address"
          content="Visit us at our office location"
          value="iitbhilai, india"
        />
      </div>
    </div>
    <div style={styles.footer}>
      <p>STAY CONNECTED</p>
      <a href="https://www.linkedin.com/company/ingenuity-iit-bhilai/">
        <img src="./images/linkedin-logo.png" alt="LinkedIn" style={styles.socialIcon} />
      </a>
      <a href="https://www.instagram.com/ingenuity_iit_bh/">
        <img src="./images/insta-logo.png" alt="Instagram" style={styles.socialIcon} />
      </a>
    </div>
  </div>
);

export default ContactUs;