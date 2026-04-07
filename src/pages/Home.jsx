import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Welcome from '../components/Welcome';
import ServicesGrid from '../components/ServicesGrid';
import DoctorHighlights from '../components/DoctorHighlights';
import StatsCounter from '../components/StatsCounter';
import AppointmentForm from '../components/AppointmentForm';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Welcome />
      <ServicesGrid />
      <DoctorHighlights />
      <StatsCounter />
      <AppointmentForm />
    </>
  );
};

export default Home;
