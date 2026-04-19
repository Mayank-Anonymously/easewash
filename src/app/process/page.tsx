import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';

export default function ProcessPage() {
  return (
    <main>
      <TopNavBar />
      <div className="container py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 mt-5">
            <h1 className="font-headline fw-extrabold text-primary text-center mb-5" style={{ fontSize: '3.5rem' }}>Our Liquid Precision Process</h1>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-4 h-100 bg-white shadow-sm rounded-xl border-outline-variant-10 transition-shadow hover-shadow-xl">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="fs-1 fw-black text-secondary">01</span>
                    <h3 className="font-headline fw-bold text-primary mb-0">Doorstep Pickup</h3>
                  </div>
                  <p className="font-body text-on-surface-variant leading-relaxed">Schedule via WhatsApp and our logistics fleet arrives at your doorstep in KHARAR, CHANDIGARH, or MOHALI.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 h-100 bg-white shadow-sm rounded-xl border-outline-variant-10 transition-shadow hover-shadow-xl">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="fs-1 fw-black text-secondary">02</span>
                    <h3 className="font-headline fw-bold text-primary mb-0">Professional Sorting</h3>
                  </div>
                  <p className="font-body text-on-surface-variant leading-relaxed">Garments are meticulously sorted based on fabric type, color, and specific care requirements.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 h-100 bg-white shadow-sm rounded-xl border-outline-variant-10 transition-shadow hover-shadow-xl">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="fs-1 fw-black text-secondary">03</span>
                    <h3 className="font-headline fw-bold text-primary mb-0">Deep Cleaning</h3>
                  </div>
                  <p className="font-body text-on-surface-variant leading-relaxed">Using premium detergents and softeners, we ensure deep fiber cleansing without compromising fabric integrity.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 h-100 bg-white shadow-sm rounded-xl border-outline-variant-10 transition-shadow hover-shadow-xl">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="fs-1 fw-black text-secondary">04</span>
                    <h3 className="font-headline fw-bold text-primary mb-0">Steam & Fold</h3>
                  </div>
                  <p className="font-body text-on-surface-variant leading-relaxed">Garments are steam ironed for clinical perfection and neatly folded or placed on hangers.</p>
                </div>
              </div>

              <div className="col-md-6 mx-auto">
                <div className="p-4 h-100 bg-primary text-white shadow-xl rounded-xl">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="fs-1 fw-black text-info">05</span>
                    <h3 className="font-headline fw-bold mb-0">24h Delivery</h3>
                  </div>
                  <p className="font-body text-white text-opacity-75 leading-relaxed">Within 24 hours, your fresh, clean clothes are back in your wardrobe, ready for your next big day.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-5">
              <a href="https://wa.me/918307380058" className="btn signature-gradient text-white px-5 py-3 rounded-pill fw-bold fs-5 shadow-lg">Start the Process Now</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
