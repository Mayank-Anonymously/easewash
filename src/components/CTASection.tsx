import React from 'react';

export default function CTASection() {
  return (
    <section className="px-4 py-5" id="contact">
      <div className="container p-5 signature-gradient rounded-xl position-relative overflow-hidden text-center text-white" style={{ maxWidth: '1024px' }}>
        {/* Decorative Circle */}
        <div className="position-absolute bg-white bg-opacity-10 rounded-circle" style={{ top: '-6rem', right: '-6rem', width: '256px', height: '256px' }}></div>
        
        <h2 className="font-headline fs-1 fw-extrabold mb-4" style={{ fontWeight: 800 }}>Ready for Freshness?</h2>
        <p className="text-white text-opacity-75 fs-4 mb-5 mx-auto" style={{ maxWidth: '650px' }}>Skip the laundry chore and enjoy your free time. <br /><span className="fw-bold">Serving Kharar • Chandigarh • Mohali</span></p>
        
        <div className="d-inline-flex flex-column flex-md-row align-items-center gap-4 bg-white-10 backdrop-blur-md p-4 p-md-5 rounded-xl border border-white border-opacity-25 shadow-xl">
          <div className="d-flex flex-column align-items-center align-items-md-start">
            <span className="text-secondary-container fw-bold text-uppercase tracking-widest mb-1" style={{ fontSize: '10px' }}>Call/WhatsApp Now to Book</span>
            <a className="text-white text-decoration-none fs-2 font-headline fw-black tracking-tight" href="tel:+919817866657">+91 98178 66657</a>
          </div>
          <div className="vr bg-white opacity-25 d-none d-md-block" style={{ height: '48px' }}></div>
          <a className="btn bg-white text-primary px-5 py-3 rounded-pill fw-bold fs-5 d-flex align-items-center gap-2 hover-scale-102 transition-transform border-0" href="https://wa.me/919817866657">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
