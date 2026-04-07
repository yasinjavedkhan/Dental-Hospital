import React from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const PediatricPage = () => {
  return (
    <div className="service-detail-page bg-light min-height-100">
      <section className="service-hero py-5 bg-secondary text-white text-center">
        <div className="container">
          <span className="subtitle text-primary">KIDS DENTISTRY</span>
          <h1>PEDIATRIC DENTISTRY</h1>
          <p className="lead">Gentle dental care designed specifically for children.</p>
        </div>
      </section>

      <section className="service-content py-5">
        <div className="container grid grid-cols-2 gap-5 align-center">
          <div className="content-side">
            <h2>Making Dental Visits Fun for Children</h2>
            <p>
              We specialize in providing a friendly and stress-free environment for children and adolescents. 
              Our pediatric specialists are trained to handle young patients with care and empathy, 
              ensuring their early dental experiences are positive and healthy.
            </p>
            <div className="pediatric-benefits grid grid-cols-1 gap-3 mt-4">
              <div className="benefit-item flex items-center gap-3">
                <ShieldCheck size={28} className="text-secondary" />
                <div>
                  <strong>Friendly Atmosphere</strong>
                  <p>A child-centric design to reduce anxiety and promote healthy dental habits.</p>
                </div>
              </div>
              <div className="benefit-item flex items-center gap-3">
                <CheckCircle2 size={28} className="text-secondary" />
                <div>
                  <strong>Preventive Care</strong>
                  <p>Focus on early detection, fluorides, and pit & fissure sealants for strong teeth.</p>
                </div>
              </div>
            </div>
            <Link to="/appointment" className="btn-appointment mt-5 inline-block">BOOK A KIDS CONSULTATION</Link>
          </div>
          <div className="image-side">
            <div className="service-img-container">
              <img src="/welcome.png" alt="Pediatric Dentistry" className="rounded-lg shadow-lg" />
              <div className="badge bg-primary text-secondary">
                <Activity size={24} />
                <span>Gentle Care Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PediatricPage;
