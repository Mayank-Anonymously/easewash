import React from 'react';

export default function ServicesGrid() {
  return (
    <section className="py-5 bg-surface" id="services">
      <div className="container" style={{ maxWidth: '1280px', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="text-center mb-5 pb-3">
          <h2 className="font-headline fs-1 fw-extrabold text-primary mb-3" style={{ fontWeight: 800 }}>Our Services</h2>
          <div className="bg-secondary rounded-pill mx-auto" style={{ width: '6rem', height: '4px' }}></div>
        </div>
        
        <div className="row g-4 align-items-stretch">
          {/* Service 1 */}
          <div className="col-lg-4">
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover-shadow-xl transition-shadow h-100 group border-0 card">
              <div className="bg-surface-container-low rounded-xl d-flex align-items-center justify-content-center mb-4 transition-colors p-3" style={{ width: '64px', height: '64px' }}>
                <span className="material-symbols-outlined text-secondary fs-1">styler</span>
              </div>
              <h3 className="font-headline fs-3 fw-bold text-primary mb-2">Wash & Fold</h3>
              <p className="text-secondary fw-extrabold fs-2 mb-3">₹45<span className="fs-6 text-on-surface-variant fw-normal">/kg</span></p>
              <p className="text-on-surface-variant mb-4 leading-relaxed">Daily wear, casual clothes, bedsheets & bulk laundry handled with care.</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2 fs-6 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary fs-5">check</span> Premium Detergents
                </li>
                <li className="d-flex align-items-center gap-2 fs-6 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary fs-5">check</span> Softener Included
                </li>
              </ul>
              <a 
                href="https://wa.me/918307380058" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-secondary rounded-pill fw-bold w-100 mt-auto shadow-sm"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>

          {/* Service 2 - Highlighted */}
          <div className="col-lg-4">
            <div className="bg-primary text-white p-5 rounded-xl shadow-2xl h-100 service-card-popular position-relative overflow-hidden border-0 card">
              <div className="position-absolute top-0 end-0 mt-4 me-4 bg-info text-on-secondary-fixed px-3 py-1 rounded-pill fw-bold text-uppercase tracking-widest" style={{ fontSize: '10px' }}>Popular</div>
              <div className="bg-white bg-opacity-10 rounded-xl d-flex align-items-center justify-content-center mb-4 p-3" style={{ width: '64px', height: '64px' }}>
                <span className="material-symbols-outlined text-secondary-container fs-1">rocket_launch</span>
              </div>
              <h3 className="font-headline fs-3 fw-bold mb-2">Express Washing</h3>
              <p className="text-secondary-container fw-extrabold fs-2 mb-3">₹120<span className="fs-6 text-white text-opacity-75 fw-normal">/kg</span></p>
              <p className="text-white text-opacity-75 mb-4 leading-relaxed">Perfect for urgent needs & last-minute plans. Returned to you in record time.</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2 fs-6 text-white text-opacity-90">
                  <span className="material-symbols-outlined text-secondary-container fs-5">schedule</span> 4-6 Hour Delivery
                </li>
                <li className="d-flex align-items-center gap-2 fs-6 text-white text-opacity-90">
                  <span className="material-symbols-outlined text-secondary-container fs-5">priority_high</span> Priority Handling
                </li>
              </ul>
              <a 
                href="https://wa.me/918307380058" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-info rounded-pill fw-bold w-100 mt-auto text-on-secondary-fixed shadow"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-4">
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover-shadow-xl transition-shadow h-100 border-0 card">
              <div className="bg-surface-container-low rounded-xl d-flex align-items-center justify-content-center mb-4 transition-colors p-3" style={{ width: '64px', height: '64px' }}>
                <span className="material-symbols-outlined text-secondary fs-1">iron</span>
              </div>
              <h3 className="font-headline fs-3 fw-bold text-primary mb-2">Wash & Iron</h3>
              <p className="text-secondary fw-extrabold fs-2 mb-3">₹90<span className="fs-6 text-on-surface-variant fw-normal">/kg</span></p>
              <p className="text-on-surface-variant mb-4 leading-relaxed">Office wear, uniforms & formal outfits pressed to clinical perfection.</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2 fs-6 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary fs-5">check</span> Steam Ironing
                </li>
                <li className="d-flex align-items-center gap-2 fs-6 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary fs-5">check</span> Hanger Delivery
                </li>
              </ul>
              <a 
                href="https://wa.me/918307380058" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-secondary rounded-pill fw-bold w-100 mt-auto shadow-sm"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
