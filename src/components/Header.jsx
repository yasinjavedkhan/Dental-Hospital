import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import { Phone, Mail, Clock, ShieldCheck, Award, Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="main-header">
      {/* Top Banner with Certifications and Contact */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="top-banner"
      >
        <div className="container flex-between-center">
          <div className="certifications flex-center gap-3">
            <div className="cert-item flex-center">
              <ShieldCheck size={18} className="text-accent" />
              <span>NABH Accredited</span>
            </div>
            <div className="cert-item flex-center border-left">
              <Award size={18} className="text-accent" />
              <span>ISO 9001:2015</span>
            </div>
          </div>
          <div className="contact-info flex-center gap-4">
            <a href="tel:+919876543210" className="flex-center">
              <Phone size={16} className="text-accent" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@apexcare.com" className="flex-center hide-mobile">
              <Mail size={16} className="text-accent" />
              <span>info@apexcare.com</span>
            </a>
            <div className="flex-center hide-mobile">
              <Clock size={16} className="text-accent" />
              <span>Mon-Sat: 9AM - 8PM</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation Bar */}
      <nav className="navbar sticky">
        <div className="container flex-between-center">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="logo"
          >
            <Link to="/" onClick={closeMenu}>
              <span className="logo-text">APEX <span className="text-primary">CARE</span></span>
              <span className="logo-sub">MULTI-SPECIALITY CLINIC</span>
            </Link>
          </motion.div>
          
          <ul className="nav-links flex-center hide-tablet">
            <li><NavLink to="/" end>HOME</NavLink></li>
            <li><NavLink to="/about">ABOUT US</NavLink></li>
            <li className="dropdown">
              <NavLink to="/services">SPECIALITIES</NavLink>
              <ul className="dropdown-menu">
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/services/implants">Dental Implants</Link></li>
                <li><Link to="/services/orthodontics">Orthodontics</Link></li>
                <li><Link to="/services/cosmetic">Cosmetic Dentistry</Link></li>
                <li><Link to="/services/root-canal">Root Canal</Link></li>
              </ul>
            </li>
            <li><NavLink to="/gallery">GALLERY</NavLink></li>
            <li><NavLink to="/contact">CONTACT US</NavLink></li>
          </ul>

          <div className="nav-actions flex-center gap-3">
            <Link to="/appointment" className="btn-appointment hide-mobile">APPOINTMENT</Link>
            <button className="mobile-menu-toggle hide-desktop" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-drawer glass"
          >
            <div className="drawer-header flex-between-center">
              <span className="logo-text">APEX <span className="text-primary">CARE</span></span>
              <button onClick={toggleMenu}><X size={28} /></button>
            </div>
            <ul className="mobile-nav-links">
              <li><NavLink to="/" end onClick={closeMenu}>HOME <ChevronRight size={16} /></NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}>ABOUT US <ChevronRight size={16} /></NavLink></li>
              <li><NavLink to="/services" onClick={closeMenu}>SPECIALITIES <ChevronRight size={16} /></NavLink></li>
              <li><NavLink to="/gallery" onClick={closeMenu}>GALLERY <ChevronRight size={16} /></NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}>CONTACT US <ChevronRight size={16} /></NavLink></li>
            </ul>
            <div className="drawer-footer">
              <Link to="/appointment" className="btn-appointment block text-center" onClick={closeMenu}>BOOK APPOINTMENT</Link>
              <div className="drawer-contact mt-5">
                <p><Phone size={14} /> +91 98765 43210</p>
                <p><Mail size={14} /> info@apexcare.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="drawer-overlay"
          ></motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
