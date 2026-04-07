import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock, Users } from 'lucide-react';
import './Welcome.css';

const Welcome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section className="welcome-section" id="about">
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="welcome-grid"
        >
          <div className="welcome-content">
            <motion.span variants={itemVariants} className="subtitle">WELCOME TO APEX CARE</motion.span>
            <motion.h2 variants={itemVariants}>
              Your Journey to a Perfect Smile Starts Here
            </motion.h2>
            <motion.p variants={itemVariants} className="welcome-lead">
              At Apex Care Multi-Speciality Clinic, we combine over 25 years of clinical excellence 
              with the world's most advanced dental technologies to provide you with a world-class 
              healthcare experience.
            </motion.p>
            
            <motion.div variants={itemVariants} className="features-list">
              <div className="feature-item">
                <CheckCircle2 className="text-primary" />
                <div>
                  <h4>Advanced Technology</h4>
                  <p>Equipped with the latest 3D digital imaging and painless surgical tools.</p>
                </div>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="text-primary" />
                <div>
                  <h4>Expert Specialists</h4>
                  <p>Our team consists of MDS surgeons and certified orthodontists with global experience.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="welcome-stats flex-center gap-5 mt-5">
              <div className="mini-stat">
                <Award size={32} className="text-secondary" />
                <div>
                  <strong>NABH</strong>
                  <span>Accredited</span>
                </div>
              </div>
              <div className="mini-stat">
                <Users size={32} className="text-secondary" />
                <div>
                  <strong>15k+</strong>
                  <span>Patients</span>
                </div>
              </div>
              <div className="mini-stat">
                <Clock size={32} className="text-primary" />
                <div>
                  <strong>24/7</strong>
                  <span>Emergency</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={imageVariants} className="welcome-image-container">
            <div className="main-image-wrapper">
              <img src="/welcome.png" alt="Apex Care Clinic Interior" className="welcome-img" />
              <div className="floating-badge glass">
                <span className="number">25</span>
                <span className="text">Years of <br /> Excellence</span>
              </div>
            </div>
            <div className="image-accent-glow"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
