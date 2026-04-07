import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    image: '/hero1.png',
    title: 'Precision Care for Your Brightest Smile',
    subtitle: 'APEX CARE CLINIC',
    description: 'Transforming lives through advanced dental implants and expert surgical precision in a world-class environment.'
  },
  {
    id: 2,
    image: '/hero2.png',
    title: 'Experience Excellence in Dental Care',
    subtitle: 'SINCE 1995',
    description: 'From routine checkups to complex smile makeovers, our multi-speciality team is dedicated to your oral health.'
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="slide-container"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="overlay-gradient"></div>
          <div className="container">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="slide-content glass-dark"
            >
              <motion.span variants={itemVariants} className="subtitle-brand">
                {slides[current].subtitle}
              </motion.span>
              <motion.h1 variants={itemVariants}>
                {slides[current].title}
              </motion.h1>
              <motion.p variants={itemVariants}>
                {slides[current].description}
              </motion.p>
              <motion.div variants={itemVariants} className="hero-actions">
                <Link to="/appointment" className="btn-hero">BOOK APPOINTMENT</Link>
                <Link to="/services" className="btn-hero-outline">OUR SPECIALITIES</Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous Slide"><ChevronLeft size={24} /></button>
      <button className="slider-btn next" onClick={nextSlide} aria-label="Next Slide"><ChevronRight size={24} /></button>
      
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <span 
            key={idx} 
            className={`dot ${current === idx ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="scroll-indicator"
      >
        <MousePointer2 size={24} />
        <span>Scroll to Explore</span>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
