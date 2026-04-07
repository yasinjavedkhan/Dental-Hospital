import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: About */}
          <div className="footer-column about">
            <div className="footer-logo">
              <span className="logo-text">APEX <span className="text-primary">CARE</span></span>
              <span className="logo-sub">MULTI-SPECIALITY CLINIC</span>
            </div>
            <p className="footer-desc">
              With over 25 years of excellence, Apex Care is dedicated to providing 
              premium oral healthcare through advanced technology and expert surgical care.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Linkedin"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Specialities */}
          <div className="footer-column">
            <h3>SPECIALITIES</h3>
            <ul className="footer-links">
              <li><Link to="/services/implants"><ChevronRight size={14} /> Dental Implants</Link></li>
              <li><Link to="/services/orthodontics"><ChevronRight size={14} /> Orthodontics</Link></li>
              <li><Link to="/services/cosmetic"><ChevronRight size={14} /> Cosmetic Dentistry</Link></li>
              <li><Link to="/services/root-canal"><ChevronRight size={14} /> Root Canal Treatment</Link></li>
              <li><Link to="/services/pediatric"><ChevronRight size={14} /> Pediatric Dentistry</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-column">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links">
              <li><Link to="/"><ChevronRight size={14} /> Home</Link></li>
              <li><Link to="/about"><ChevronRight size={14} /> About Us</Link></li>
              <li><Link to="/gallery"><ChevronRight size={14} /> Gallery</Link></li>
              <li><Link to="/contact"><ChevronRight size={14} /> Contact Us</Link></li>
              <li><Link to="/appointment"><ChevronRight size={14} /> Appointment</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column contact">
            <h3>CONTACT US</h3>
            <ul className="footer-contact-info">
              <li>
                <MapPin size={18} className="text-primary" />
                <span>123, Apex Towers, MG Road, Pune, 411001</span>
              </li>
              <li>
                <Phone size={18} className="text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={18} className="text-primary" />
                <span>info@apexcare.com</span>
              </li>
            </ul>
            <div className="whatsapp-floating">
              <a href="https://wa.me/919876543210" className="btn-whatsapp flex-center">
                <MessageCircle size={20} /> <span>CHAT WITH US</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Apex Care Multi-Speciality Clinic. All Rights Reserved.</p>
          <p className="credits">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
