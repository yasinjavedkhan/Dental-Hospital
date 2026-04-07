import React from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImplantsPage = () => {
  return (
    <div className="service-detail-page bg-light min-height-100">
      <section className="service-hero py-5 bg-secondary text-white text-center">
        <div className="container">
          <span className="subtitle text-primary">ADVANCED SURGERY</span>
          <h1>DENTAL IMPLANTS</h1>
          <p className="lead">The gold standard for permanent tooth replacement.</p>
        </div>
      </section>

      <section className="service-content py-5">
        <div className="container grid grid-cols-2 gap-5 align-center">
          <div className="content-side">
            <h2>Permanent Solutions for Missing Teeth</h2>
            <p>
              Dental implants are the most natural-looking and feeling way to replace missing teeth. 
              Unlike dentures or bridges, implants are surgically placed in the jawbone, acting as 
              sturdy roots for custom-made crowns.
            </p>
            <div className="benefits-grid grid grid-cols-2 gap-2 mt-4">
              <div className="benefit-item flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" />
                <span>Lifetime Durability</span>
              </div>
              <div className="benefit-item flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" />
                <span>Prevents Bone Loss</span>
              </div>
              <div className="benefit-item flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" />
                <span>Natural Appearance</span>
              </div>
              <div className="benefit-item flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" />
                <span>Restores Eating Ability</span>
              </div>
            </div>
            <Link to="/appointment" className="btn-appointment mt-5 inline-block">BOOK IMPLANT CONSULTATION</Link>
          </div>
          <div className="image-side">
            <div className="service-img-container">
              <img src="/hero1.png" alt="Dental Implants" className="rounded-lg shadow-lg" />
              <div className="badge bg-primary text-secondary">
                <ShieldCheck size={24} />
                <span>98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5">Our Implant Process</h2>
          <div className="process-steps grid grid-cols-3 gap-4">
            <div className="step-card text-center p-4">
              <div className="step-num bg-primary">1</div>
              <h3>Consultation</h3>
              <p>Detailed evaluation and 3D digital scanning of your jaw.</p>
            </div>
            <div className="step-card text-center p-4">
              <div className="step-num bg-primary">2</div>
              <h3>Placement</h3>
              <p>Precise surgical placement of the titanium implant post.</p>
            </div>
            <div className="step-card text-center p-4">
              <div className="step-num bg-primary">3</div>
              <h3>Restoration</h3>
              <p>Attachment of your custom-made, permanent dental crown.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImplantsPage;
