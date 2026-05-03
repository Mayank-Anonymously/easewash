import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';

export default function RefundPage() {
  return (
    <main>
      <TopNavBar />
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 mt-5">
            <h1 className="font-headline fw-extrabold text-primary mb-4" style={{ fontSize: '3.5rem' }}>Refund Policy</h1>
            <p className="font-body text-muted mb-5">We strive for liquid precision, but if something isn't right, we're here to help.</p>
            
            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">1. Service Satisfaction</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">If you are dissatisfied with the quality of our washing or ironing, please notify us within 24 hours of delivery. We will re-process the specific items free of charge as our primary resolution.</p>
            </section>

            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">2. Refund Eligibility</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Monetary refunds are considered on a case-by-case basis and only if a re-service cannot resolve the issue. Refunds are typically issued as service credits for future EaseWash bookings.</p>
            </section>

            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">3. Claim Process</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">To initiate a claim, please send a message to our WhatsApp support line (+91 98178 66657) with your order details and photos of the garments in question.</p>
            </section>

            <div className="p-4 bg-surface-container-low rounded-xl text-center">
              <p className="font-body fw-bold text-primary mb-0">Our goal is 100% satisfaction. Your feedback helps us improve our "Art of Fabric Care."</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
