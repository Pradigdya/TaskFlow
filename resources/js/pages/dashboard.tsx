import React from 'react';
import Navbar from '../layouts/navbar';
import HeroSection from '@/components/sections/HeroSection'; 
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';

function Dashboard() {
  return (
    <div className="mx-auto bg-slate-50 min-h-screen ">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection></AboutSection>
    </div>
  );
}

export default Dashboard;
