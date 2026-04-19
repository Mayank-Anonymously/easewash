import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main>
      <TopNavBar />
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 mt-5">
            <h1 className="font-headline fw-extrabold text-primary mb-4" style={{ fontSize: '3.5rem' }}>Terms & Conditions</h1>
            <p className="font-body text-muted mb-5">By using EaseWash, you agree to the following professional service terms.</p>
            
            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">1. Service Acceptance</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">EaseWash reserves the right to refuse service for specific garments that are deemed excessively soiled or fragile to the point of inevitable damage during standard processing.</p>
            </section>

            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">2. Pickup & Delivery</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Our 24-hour return policy applies to standard services within our primary coverage area (Kharar, Chandigarh, Mohali). Extreme weather or technical logistics may occasionally shift this window.</p>
            </section>

            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">3. Liability for Garments</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">While we exercise extreme "Liquid Precision," EaseWash is not liable for structural failures in garments (e.g., loose buttons, worn stitching, or zipper defects) present before processing.</p>
            </section>

            <section className="mb-5">
              <h3 className="font-headline fw-bold text-primary mb-3">4. Payment</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Pricing is weight-based (per kg) or per-item as specified in our service catalog. Payment is expected upon delivery of clean garments.</p>
            </section>

            <div className="p-4 bg-surface-container-low rounded-xl text-center">
              <p className="font-body fw-bold text-primary mb-0">For full details or specific disputes, please reach out via our official WhatsApp booking line.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
