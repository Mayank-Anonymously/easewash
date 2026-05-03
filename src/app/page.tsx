import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import ServicesGrid from '@/components/ServicesGrid';
import LeadForm from '@/components/LeadForm';
import CTASection from '@/components/CTASection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="position-relative">
      <TopNavBar />
      <HeroSection />
      <ValuesSection />
      <ServicesGrid />
      <LeadForm />
      <CTASection />
      <LocationsSection />
      <Footer />
    </main>
  );
}
