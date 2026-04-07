import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';

// Service Sub-pages
import ImplantsPage from './pages/services/ImplantsPage';
import OrthodonticsPage from './pages/services/OrthodonticsPage';
import CosmeticPage from './pages/services/CosmeticPage';
import RootCanalPage from './pages/services/RootCanalPage';
import PediatricPage from './pages/services/PediatricPage';
import SurgeryPage from './pages/services/SurgeryPage';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          
          {/* Dedicated Service Routes */}
          <Route path="/services/implants" element={<ImplantsPage />} />
          <Route path="/services/orthodontics" element={<OrthodonticsPage />} />
          <Route path="/services/cosmetic" element={<CosmeticPage />} />
          <Route path="/services/root-canal" element={<RootCanalPage />} />
          <Route path="/services/pediatric" element={<PediatricPage />} />
          <Route path="/services/surgery" element={<SurgeryPage />} />

          {/* Default to Home for any unknown route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
