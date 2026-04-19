'use client';

import React from 'react';

export default function LocationsSection() {
  return (
    <section className="py-5" id="location">
      <div className="container" style={{ maxWidth: '1280px' }}>
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="bg-surface-container-high rounded-xl overflow-hidden shadow-inner" style={{ height: '400px' }}>
              <img
                className="w-100 h-100 opacity-75"
                style={{ objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.5s ease' }}
                alt="map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF8THG_CZntbd_Lzh40erzOCoOUNefh3E_6YqAKzy3rWQ9U4VEDtPp3vzOP1200i3qlgbwEfWgLbDUvt0uwgClMAxel61xCZPkZnb02kpOAu6kGncZMYCx5fV9iZs8krF_7RNBsVkrsrtFcXhaopR_uH4bPrg6IkslpPBqVLURdOP1jXcOSDA2gfEO11KfVEffIy1kvKDjQPY947MYeq5_81mIWJxpvYM7TGHfJXUwwufO2lb3HvnJmuQgI2lLeSFJppiGs21k6dFD"
                onMouseOver={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 px-lg-5">
            <h2 className="font-headline fs-1 fw-extrabold text-primary mb-4" style={{ fontWeight: 800 }}>Serving Tri-city</h2>
            <p className="text-on-surface-variant fs-5 mb-4">Our professional fleet covers the entire region to provide you with the most convenient laundry experience in Punjab and Haryana.</p>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-4 p-4 bg-surface-container-lowest rounded-xl border-outline-variant-10">
                <div className="bg-secondary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center text-secondary" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="fw-bold text-primary mb-0">KHARAR</h4>
                  <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>Doorstep pickup available daily</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4 p-4 bg-surface-container-lowest rounded-xl border-outline-variant-10">
                <div className="bg-secondary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center text-secondary" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="fw-bold text-primary mb-0">CHANDIGARH</h4>
                  <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>All sectors covered</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4 p-4 bg-surface-container-lowest rounded-xl border-outline-variant-10">
                <div className="bg-secondary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center text-secondary" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="fw-bold text-primary mb-0">MOHALI</h4>
                  <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>Rapid 24h service available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
