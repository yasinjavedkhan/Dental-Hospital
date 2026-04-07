import React from 'react';
import './StatsCounter.css';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Happy Patients', value: '15,000+', suffix: '' },
  { label: 'Years of Experience', value: '25+', suffix: '' },
  { label: 'Dental Specialists', value: '20', suffix: '' },
  { label: 'Awards Winning', value: '10+', suffix: '' }
];

const StatsCounter = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut' } }
  };

  return (
    <section className="stats-section">
      <div className="stats-bg-decoration"></div>
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="stats-grid"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="stat-card"
            >
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
