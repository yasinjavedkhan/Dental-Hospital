import React from 'react';
import './ServicesPage.css';
import { 
  Smile, 
  Activity, 
  HeartPulse, 
  PlusCircle, 
  Syringe, 
  ShieldCheck,
  ChevronRight 
} from 'lucide-react';

const detailedServices = [
  {
    id: 1,
    title: 'Dental Implants',
    description: 'We offer the most advanced dental implant solutions to restore missing teeth permanently. Our procedure is minimally invasive and uses high-grade biocompatible titanium.',
    benefits: ['Natural Look & Feel', 'Lifetime Solution', 'Bone Preservation', 'Improved Chewing'],
    icon: <PlusCircle size={48} />,
    color: 'maroon'
  },
  {
    id: 2,
    title: 'Orthodontics & Braces',
    description: 'Straighten your teeth and correct your bite with our wide range of orthodontic treatments. We offer traditional metal braces, ceramic braces, and invisible aligners.',
    benefits: ['Correct Misalignment', 'Invisible Options', 'Improved Oral Health', 'All Age Groups'],
    icon: <Activity size={48} />,
    color: 'yellow'
  },
  {
    id: 3,
    title: 'Cosmetic Dentistry',
    description: 'Our smile makeover specialists can transform your appearance. Services include teeth whitening, porcelain veneers, and gummy smile corrections.',
    benefits: ['Confidence Boost', 'Whiter Teeth', 'Uniform Smile', 'Stain Removal'],
    icon: <Smile size={48} />,
    color: 'maroon'
  },
  {
    id: 4,
    title: 'Root Canal Treatment',
    description: 'Say goodbye to tooth pain with our painless root canal treatments. We use modern rotary endodontics for faster and more precise results.',
    benefits: ['Pain Relief', 'Save Natural Tooth', 'Fast Recovery', 'Infection Removal'],
    icon: <HeartPulse size={48} />,
    color: 'yellow'
  },
  {
    id: 5,
    title: 'Pediatric Dentistry',
    description: 'We provide a fun and gentle dental experience for your little ones. Our specialists are trained to handle children with care and empathy.',
    benefits: ['Child-Friendly Clinic', 'Early Prevention', 'Fluoride Treatment', 'Painless Care'],
    icon: <ShieldCheck size={48} />,
    color: 'maroon'
  },
  {
    id: 6,
    title: 'Oral Surgery',
    description: 'From wisdom tooth extractions to complex jaw surgery, our surgeons perform every procedure with clinical precision and safety.',
    benefits: ['Safe Extractions', 'Jaw Alignment', 'Expert Surgeons', 'Modern Sedation'],
    icon: <Syringe size={48} />,
    color: 'yellow'
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="subpage-hero" style={{ backgroundImage: 'url(/hero1.png)' }}>
        <div className="container">
          <span className="subtitle">EXCELLENCE IN CARE</span>
          <h1>OUR DENTAL SERVICES</h1>
          <p className="lead">Comprehensive, modern, and personalized dental treatments for every member of your family.</p>
        </div>
      </section>

      <section className="services-list py-5">
        <div className="container">
          <div className="services-full-grid">
            {detailedServices.map((service) => (
              <div key={service.id} className={`service-detail-card ${service.color}`}>
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                <div className="content-wrapper">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="benefits-list">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}><ChevronRight size={14} className="text-secondary" /> {benefit}</li>
                    ))}
                  </ul>
                  <button className="btn-get-quote">KNOW MORE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="emergency-cta py-5 bg-secondary text-white text-center">
        <div className="container">
          <h2>Need Emergency Dental Care?</h2>
          <p>We are available for emergency cases 24/7. Call us immediately for relief.</p>
          <a href="tel:+919876543210" className="btn-hero mt-3">CALL NOW: +91 98765 43210</a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
