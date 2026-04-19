import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-100 rounded-t-3xl mt-5 bg-white py-5 px-4 text-center">
      <div className="container">
        <div className="mb-4">
          <img
            alt="EaseWash Logo"
            className="img-fluid mx-auto"
            style={{ height: '100px', objectFit: 'contain' }}
            src="/logo.png"
          />
        </div>
        
        <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 mb-4">
          <Link className="text-muted text-decoration-underline text-underline-offset-4 fs-6 transition-colors" href="/#services">Wash & Fold</Link>
          <Link className="text-muted text-decoration-underline text-underline-offset-4 fs-6 transition-colors" href="/process">Our Process</Link>
          <Link className="text-muted text-decoration-underline text-underline-offset-4 fs-6 transition-colors" href="/about">About Us</Link>
          <Link className="text-muted text-decoration-underline text-underline-offset-4 fs-6 transition-colors" href="/terms">Terms</Link>
          <Link className="text-muted text-decoration-underline text-underline-offset-4 fs-6 transition-colors" href="/privacy">Privacy</Link>
          <Link className="text-muted text-decoration-underline text-underline-offset-4 fs-6 transition-colors" href="/refund">Refund Policy</Link>
          <Link className="text-muted text-decoration-underline text-underline-offset-4 fs-6 transition-colors" href="/cancellation">Cancellation Policy</Link>
        </div>
        
        <p className="text-muted fs-6 mb-4">
          © 2026 EaseWash Laundry. Serving Tri-city: KHARAR • CHANDIGARH • MOHALI
        </p>
        
        <div className="d-flex justify-content-center gap-3">
          <span className="bg-info bg-opacity-10 text-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <span className="material-symbols-outlined fs-5">social_leaderboard</span>
          </span>
          <span className="bg-info bg-opacity-10 text-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <span className="material-symbols-outlined fs-5">camera</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
