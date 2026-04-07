import React from 'react';
import './ContactPage.css';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="subpage-hero" style={{ backgroundImage: 'url(/hero2.png)' }}>
        <div className="container text-center">
          <span className="subtitle">GET IN TOUCH</span>
          <h1>CONTACT US</h1>
          <p className="lead">We are here to help you with any dental concerns or questions you may have.</p>
        </div>
      </section>

      <section className="contact-info-section py-5">
        <div className="container grid gap-5">
          <div className="contact-details-grid">
            <div className="contact-card">
              <MapPin size={32} className="text-secondary" />
              <h3>Our Location</h3>
              <p>123, Apex Towers, MG Road, Pune, Maharashtra 411001</p>
            </div>
            <div className="contact-card">
              <Phone size={32} className="text-secondary" />
              <h3>Phone Records</h3>
              <p>+91 98765 43210</p>
              <p>020 1234 5678</p>
            </div>
            <div className="contact-card">
              <Mail size={32} className="text-secondary" />
              <h3>Email Address</h3>
              <p>info@apexcare.com</p>
              <p>support@apexcare.com</p>
            </div>
            <div className="contact-card">
              <Clock size={32} className="text-secondary" />
              <h3>Working Hours</h3>
              <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p>Sun: Emergency only</p>
            </div>
          </div>
          
          <div className="contact-map">
            {/* Placeholder for Google Map */}
            <div className="map-placeholder">
              <h3>GOOGLE MAP LOCATION</h3>
              <p>Integrated Map View Here</p>
            </div>
          </div>
        </div>
      </section>

      <section className="whatsapp-cta py-5 bg-secondary text-white text-center">
        <div className="container">
          <MessageCircle size={48} className="text-primary mb-3" />
          <h2>Chat with us on WhatsApp</h2>
          <p>Get instant answers to your queries and book appointments on the go.</p>
          <a href="https://wa.me/919876543210" className="btn-whatsapp-large">START CHAT</a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
