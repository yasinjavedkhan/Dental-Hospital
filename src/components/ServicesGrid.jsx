import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicesGrid.css';
import { 
  Smile, 
  Activity, 
  HeartPulse, 
  PlusCircle, 
  ShieldCheck,
  ChevronRight,
  Stethoscope
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth using high-quality titanium posts and natural-looking crowns.',
    icon: <PlusCircle size={32} />,
    path: '/services/implants'
  },
  {
    id: 2,
    title: 'Orthodontics',
    description: 'Specialized braces and invisible aligners (Invisalign) to correct misaligned teeth and bite issues.',
    icon: <Activity size={32} />,
    path: '/services/orthodontics'
  },
  {
    id: 3,
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers to enhance your natural beauty and confidence.',
    icon: <Smile size={32} />,
    path: '/services/cosmetic'
  },
  {
    id: 4,
    title: 'Root Canal',
    description: 'Surgical preservation of infected teeth using advanced micro-endodontic technology.',
    icon: <HeartPulse size={32} />,
    path: '/services/root-canal'
  },
  {
    id: 5,
    title: 'Pediatric Dentistry',
    description: 'Gentle and friendly dental care specifically designed for children and adolescents.',
    icon: <ShieldCheck size={32} />,
    path: '/services/pediatric'
  },
  {
    id: 6,
    title: 'Oral Surgery',
    description: 'Expert surgical procedures for wisdom tooth extraction, jaw correction, and trauma care.',
    icon: <Stethoscope size={32} />,
    path: '/services/surgery'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const ServicesGrid = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">OUR EXPERTISE</span>
          <h2>DENTAL SPECIALITIES</h2>
          <p>Comprehensive oral healthcare delivered by industry-leading specialists using state-of-the-art technology.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="services-grid"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              className="service-card"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.path} className="service-link">
                  EXPLORE MORE <ChevronRight size={16} />
                </Link>
              </div>
              <div className="card-decoration"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="view-all-services mt-5 flex-center">
          <Link to="/services" className="btn-all-services">VIEW ALL SPECIALITIES</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
