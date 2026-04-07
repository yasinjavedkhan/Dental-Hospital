import React from 'react';
import { Activity, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrthodonticsPage = () => {
  return (
    <div className="service-detail-page bg-light min-height-100">
      <section className="service-hero py-5 bg-secondary text-white text-center">
        <div className="container">
          <span className="subtitle text-primary">SMILE ALIGNMENT</span>
          <h1>ORTHODONTICS & BRACES</h1>
          <p className="lead">Correcting misalignments for a perfectly aligned smile.</p>
        </div>
      </section>

      <section className="service-content py-5">
        <div className="container grid grid-cols-2 gap-5 align-center">
          <div className="content-side">
            <h2>Transforming Your Smile with Precision</h2>
            <p>
              Orthodontics is more than just straightening teeth; it's about improving your bite 
              function and oral health. We offer the latest in orthodontic technology, including 
              invisible aligners and high-precision metal braces.
            </p>
            <div className="options-grid grid grid-cols-1 gap-3 mt-4">
              <div className="option-item flex items-center gap-3">
                <CheckCircle2 size={24} className="text-secondary" />
                <div>
                  <strong>Invisible Aligners (Invisalign)</strong>
                  <p>Clear, removable, and comfortable treatment for all ages.</p>
                </div>
              </div>
              <div className="option-item flex items-center gap-3">
                <CheckCircle2 size={24} className="text-secondary" />
                <div>
                  <strong>Traditional Metal Braces</strong>
                  <p>Highly effective for complex alignment issues with precision control.</p>
                </div>
              </div>
            </div>
            <Link to="/appointment" className="btn-appointment mt-5 inline-block">SCHEDULE BRACES CONSULTATION</Link>
          </div>
          <div className="image-side">
            <div className="service-img-container">
              <img src="/hero2.png" alt="Orthodontics" className="rounded-lg shadow-lg" />
              <div className="badge-vert bg-primary text-secondary">
                <Activity size={32} />
                <span>Expert Care Since 1995</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrthodonticsPage;
