import React from 'react';
import Navbar from '../layouts/navbar';
import HeroSection from '@/components/sections/HeroSection'; 
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import PricingSection from '@/components/sections/PricingSection';

function Dashboard() {
  return (
    <div className="mx-auto bg-gradient-to-b from-blue-50 to-white min-h-screen ">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection></AboutSection>
      <PricingSection></PricingSection>
    </div>
  );
}

export default Dashboard;
