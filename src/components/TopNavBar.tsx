'use client';

import React from 'react';
import Link from 'next/link';

export default function TopNavBar() {
  return (
    <nav className="top-nav bg-white shadow-2xl d-flex justify-content-between align-items-center px-4 py-2">
      <div className="fs-4 fw-bolder text-primary">
        <img
          alt="EaseWash Logo"
          className="img-fluid"
          style={{ height: '80px', objectFit: 'contain' }}
          src="/logo.png"
        />
      </div>
      <div className="d-none d-md-flex align-items-center gap-4">
        <Link className="font-headline fw-bold text-decoration-none text-muted transition-colors" href="/about">About Us</Link>
        <Link className="font-headline fw-bold text-decoration-none text-muted transition-colors" href="/process">Our Process</Link>
        <Link className="font-headline fw-bold text-decoration-none text-muted transition-colors" href="/#services" style={{ color: 'var(--bs-primary)' }}>Services</Link>
        <Link className="font-headline fw-bold text-decoration-none text-muted transition-colors" href="/#location">Location</Link>
        <Link className="font-headline fw-bold text-decoration-none text-muted transition-colors" href="/#contact">Contact</Link>
      </div>
      <div className="d-flex align-items-center gap-2">
        <a 
          href="tel:919817866657" 
          className="btn border-primary text-primary rounded-pill fw-bold px-3 py-2 hover-scale-102 transition-transform d-flex align-items-center gap-1"
          style={{ borderWidth: '2px' }}
        >
          <span className="material-symbols-outlined fs-5">call</span>
          <span className="d-none d-sm-inline">Call</span>
        </a>
        <a 
          href="https://wa.me/919817866657" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn signature-gradient text-white rounded-pill fw-bold px-4 py-2 hover-scale-102 transition-transform border-0 text-on-primary d-flex align-items-center"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
