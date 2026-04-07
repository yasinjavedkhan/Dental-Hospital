import React from 'react';
import { Smile, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CosmeticPage = () => {
  return (
    <div className="service-detail-page bg-light min-height-100">
      <section className="service-hero py-5 bg-secondary text-white text-center">
        <div className="container">
          <span className="subtitle text-primary">SMILE MAKEOVER</span>
          <h1>COSMETIC DENTISTRY</h1>
          <p className="lead">Enhancing your natural beauty with world-class aesthetics.</p>
        </div>
      </section>

      <section className="service-content py-5">
        <div className="container grid grid-cols-2 gap-5 align-center">
          <div className="content-side">
            <h2>Your Path to a Radiant Smile</h2>
            <p>
              We believe every smile is unique and deserves a personalized touch. 
              Our cosmetic procedures combine art and science to give you the smile you've always dreamed of.
            </p>
            <div className="cosmetic-grid grid grid-cols-2 gap-3 mt-4">
              <div className="cosm-item bg-white p-3 rounded shadow-sm">
                <Star className="text-secondary mb-2" />
                <h3>Teeth Whitening</h3>
                <p>Advanced laser technology for immediate, stunning results.</p>
              </div>
              <div className="cosm-item bg-white p-3 rounded shadow-sm">
                <Star className="text-secondary mb-2" />
                <h3>Porcelain Veneers</h3>
                <p>Custom shells that perfect your teeth's color and shape.</p>
              </div>
            </div>
            <Link to="/appointment" className="btn-appointment mt-5 inline-block">BOOK A SMILE CONSULTATION</Link>
          </div>
          <div className="image-side">
            <div className="service-img-container">
              <img src="/welcome.png" alt="Cosmetic Dentistry" className="rounded-lg shadow-lg" />
              <div className="badge bg-primary text-secondary">
                <Smile size={24} />
                <span>10k+ Smile Makeovers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CosmeticPage;
