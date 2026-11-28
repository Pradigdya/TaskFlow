import React from 'react';
import Navbar from '../layouts/navbar';
import HeroSection from '@/components/sections/HeroSection'; 
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';
import { Head } from '@inertiajs/react';

function Dashboard() {
  return (
    <>

    <Head title="TaskFlow"></Head>
    <div className="mx-auto bg-linear-to-b from-blue-50 to-white min-h-screen ">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection></AboutSection>
      <PricingSection></PricingSection>
      <FaqSection></FaqSection>
    </div>
    </>
  );
}

export default Dashboard;
