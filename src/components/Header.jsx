import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import { 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown,
  Smile,
  Activity,
  PlusCircle,
  HeartPulse,
  Stethoscope
} from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 24,
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Banner with Certifications and Contact */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0, margin: 0 }}
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation Bar */}
      <nav className="navbar">
        <div className="container flex-between-center">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <span className="logo-text">APEX <span className="text-primary">CARE</span></span>
              {!isScrolled && <span className="logo-sub">MULTI-SPECIALITY CLINIC</span>}
            </Link>
          </div>
          
          <ul className="nav-links flex-center hide-tablet">
            <li><NavLink to="/" end>HOME</NavLink></li>
            <li><NavLink to="/about">ABOUT US</NavLink></li>
            
            <li 
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="dropdown-trigger flex-center gap-1">
                <NavLink to="/services">SPECIALITIES</NavLink>
                <ChevronDown size={14} className={`chevron ${isDropdownOpen ? 'rotate' : ''}`} />
              </div>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul 
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="dropdown-menu glass"
                  >
                    <motion.li variants={itemVariants}>
                      <Link to="/services" className="flex-center gap-3">
                        <div className="icon-circle"><Activity size={18} /></div>
                        <span>All Services</span>
                      </Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link to="/services/implants" className="flex-center gap-3">
                        <div className="icon-circle"><PlusCircle size={18} /></div>
                        <span>Dental Implants</span>
                      </Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link to="/services/orthodontics" className="flex-center gap-3">
                        <div className="icon-circle"><Stethoscope size={18} /></div>
                        <span>Orthodontics</span>
                      </Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link to="/services/cosmetic" className="flex-center gap-3">
                        <div className="icon-circle"><Smile size={18} /></div>
                        <span>Cosmetic Dentistry</span>
                      </Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link to="/services/root-canal" className="flex-center gap-3">
                        <div className="icon-circle"><HeartPulse size={18} /></div>
                        <span>Root Canal</span>
                      </Link>
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
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
          <>
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-drawer glass-dark"
            >
              <div className="drawer-header flex-between-center">
                <span className="logo-text">APEX <span className="text-primary">CARE</span></span>
                <button onClick={toggleMenu} className="close-btn"><X size={32} /></button>
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
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="drawer-overlay"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
