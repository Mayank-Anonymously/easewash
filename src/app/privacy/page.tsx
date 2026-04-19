import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main>
      <TopNavBar />
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 mt-5">
            <h1 className="font-headline fw-extrabold text-primary mb-4" style={{ fontSize: '3.5rem' }}>Privacy Policy</h1>
            <p className="font-body text-muted mb-5">Last Updated: April 2026</p>
            
            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">1. Information We Collect</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">We collect information provided by you during the booking process, including your name, contact number, and pickup/delivery address. This data is essential for providing our services across the Tri-city area.</p>
            </section>

            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">2. How We Use Your Data</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Your information is used solely for service coordination, including WhatsApp notifications for booking confirmations, status updates, and professional garment handling communications.</p>
            </section>

            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">3. Data Protection</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">We prioritize the security of your information and do not share your personal data with third parties except as required for service delivery or by law.</p>
            </section>

            <div className="p-4 bg-surface-container-low rounded-xl">
              <p className="font-body text-on-surface-variant mb-0">If you have any questions regarding your privacy, please contact us via WhatsApp at +91 8307380058.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
