import React from 'react';
import { motion } from 'framer-motion';
import './DoctorHighlights.css';
import { Award, GraduationCap, Medal, Star, CheckCircle2 } from 'lucide-react';

const DoctorHighlights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section className="doctor-section">
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="doctor-card glass"
        >
          <motion.div variants={imageVariants} className="doctor-image">
            <div className="image-wrapper">
              <img src="/doctor.png" alt="Dr. Sameer Phadke" className="surgeon-img" />
              <div className="experience-tag">
                25 YEARS EXP.
              </div>
            </div>
          </motion.div>
          
          <div className="doctor-info">
            <motion.span variants={itemVariants} className="tagline">MEET OUR CHIEF SURGEON</motion.span>
            <motion.h2 variants={itemVariants}>DR. SAMEER PHADKE</motion.h2>
            <motion.p variants={itemVariants} className="credentials">MDS (Oral & Maxillofacial Surgery), BDS, Fellow IAO</motion.p>
            
            <motion.div variants={itemVariants} className="doctor-bio">
              <p>
                Dr. Sameer Phadke is a visionary in the field of dental surgery with over two decades 
                of experience. He specializes in complex dental implants, jaw reconstruction, and 
                advanced cosmetic procedures.
              </p>
              <p>
                Under his leadership, Apex Care has grown into one of the most trusted names 
                in oral healthcare, known for its precision, empathy, and surgical excellence.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="qualifications-grid">
              <div className="qual-item">
                <GraduationCap className="text-primary" />
                <div>
                  <h4>Education</h4>
                  <p>MDS from Government Dental College</p>
                </div>
              </div>
              <div className="qual-item">
                <Award className="text-primary" />
                <div>
                  <h4>Fellowship</h4>
                  <p>Fellow of Internal Association of Orthodontists</p>
                </div>
              </div>
              <div className="qual-item">
                <Medal className="text-primary" />
                <div>
                  <h4>Recognition</h4>
                  <p>Best Oral Surgeon (MH) - 2022</p>
                </div>
              </div>
              <div className="qual-item">
                <Star className="text-primary" />
                <div>
                  <h4>Specialization</h4>
                  <p>Expert in Single-Day Dental Implants</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="doctor-actions">
              <button className="btn-doctor">KNOW MORE ABOUT DR. SAMEER</button>
              <div className="verified-badge">
                <CheckCircle2 size={18} /> Verified Specialist
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorHighlights;
