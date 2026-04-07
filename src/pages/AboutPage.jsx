import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="subpage-hero" style={{ backgroundImage: 'url(/welcome.png)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <span className="subtitle">EXPERIENCE EXCELLENCE</span>
          <h1>ABOUT APEX CARE</h1>
          <p className="lead">Redefining dental excellence with over 25 years of trust and thousands of happy smiles.</p>
        </motion.div>
      </section>

      <section className="about-mission py-5">
        <div className="container grid gap-5">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mission-content"
          >
            <h2>Our Mission & Vision</h2>
            <div className="divider-left"></div>
            <p>
              Founded in 1995, Apex Care has always been at the forefront of dental innovation. 
              Our mission is to provide world-class dental care that is both advanced and accessible. 
              We believe every patient deserves a personalized approach to their oral health.
            </p>
            <p>
              Our vision is to become the leading multi-speciality dental institute in the region, 
              known for clinical precision, patient safety, and transformative smile outcomes.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mission-image"
          >
            <img src="/welcome.png" alt="Our Mission" style={{ borderRadius: '12px', width: '100%', boxShadow: 'var(--shadow-lg)' }} />
          </motion.div>
        </div>
      </section>

      <section className="core-values bg-light py-5">
        <div className="container">
          <div className="section-title">
            <h2>Core Values</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: ShieldCheck, title: "Integrity", text: "We are transparent in our treatments and pricing, ensuring honest care for every patient." },
              { icon: Award, title: "Excellence", text: "We use the latest digital technology and evidence-based practices to ensure surgical precision." },
              { icon: Users, title: "Compassion", text: "Your comfort is our priority. We offer a friendly, stress-free environment for all ages." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="value-card"
              >
                <value.icon size={40} className="text-primary" />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats py-5 bg-secondary text-white">
        <div className="container stats-flex">
          <div className="stat-item">
            <h3>1995</h3>
            <p>Established</p>
          </div>
          <div className="stat-item border-left">
            <h3>15k+</h3>
            <p>Patients Treated</p>
          </div>
          <div className="stat-item border-left">
            <h3>20+</h3>
            <p>Expert Doctors</p>
          </div>
          <div className="stat-item border-left">
            <h3>5</h3>
            <p>Speciality Awards</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
