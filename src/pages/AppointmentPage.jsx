import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './AppointmentPage.css';

const AppointmentPage = () => {
  return (
    <div className="appointment-page-wrapper py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span className="subtitle text-primary">BOOK YOUR VISIT</span>
          <h1>DENTAL APPOINTMENT</h1>
          <p className="lead">Please fill out the form below and our team will get back to you shortly.</p>
        </div>
        
        <div className="full-appointment-form">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
