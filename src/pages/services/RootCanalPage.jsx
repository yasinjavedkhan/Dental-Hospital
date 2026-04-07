import React from 'react';
import { HeartPulse, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const RootCanalPage = () => {
  return (
    <div className="service-detail-page bg-light min-height-100">
      <section className="service-hero py-5 bg-secondary text-white text-center">
        <div className="container">
          <span className="subtitle text-primary">PAINLESS TREATMENT</span>
          <h1>ROOT CANAL THERAPY</h1>
          <p className="lead">Saving your natural teeth with advanced surgical technology.</p>
        </div>
      </section>

      <section className="service-content py-5">
        <div className="container grid grid-cols-2 gap-5 align-center">
          <div className="content-side">
            <h2>Painless Root Canal Procedures</h2>
            <p>
              Forget the myths about root canal pain. Our clinic uses the latest micro-endodontic technology 
              to ensure your treatment is as comfortable and efficient as a routine filling.
            </p>
            <div className="root-canal-benefits grid grid-cols-1 gap-3 mt-4">
              <div className="benefit-item flex items-center gap-3">
                <ShieldCheck size={28} className="text-primary" />
                <div>
                  <strong>Digital Endodontics</strong>
                  <p>Computerized precision for deeper, safer, and faster treatment.</p>
                </div>
              </div>
              <div className="benefit-item flex items-center gap-3">
                <Activity size={28} className="text-primary" />
                <div>
                  <strong>Single Visit Treatment</strong>
                  <p>Save time with our one-visit root canal sessions for most cases.</p>
                </div>
              </div>
            </div>
            <Link to="/appointment" className="btn-appointment mt-5 inline-block">SCHEDULE URGENT APPOINTMENT</Link>
          </div>
          <div className="image-side">
            <div className="service-img-container">
              <img src="/hero1.png" alt="Root Canal Therapy" className="rounded-lg shadow-lg" />
              <div className="badge-full bg-primary text-secondary">
                <HeartPulse size={32} />
                <span>Painless Technology Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RootCanalPage;
