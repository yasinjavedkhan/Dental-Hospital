import React from 'react';
import { Syringe, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const SurgeryPage = () => {
  return (
    <div className="service-detail-page bg-light min-height-100">
      <section className="service-hero py-5 bg-secondary text-white text-center">
        <div className="container">
          <span className="subtitle text-primary">ADVANCED CARE</span>
          <h1>ORAL SURGERY</h1>
          <p className="lead">Expert surgical procedures for wisdom teeth, jaw correction, and trauma care.</p>
        </div>
      </section>

      <section className="service-content py-5">
        <div className="container grid grid-cols-2 gap-5 align-center">
          <div className="content-side">
            <h2>Experience Surgical Precision</h2>
            <p>
              Oral surgery requires the highest level of expertise and digital accuracy. 
              Our surgical team specializes in complex extractions, jaw reconstructions, 
              and dental implants with a focus on long-term health and stability.
            </p>
            <div className="surgery-benefits grid grid-cols-1 gap-3 mt-4">
              <div className="benefit-item flex items-center gap-3">
                <ShieldCheck size={28} className="text-secondary" />
                <div>
                  <strong>Minimally Invasive</strong>
                  <p>State-of-the-art surgical technology that reduces trauma and speeds up recovery.</p>
                </div>
              </div>
              <div className="benefit-item flex items-center gap-3">
                <CheckCircle2 size={28} className="text-secondary" />
                <div>
                  <strong>Painless Wisdom Tooth Removal</strong>
                  <p>Digital precision that makes the procedure easy and relatively painless.</p>
                </div>
              </div>
            </div>
            <Link to="/appointment" className="btn-appointment mt-5 inline-block">BOOK SURGICAL CONSULTATION</Link>
          </div>
          <div className="image-side">
            <div className="service-img-container">
              <img src="/hero2.png" alt="Oral Surgery" className="rounded-lg shadow-lg" />
              <div className="badge bg-primary text-secondary">
                <Syringe size={24} />
                <span>Advanced Surgical Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurgeryPage;
