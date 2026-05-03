import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';

export default function CancellationPage() {
  return (
    <main>
      <TopNavBar />
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 mt-5">
            <h1 className="font-headline fw-extrabold text-primary mb-4" style={{ fontSize: '3.5rem' }}>Cancellation Policy</h1>
            <p className="font-body text-muted mb-5">Flexibility is key, but timely communication helps us serve everyone better.</p>
            
            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">1. Pickup Cancellations</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">You may cancel a scheduled pickup at any time up to 2 hours before the scheduled window. Cancellations within the 2-hour window may incur a small logistics fee of ₹50.</p>
            </section>

            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">2. Service Cancellation</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Once garments have been picked up and reached our processing facility, the service cannot be cancelled. However, you may request specific items be returned without processing if notified immediately.</p>
            </section>

            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">3. No-Show Policy</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">If our fleet arrives for a scheduled pickup and no one is available to handover the garments, we will attempt to contact you. Repeated no-shows may lead to a suspension of automated booking privileges.</p>
            </section>

            <div className="p-4 bg-surface-container-low rounded-xl">
              <h4 className="font-headline fw-bold text-primary mb-2">How to Cancel</h4>
              <p className="font-body text-on-surface-variant mb-0">The easiest way to cancel or reschedule is by replying to our WhatsApp conversation or calling us at +91 98178 66657.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
