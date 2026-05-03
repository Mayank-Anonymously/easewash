'use client';

import React, { useState } from 'react';

const locations = [
  {
    id: 'KHARAR',
    title: 'KHARAR',
    desc: 'Doorstep pickup available daily',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27423.4475478672!2d76.626786!3d30.748367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef9954837699%3A0x6b8307380058e5f!2sKharar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1714734567890!5m2!1sen!2sin"
  },
  {
    id: 'CHANDIGARH',
    title: 'CHANDIGARH',
    desc: 'All sectors covered',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873523588!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1714734567890!5m2!1sen!2sin"
  },
  {
    id: 'MOHALI',
    title: 'MOHALI',
    desc: 'Rapid 24h service available',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54848.4231682859!2d76.6710434!3d30.704648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fede96814041b%3A0x33e5066986561e1b!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1714734567890!5m2!1sen!2sin"
  }
];

export default function LocationsSection() {
  const [activeLocation, setActiveLocation] = useState('CHANDIGARH');

  const activeData = locations.find(loc => loc.id === activeLocation) || locations[1];

  return (
    <section className="py-5" id="location">
      <div className="container" style={{ maxWidth: '1280px' }}>
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="bg-surface-container-high rounded-xl overflow-hidden shadow-inner border border-primary border-opacity-10" style={{ height: '450px' }}>
              <iframe
                src={activeData.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`EaseWash Service Area - ${activeData.title}`}
                className="transition-opacity"
                key={activeLocation}
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 px-lg-5">
            <h2 className="font-headline fs-1 fw-extrabold text-primary mb-4" style={{ fontWeight: 800 }}>Serving Tri-city</h2>
            <p className="text-on-surface-variant fs-5 mb-4">Our professional fleet covers the entire region of <span className="fw-bold text-secondary">Kharar, Chandigarh, and Mohali</span> to provide you with the most convenient laundry experience.</p>
            <div className="d-flex flex-column gap-3">
              {locations.map((loc) => (
                <div 
                  key={loc.id}
                  onClick={() => setActiveLocation(loc.id)}
                  className={`d-flex align-items-center gap-4 p-4 rounded-xl border-outline-variant-10 cursor-pointer transition-all hover-scale-102 ${
                    activeLocation === loc.id 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-surface-container-lowest text-primary'
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={`${
                    activeLocation === loc.id ? 'bg-white text-primary' : 'bg-secondary bg-opacity-10 text-secondary'
                  } rounded-circle d-flex align-items-center justify-content-center`} style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className={`fw-bold mb-0 ${activeLocation === loc.id ? 'text-white' : 'text-primary'}`}>{loc.title}</h4>
                    <p className={`mb-0 ${activeLocation === loc.id ? 'text-white text-opacity-75' : 'text-muted'}`} style={{ fontSize: '14px' }}>{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
