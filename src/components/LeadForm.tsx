'use client';

import React, { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'Wash & Fold',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', address: '', service: 'Wash & Fold', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-5 bg-surface-container-low" id="book-now">
      <div className="container py-4" style={{ maxWidth: '1100px' }}>
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden row g-0 border border-primary border-opacity-10">
          <div className="col-lg-5 signature-gradient p-5 d-flex flex-column justify-content-center text-white position-relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="position-absolute bg-white bg-opacity-10 rounded-circle" style={{ top: '-4rem', left: '-4rem', width: '200px', height: '200px' }}></div>
            
            <div className="position-relative">
              <h2 className="font-headline fw-extrabold mb-4" style={{ fontSize: '2.5rem' }}>Book Your Service</h2>
              <p className="fs-5 text-white text-opacity-75 mb-5 leading-relaxed">Experience Liquid Precision in garment care. Fill out the form and our professional fleet will be at your doorstep.</p>
              
              <div className="d-flex flex-column gap-4 pt-4 border-top border-white border-opacity-10">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <span className="material-symbols-outlined fs-4">call</span>
                  </div>
                  <div>
                    <p className="mb-0 text-white text-opacity-50 small text-uppercase fw-bold tracking-widest">Call or WhatsApp</p>
                    <p className="mb-0 fw-bold fs-5">+91 98178 66657</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <span className="material-symbols-outlined fs-4">schedule</span>
                  </div>
                  <div>
                    <p className="mb-0 text-white text-opacity-50 small text-uppercase fw-bold tracking-widest">Available Daily</p>
                    <p className="mb-0 fw-bold fs-5">7:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7 p-4 p-md-5">
            <h3 className="font-headline fw-bold text-primary mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold text-primary small text-uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    required
                    className="form-control rounded-pill px-4 py-3 border-0 bg-surface-container-high"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold text-primary small text-uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="form-control rounded-pill px-4 py-3 border-0 bg-surface-container-high"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold text-primary small text-uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    className="form-control rounded-pill px-4 py-3 border-0 bg-surface-container-high"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold text-primary small text-uppercase tracking-wider">Service Interest</label>
                  <select
                    className="form-select rounded-pill px-4 py-3 border-0 bg-surface-container-high"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option>Wash & Fold</option>
                    <option>Wash & Iron</option>
                    <option>Express Washing</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label fw-bold text-primary small text-uppercase tracking-wider">Pickup Address</label>
                  <input
                    type="text"
                    required
                    className="form-control rounded-pill px-4 py-3 border-0 bg-surface-container-high"
                    placeholder="House No, Sector, Area Name"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-bold text-primary small text-uppercase tracking-wider">Additional Instructions</label>
                  <textarea
                    className="form-control rounded-xl px-4 py-3 border-0 bg-surface-container-high"
                    rows={3}
                    placeholder="Mention any specific care instructions or pickup preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn signature-gradient text-white w-100 rounded-pill py-3 fw-bold fs-5 shadow-lg hover-scale-102 transition-transform border-0"
                  >
                    {status === 'loading' ? (
                      <span className="d-flex align-items-center justify-content-center gap-2">
                        <span className="spinner-border spinner-border-sm" role="status"></span>
                        Sending Request...
                      </span>
                    ) : 'Schedule Free Pickup'}
                  </button>
                </div>
              </div>
              
              {status === 'success' && (
                <div className="mt-4 p-3 bg-success bg-opacity-10 text-success rounded-xl text-center fw-bold border border-success border-opacity-20 d-flex align-items-center justify-content-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  Message sent successfully! We'll contact you within 30 minutes.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-3 bg-danger bg-opacity-10 text-danger rounded-xl text-center fw-bold border border-danger border-opacity-20 d-flex align-items-center justify-content-center gap-2">
                  <span className="material-symbols-outlined">error</span>
                  Something went wrong. Please call us directly at +91 98178 66657.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
