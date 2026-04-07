import React, { useState } from 'react';
import './AppointmentForm.css';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    speciality: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending appointment request:', formData);
    alert('Thank you! Your appointment request has been sent. We will contact you shortly.');
  };

  return (
    <section className="appointment-section" id="appointment">
      <div className="container">
        <div className="appointment-wrapper">
          <div className="appointment-info">
            <span className="subtitle">CONTACT US</span>
            <h2>GET AN APPOINTMENT</h2>
            <p>Ready for a perfect smile? Book your consultation with our experts today.</p>
            
            <div className="contact-details">
              <div className="detail-item">
                <MapPin className="text-primary" />
                <div>
                  <h4>Location</h4>
                  <p>123, Apex Towers, MG Road, Pune, Maharashtra 411001</p>
                </div>
              </div>
              <div className="detail-item">
                <Phone className="text-primary" />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210 / 020 1234 5678</p>
                </div>
              </div>
              <div className="detail-item">
                <Mail className="text-primary" />
                <div>
                  <h4>Email</h4>
                  <p>appointments@apexcare.com</p>
                </div>
              </div>
              <div className="detail-item">
                <Clock className="text-primary" />
                <div>
                  <h4>Operating Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sun: 10:00 AM - 2:00 PM (Emergency only)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="appointment-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <select 
                    name="speciality" 
                    required 
                    value={formData.speciality}
                    onChange={handleChange}
                  >
                    <option value="">Select Speciality</option>
                    <option value="implants">Dental Implants</option>
                    <option value="ortho">Orthodontics</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="surgery">Oral Surgery</option>
                  </select>
                </div>
                <div className="form-group">
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Tell us about your dental concern..." 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">SUBMIT REQUEST</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
