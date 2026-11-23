import React from 'react';
import Navbar from '../layouts/navbar';
import HeroSection from '@/components/sections/HeroSection'; 
import FeaturesSection from '@/components/sections/FeaturesSection';

function Dashboard() {
  return (
    <div className="mx-auto bg-slate-50 min-h-screen ">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      
    </div>
  );
}

export default Dashboard;
